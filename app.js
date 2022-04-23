// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

let min = (x, y) => {
    return Math.min(x, y);
}
    console.log(min(234,210));

// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old."
//                     0        1          2
let firstNames = ["Alejandro", "Alex", "Alexis"];
let lastName = ['Martinez', 'Martin', 'Mar'];
let age = [20, 19, 21];
let all = [firstNames, lastName, age];

console.log(`Hello, my name is ${all[0][1]} ${all[1][1]} and I'm ${all[2][1]} years old.`);
// two different ways of doing it 
let people = [
    ['Alejandro', 'Martinez', 20], 
    ['Alex', 'Martin', 19],
    ['Alexis', 'Mar', 21]
];
console.log(`Hello, my name is ${people[1][0]} ${people[1][1]} and I'm ${people[1][2]} years old.`);

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


    let userInput = prompt('Enter A Number 1-12.');
    let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December', 'Invalid Input'];

    function promptReply(x){
        return(x);
    }
    switch (parseInt(userInput)) {
        case 1:
            console.log(promptReply(month[0]));
            break;
        case 2:
            console.log(promptReply(month[1]));
            break;
        case 3:
            console.log(promptReply(month[2]));
            break;
        case 4:
            console.log(promptReply(month[3]));
            break;
        case 5:
            console.log(promptReply(month[4]));
            break;
        case 6:
            console.log(promptReply(month[5]));
            break;
        case 7:
            console.log(promptReply(month[6]));
            break;
        case 8:
            console.log(promptReply(month[7]));
            break;
        case 9:
            console.log(promptReply(month[8]));
            break;
        case 10:
            console.log(promptReply(month[9]));
            break;
        case 11:
            console.log(promptReply(month[10]));
            break;
        case 12:
            console.log(promptReply(month[11]));
            break;
    
        default:
            console.log(promptReply(month[12]));
            break;
    }




//HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let tom = {
    height : 9,
    mass : 8 
}
let jerry = {
    height : 10,
    mass : 45
}

let bmiCalc = (tom, jerry) => {
    let bmiTom = (tom.mass/(tom.height * tom.height));
    let bmiJerry = (jerry.mass/(jerry.height * jerry.height));
    let booleanCalc = (bmiTom > bmiJerry) ? true : false;
    return `Is Tom's BMI higher than Jerry's? ${booleanCalc}.`;

};
console.log(bmiCalc(tom, jerry));
