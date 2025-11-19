/**
 * @author Zachary Fowler
 * @version 1.0.0
 * @date 2025-11-17
 * @fileoverview This program will ask the user for their name, a course
 * they are currently taking in school, and the last three test marks
 * for that course. The output of the program will be the student's name,
 * their course, the three marks, and the average of the three test marks.
 */

// variables
let userName: string;
let courseName: string;
let mark1AsString: string;
let mark2AsString: string;
let mark3AsString: string;
let mark1AsNumber: number;
let mark2AsNumber: number;
let mark3AsNumber: number;
let averageMark: number;

// input
userName = prompt("What is your name?") || "No name entered!";
courseName = prompt("What course are you currently taking?") ||
  "No course entered!";
mark1AsString = prompt("Enter the first test mark:") || "0";
mark2AsString = prompt("Enter the second test mark:") || "0";
mark3AsString = prompt("Enter the third test mark:") || "0";

// process
mark1AsNumber = parseInt(mark1AsString);
mark2AsNumber = parseInt(mark2AsString);
mark3AsNumber = parseInt(mark3AsString);
averageMark = (mark1AsNumber + mark2AsNumber + mark3AsNumber) / 3;

// output
console.log("\n");
console.log("Hello, " + userName + "!");
console.log("You are taking: " + courseName + ".");
console.log(
  "Your marks are: " + mark1AsNumber + ", " + mark2AsNumber + ", and " +
  mark3AsNumber + "."
);
console.log("Your average mark is: " + averageMark + ".");

console.log("\nDone.");