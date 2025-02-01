const readline = require("readline-sync");

console.log("Welcome to Task Manager");

const userName = readline.question("What is your name? ");
console.log(`Hello, ${userName}!`);

var tasks = [];

while (true) {
    console.log("\nChoose an option:");
    console.log("1- Add a task");
    console.log("2- View tasks");
    console.log("3- Delete a task");
    console.log("4- Exit");

    var choice = readline.questionInt("Your choice: ");

    if (choice === 1) {
        console.log("\nChoose a category:");
        console.log("1- Work");
        console.log("2- Personal");
        console.log("3- Urgent");

        var categoryChoice = readline.questionInt("Select a category: ");
        var category = categoryChoice === 1 ? "Work" :
            categoryChoice === 2 ? "Personal" :
                categoryChoice === 3 ? "Urgent" : "General";

        var newTask = readline.question("Enter the task: ");
        tasks.push({ task: newTask, category: category });
        console.log(`Task added successfully under category: ${category}`);

    } else if (choice === 2) {
        console.log("\nView options:");
        console.log("1- View all tasks");
        console.log("2- View tasks by category");

        var viewChoice = readline.questionInt("Your choice: ");

        if (viewChoice === 1) {
            console.log("\nTask List:");
            if (tasks.length === 0) {
                console.log("No tasks found");
            } else {
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}- [${task.category}] ${task.task}`);
                });
            }
        } else if (viewChoice === 2) {
            console.log("\nChoose a category:");
            console.log("1- Work");
            console.log("2- Personal");
            console.log("3- Urgent");

            var categoryChoice = readline.questionInt("Select a category: ");
            var selectedCategory = categoryChoice === 1 ? "Work" :
                categoryChoice === 2 ? "Personal" :
                    categoryChoice === 3 ? "Urgent" : "General";

            var filteredTasks = tasks.filter(task => task.category === selectedCategory);

            console.log(`\nTasks in category: ${selectedCategory}`);
            if (filteredTasks.length === 0) {
                console.log("No tasks in this category");
            } else {
                filteredTasks.forEach((task, index) => {
                    console.log(`${index + 1}- ${task.task}`);
                });
            }
        } else {
            console.log("Invalid choice");
        }

    } else if (choice === 3) {
        console.log("\nTask List:");
        if (tasks.length === 0) {
            console.log("No tasks to delete");
        } else {
            tasks.forEach((task, index) => {
                console.log(`${index + 1}- [${task.category}] ${task.task}`);
            });

            var taskNumber = readline.questionInt("Enter the task number to delete: ") - 1;
            if (taskNumber >= 0 && taskNumber < tasks.length) {
                console.log(`Task deleted: ${tasks[taskNumber].task}`);
                tasks.splice(taskNumber, 1);
            } else {
                console.log("Invalid task number");
            }
        }

    } else if (choice === 4) {
        console.log("Thank you for using the Task Manager");
        break;

    } else {
        console.log("Invalid choice, Please try again");
    }
}
