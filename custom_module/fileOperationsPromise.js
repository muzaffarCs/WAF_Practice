import fs from 'fs/promises';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Menu() {

    console.log("\n===== File Operations Using Promises =====");
    console.log("1. Write File");
    console.log("2. Read File");
    console.log("3. Append File");
    console.log("4. Copy File");
    console.log("5. Delete File");
    console.log("6. Exit");

    rl.question("Please select an option: ", async (answer) => {

        switch (answer) {

            case "1":
                rl.question("Enter filename: ", async (filename) => {
                    rl.question("Enter content: ", async (content) => {

                        try {
                            await fs.writeFile(filename, content);
                            console.log(`File "${filename}" written successfully.`);
                        } catch (err) {
                            console.log("Error writing file:", err);
                        }

                        Menu();
                    });
                });
                break;


            case "2":
                rl.question("Enter filename: ", async (filename) => {

                    try {
                        const data = await fs.readFile(filename, 'utf8');

                        console.log("\nFile Content:");
                        console.log(data);

                    } catch (err) {
                        console.log("Error reading file:", err);
                    }

                    Menu();
                });
                break;


            case "3":
                rl.question("Enter filename: ", async (filename) => {
                    rl.question("Enter content to append: ", async (content) => {

                        try {
                            await fs.appendFile(filename, `\n${content}`);
                            console.log(`Content appended to "${filename}" successfully.`);
                        } catch (err) {
                            console.log("Error appending file:", err);
                        }

                        Menu();
                    });
                });
                break;


            case "4":
                rl.question("Enter source filename: ", async (source) => {
                    rl.question("Enter destination filename: ", async (destination) => {

                        try {
                            await fs.copyFile(source, destination);
                            console.log(`File copied from "${source}" to "${destination}".`);
                        } catch (err) {
                            console.log("Error copying file:", err);
                        }

                        Menu();
                    });
                });
                break;


            case "5":
                rl.question("Enter filename to delete: ", async (filename) => {

                    try {
                        await fs.unlink(filename);
                        console.log(`File "${filename}" deleted successfully.`);
                    } catch (err) {
                        console.log("Error deleting file:", err);
                    }

                    Menu();
                });
                break;


            case "6":
                console.log("Thank you");
                rl.close();
                break;


            default:
                console.log("Invalid option. Please try again.");
                Menu();
        }
    });
}

Menu();