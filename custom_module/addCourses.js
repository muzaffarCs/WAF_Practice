import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const courses = [];

function Menu() {
    console.log("1. Add Course");
    console.log("2. View Courses");
    console.log("3. Update Course");
    console.log("4. Delete Course");
    console.log("5. Exit");
    rl.question("Please select an option: ", (answer) => {
        switch (answer) {
            case "1":
                rl.question("Enter course name: ", (courseName) => {
                    courses.push(courseName);
                    Menu();
                });
                break;
            case "2":
                courses.forEach(item => {
                    console.log(item);
                });
                Menu();
                break;
            case "3":
                rl.question("Enter course name to update: ", (oldName) => {
                    const index = courses.indexOf(oldName);
                    if (index !== -1) {
                        rl.question("Enter new course name: ", (newName) => {
                            courses[index] = newName;
                            console.log(`Course "${oldName}" updated to "${newName}".`);
                            Menu();
                        });
                    } else {
                        console.log(`Course "${oldName}" not found.`);
                        Menu();
                    }
                });
                break;
            case "4":
                rl.question("Enter course name to delete: ", (courseName) => {
                    const index = courses.indexOf(courseName);
                    if (index !== -1) {
                        courses.splice(index, 1);
                        console.log(`Course "${courseName}" deleted.`);
                    } else {
                        console.log(`Course "${courseName}" not found.`);
                    }
                    Menu();
                });
                break;
            case "5":
                console.log("Thank you");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                Menu();
        }
    });
}
Menu()