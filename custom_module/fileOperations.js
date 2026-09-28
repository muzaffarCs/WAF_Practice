import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Menu() {
    console.log("\n===== File Operations =====");
    console.log("1. Write File");
    console.log("2. Read File");
    console.log("3. Append File");
    console.log("4. Copy File");
    console.log("5. Delete File");
    console.log("6. Exit");

    rl.question("Please select an option: ", (answer) => {

        switch (answer) {

            case "1":
                rl.question("Enter filename: ", (filename) => {
                    rl.question("Enter content: ", (content) => {

                        fs.writeFile(filename, content, (err) => {
                            if (err) {
                                console.log("Error writing file:", err);
                            } else {
                                console.log(`File "${filename}" written successfully.`);
                            }

                            Menu();
                        });

                    });
                });
                break;


            case "2":
                rl.question("Enter filename: ", (filename) => {

                    fs.readFile(filename, 'utf8', (err, data) => {
                        if (err) {
                            console.log("Error reading file:", err);
                        } else {
                            console.log("\nFile Content:");
                            console.log(data);
                        }

                        Menu();
                    });

                });
                break;


            case "3":
                rl.question("Enter filename: ", (filename) => {
                    rl.question("Enter content to append: ", (content) => {

                        fs.appendFile(filename, `\n${content}`, (err) => {
                            if (err) {
                                console.log("Error appending file:", err);
                            } else {
                                console.log(`Content appended to "${filename}" successfully.`);
                            }

                            Menu();
                        });

                    });
                });
                break;


            case "4":
                rl.question("Enter source filename: ", (source) => {
                    rl.question("Enter destination filename: ", (destination) => {

                        fs.copyFile(source, destination, (err) => {
                            if (err) {
                                console.log("Error copying file:", err);
                            } else {
                                console.log(`File copied from "${source}" to "${destination}".`);
                            }

                            Menu();
                        });

                    });
                });
                break;


            case "5":
                rl.question("Enter filename to delete: ", (filename) => {

                    fs.unlink(filename, (err) => {
                        if (err) {
                            console.log("Error deleting file:", err);
                        } else {
                            console.log(`File "${filename}" deleted successfully.`);
                        }

                        Menu();
                    });

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