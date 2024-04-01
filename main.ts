import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

async function welcome(){
  let animation = chalkAnimations.karaoke("\n\t\t\tWELCOME TO SHAH TODO LIST.....\n\t\t\t")
    await new Promise((res =>{
  setTimeout(res,3000);
    }))
    animation.stop();
  }
  welcome();
  
let todo : string[] = ["Shahnawaz","Maha"];
async function todo_list(todo:string[]){
const firstName = await inquirer.prompt([{
  type: "input",
  name: "name",
  prefix: "",
  message: (chalk.green) ("\n\t > WHAT IS YOUR GOOD NAME :  "),
}])
console.log(`\n............................................................................................................................................................................................................................................................................`)

async function name(){
  let animation = chalkAnimations.rainbow(`\n\t\t\t\tGOOD NAME ${firstName.name}.....\n\t\t\t`)
    await new Promise((res =>{
  setTimeout(res,3000);
    }))
    animation.stop();
  }
  name();


  const confirm = await inquirer.prompt([{
   type: "confirm",
   name: "confirm",
   prefix: "",
   message: chalk.redBright(" \n > ENTER TO COME MAIN MENU.........\t")
  }])

 console.log(chalk.white("\n***************************************************************************************************************\n"))
 console.log(chalk.bgBlue("\n\t\t\t\t\tWELCOME TO THE TODO LIST \n\t\t\t"))
  console.log(chalk.white("\n***************************************************************************************************************\n"))
  
do{
const list = await inquirer.prompt([
    {
  type: "list",
  name:`li`,
  prefix: "",
  message:chalk.green ("\n\t\t\t > SELECT THE GIVEN OPTION :  "),
  choices:[
    'ADD SOME ITEM IN THE LIST',
    'REMOVE SOME ITEM IN THE LIST',
    'UPDATE SOME ITEM IN THE LIST',
    'VIEW ITEM IN THE LIST',
          'Exit'
  ]
}
])

if(list.li ==='ADD SOME ITEM IN THE LIST' ){
  
 
  const add = await inquirer.prompt([{

  type: "input",
  name: "value",
  prefix: "",
  message: chalk.yellow ("\n > ENTER TO THE ITEM  :")
  }])

todo.push(add.value);

console.log(chalk.green("***************************************************************************************************************\n"))
  console.log(chalk.bgGray(chalk.italic(`\t\t\t\t > YOUR "${add.value}" IS ADDED SUCCESSFUL FROM THE LIST`)));
  console.log(chalk.green("\n***************************************************************************************************************\n"))

const fetch = await inquirer.prompt([{
  type: "input",
  name:"yes",
  prefix: "",
  message: chalk.red(" > ENTER TO FETCH THE RESULT OF LIST........:")
}])
if(fetch.yes === "yes"){
  console.log(chalk.white("\n***************************************************************************************************************\n"))
  console.log(chalk.bold(chalk.blue("\t > YOUR LIST OF",todo," IS FETCH  SUCCESSFUL")));
  console.log(chalk.white("\n***************************************************************************************************************\n"))
}
}
// ____________________________________________________________________________________________________________________________________________________________________________________________________

if(list.li === `REMOVE SOME ITEM IN THE LIST`){

  const remove = await inquirer.prompt([{
    type: "list",
    name: "char",
    prefix: "",
    message: chalk.yellow("\n\t\t\t WHAT WOULD YOU LIKE TO REMOVE FROM THE LIST :"),
    choices:[...todo]
  }])

  if(remove.char === todo[0]){

    todo.splice(0,1)
  }
  if(remove.char === todo[1]){

    todo.splice(1,1)
  }
  if(remove.char === todo[2]){

    todo.splice(2,1)
  }
  if(remove.char === todo[3]){

    todo.splice(3,1)
  }
  if(remove.char === todo[4]){

    todo.splice(4,1)
  }
    console.log(chalk.green("\n***************************************************************************************************************\n"))
    console.log(chalk.bgGray(chalk.italic(`\t\t\t\t > YOUR "${remove.char}" IS Remove SUCCESSFUL FROM THE LIST`)));
    console.log(chalk.green("\n***************************************************************************************************************\n"))
  
    
    const ask = await inquirer.prompt([{
      type: "confirm",
      name: "val",
      prefix: "",
      message: chalk.red("\n\t\t\t WOULD YOU LIKE TO FETCH THE RESULT OF LIST :")

    }])
if(ask.val === true){

  console.log(chalk.white("***************************************************************************************************************\n"))
  console.log(chalk.blue(chalk.bold("\t\t\t\t > YOUR LIST OF",todo," IS FETCH  SUCCESSFUL")));
  console.log(chalk.white("\n***************************************************************************************************************\n"))
}
}

// _____________________________________________________________________________________________________________________________________________________________________________________________________

if(list.li ==='UPDATE SOME ITEM IN THE LIST'){

  const select = await inquirer.prompt([
    {
type:"list",
name: "up",
prefix:"",
message: chalk.yellow (" \n > SELECT THE ITEM TO UPDATE IN THE LIST :"),
choices:[...todo]
  }
])


const update = await inquirer.prompt([
  {
type:"input",
name: "up",
prefix:"",
message: chalk.yellow (" \n > ENTER THE UPDATE ITEM IN THE LIST :"),
}
])

if(select.up === todo[0]){
todo.splice(0,1,update.up);
}

if(select.up === todo[1]){
  todo.splice(1,1,update.up);
  }
  if(select.up === todo[2]){
    todo.splice(2,1,update.up);
    }
    if(select.up === todo[3]){
      todo.splice(3,1,update.up);
      }
      if(select.up === todo[4]){
        todo.splice(4,1,update.up);
        }

        console.log(chalk.green("\n***************************************************************************************************************\n"))
        console.log(chalk.bgGray(chalk.italic(`\t\t\t\t > YOUR "${update.up}" IS Update SUCCESSFUL FROM THE LIST`)));
        console.log(chalk.green("\n***************************************************************************************************************\n"))

        const ask = await inquirer.prompt([{
          type: "confirm",
          name: "val",
          prefix: "",
          message: chalk.red("\n\t\t\t WOULD YOU LIKE TO FETCH THE RESULT OF LIST :")
    
        }])
    if(ask.val === true){

      console.log(chalk.white("***************************************************************************************************************\n"))
      console.log(chalk.blue(chalk.bold("\t\t\t\t > YOUR LIST OF",todo," IS FETCH  SUCCESSFUL")));
      console.log(chalk.white("\n***************************************************************************************************************\n"))
  }
}

// _____________________________________________________________________________________________________________________________________________________________________________________________________

if(list.li === 'VIEW ITEM IN THE LIST'){
  
  const view = await inquirer.prompt([
    {

type: "confirm",
name: "item",
prefix: "",
message:chalk.redBright ("ENTER TO VIEW ITEM IN THE LIST"),
default: false
  }])

  if(view.item === true){

    setTimeout(()=>{
      console.log(chalk.italic(chalk.bold(chalk.yellow("\n.....................................LOADING YOUR DATA.......................\t\t\t\t\t\t\n"))))
  }, 2000);
  
  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.yellow("\n.......................................PLEASE WAIT...............................\t\t\t\t\t\t\n"))))
  }, 4000);
  
  
  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.yellow("\n...................................UPDATING YOUR DATA............................\t\t\t\t\t\t\n"))))
  }, 6000);
  
  
  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.yellow("\n.......................................PLEASE WAIT...............................\t\t\t\t\t\t\n"))))
  }, 8000);

  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.red("\n...................................FETCHING YOUR DATA............................\t\t\t\t\t\t\n"))))
  }, 10000);


  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.yellow("\n.......................................PLEASE WAIT...............................\t\t\t\t\t\t\n"))))
  }, 12000);

  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.red("\n..........................................................................100%\t\t\t\t\t\t\n"))))
  }, 14000);

  setTimeout(()=>{
    console.log(chalk.italic(chalk.bold(chalk.red("\n.......................................PLEASE WAIT...............................\t\t\t\t\t\t\n"))))
  }, 16000);
  
  setTimeout(()=>{
    console.log(chalk.green("\n******************************************************************************************************************\n"))
    console.log(chalk.bgGray(chalk.italic(`\t\t\t\t > YOUR ${todo} IS VIEW SUCCESSFUL FROM THE LIST`)));
    console.log(chalk.green("\n***************************************************************************************************************\n"))
  }, 18000);
    
  setTimeout(()=>{
    console.log(chalk.white("\n******************************************************************************************************************\n"))
    console.log(chalk.bgBlue("\n\t\t\t\t\tTHANK YOU VISITING MY TODO LIST\n\t\t\t\t\ "))
    console.log(chalk.white("\n***************************************************************************************************************\n"))
    process.exit();
  }, 20000);
  }}

// _____________________________________________________________________________________________________________________________________________________________________________________________________
if(list.li === "Exit"){

  console.log(chalk.bgBlue("\n\t\t\t\t\tTHANK YOU VISITING MY TODO LIST\n\t\t\t\t\ "))
  process.exit();
}

} while(true)

// _____________________________________________________________________________________________________________________________________________________________________________________________________
}
todo_list(todo);

