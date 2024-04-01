let Back = await inquirer.prompt([{
        type: "confirm",
        name: "main",
        prefix: "",
        message: chalk.yellow(" \n > DO YOU WANT TO GET BACK MENU.........\t"),
        default: false
    }]);
if (Back.main === true) {
    console.log(chalk.white(`\n\t\t\t > BACK TO MAIN MENU\n`));
    const list = await inquirer.prompt([
        {
            type: "list",
            name: `li`,
            prefix: "",
            message: chalk.green("\n\t\t\t > SELECT THE GIVEN OPTION :  "),
            choices: [
                'ADD SOME ITEM IN THE LIST',
                'REMOVE SOME ITEM IN THE LIST',
                'UPDATE SOME ITEM IN THE LIST',
                'VIEW ITEM IN THE LIST',
                'Exit'
            ]
        }
    ]);
}
if (list.li === 'VIEW ITEM IN THE LIST') {
    const view = await inquirer.prompt([
        {
            type: "confirm",
            name: "item",
            prefix: "",
            message: chalk.redBright("WOULD YOU LIKE TO VIEW ITEM IN THE LIST"),
            default: false
        }
    ]);
    if (view.items === true) {
        setTimeout(() => {
            console.log(chalk.italic(chalk.bold(chalk.yellow("\n.....................................LOADING YOUR DATA.......................\t\t\t\t\t\t\n"))));
        }, 2000);
        setTimeout(() => {
            console.log(chalk.italic(chalk.bold(chalk.yellow("\n.......................................PLEASE WAIT...............................\t\t\t\t\t\t\n"))));
        }, 4000);
        setTimeout(() => {
            console.log(chalk.italic(chalk.bold(chalk.red("\n...................................UPDATING YOUR DATA............................\t\t\t\t\t\t\n"))));
        }, 6000);
        setTimeout(() => {
            console.log(chalk.italic(chalk.bold(chalk.red("\n...................................FETCHING YOUR DATA............................\t\t\t\t\t\t\n"))));
        }, 8000);
        setTimeout(() => {
            console.log(chalk.green("\n***************************************************************************************************************\n"));
            console.log(chalk.bgGray(chalk.italic(`\t\t\t\t > YOUR ${todo} IS VIEW SUCCESSFUL FROM THE LIST`)));
            console.log(chalk.green("\n***************************************************************************************************************\n"));
        }, 10000);
    }
}
export {};
