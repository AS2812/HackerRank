// Task 1: Create a function that takes an array of numbers and returns the largest number in the array.
// Example input: [10, 5, 20, 8]
// Output: 20

function find_Largest_Number(numbers) 
{
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) 
        {
        if (numbers[i] > largest) 
            {
            largest = numbers[i];
            }
        }
    return largest;
}
console.log(find_Largest_Number([10, 5, 20, 8])); // 20

// Task 2:Create a function that takes an array of numbers and returns how many of them are positive.
// Use a loop and an if condition inside it.

// Example: [-1, 2, 5, -7]
// Output: 2

function count_Positives(numbers) 
{
    let count = 0;
    for (let i = 0; i < numbers.length; i++) 
        {
        if (numbers[i] > 0) 
            {
            count++;
            }
        }
    return count;
}
console.log(count_Positives([-1, 2, 5, -7])); // 2

// Task 3: Create a function that takes an array of numbers and returns a new array with each number squared.
// Example input: [2, 3, 4]
// Output: [4, 9, 16]
//bonus: Use the map method to create the new array.

function square_Numbers(numbers) 
{
    return numbers.map(num => num * num);
}
console.log(square_Numbers([2, 3, 4])); // [4, 9, 16]

// Task 4: Create a function that takes an array of numbers and returns a new array with only the numbers that are divisible by 3 , then add them together and print the sum.
// Example input: [3, 5, 9, 12, 14]
// Output: [3, 9, 12] , sum = 24
// bonus: Use the filter method to filter the numbers and the reduce method to sum them up.

function filter_And_Sum_Divisible_By_3(numbers) 
{
    const divisible_By_3 = numbers.filter(num => num % 3 === 0);
    const sum = divisible_By_3.reduce((total, num) => total + num, 0);
    console.log(`sum = ${sum}`);
    return divisible_By_3;
}
console.log(filter_And_Sum_Divisible_By_3([3, 5, 9, 12, 14])); // [3, 9, 12], sum = 24

// Task 5: Create a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
// Example input: ["apple", "banana", "kiwi", "watermelon"]
// Output: ["banana", "watermelon"]

function filter_Long_Strings(strings) 
{
    return strings.filter(str => str.length > 5);
}
console.log(filter_Long_Strings(["apple", "banana", "kiwi", "watermelon"])); // ["banana", "watermelon"]

// Task 6: Create a function that takes a string and returns true if it is a palindrome (reads the same backward as forward), and false otherwise.
// Example input: "racecar"
// Output: true

function is_Palindrome(str) 
{
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(is_Palindrome("racecar")); // true

// Task 7: Create a function that takes an array of strings and returns a new array with only the even indexed strings converted to uppercase and reversed.
// Example input: ["apple", "banana", "cherry"]
// Output: ["ELPPA", "YRREHC"]

function transform_Even_Indexed(strings) 
{
    return strings.filter((_, index) => index % 2 === 0)
        .map(str => str.toUpperCase().split('').reverse().join(''));
}
console.log(transform_Even_Indexed(["apple", "banana", "cherry"])); // ["ELPPA", "YRREHC"]

// Task 8:

const students = 
[
    {
        name: "Ahmed",
        score: 68,
    },
    {
        name: "Ali",
        score: 24,
    },
    {
        name: "Mariam",
        score: 85,
    },
    {
        name: "Amr",
        score: 54,
    },
    {
        name: "Sara",
        score: 99,
    },
];
// Create a function that takes the array of students and prints each student and their grade to the console.
//
// The grade is calculated as follows:
// If the score is less than 50, the grade is 'F'.
// If the score is between 50 and 60, the grade is 'D'.
// If the score is between 60 and 70, the grade is 'C'.
// If the score is between 70 and 80, the grade is 'B'.
// If the score is higher than 80, the grade is 'A'.
//
// The output for each student should look like this:
// "Name: -student name-, Grade: -student grade-"
//
// Bonus: Sort the students by their grade in descending order into a new array
// and print the new array to the console. (Hint: Use the sort method)

function print_Student_Grades(students) 
{
    students.forEach(student => 
        {
        let grade;
        if (student.score < 50) 
            {
            grade = 'F';
            }
         else if (student.score >= 50 && student.score < 60) 
            {
            grade = 'D';
            } 
        else if (student.score >= 60 && student.score < 70) 
            {
            grade = 'C';
            } 
        else if (student.score >= 70 && student.score < 80) 
            {
            grade = 'B';
            } 
        else 
            {
            grade = 'A';
            }
        console.log(`Name: ${student.name}, Grade: ${grade}`);
    });
    
    // Bonus: Sort by grade in descending order
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);
    console.log("Sorted students by grade (descending):");
    console.log(sortedStudents);
}

print_Student_Grades(students);
