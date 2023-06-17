//created a variable called userMarks that holds the user input 
const userMarks = prompt('Enter you marks(0-100):');
//since the input is taken as a string we change it to an integer
const marks = parseInt(userMarks);
//created a function that takes the users marks as an argument
function grading(marks){
//in the function i wrote if statements to cheeck the users marks an return an appropriate output
    if(marks >= 80 && marks <= 100){
         document.write('Your grade is: A')
    }
    else if(marks >= 60 && marks <= 79){
         document.write('Your grade is: B')
    }
    else if(marks >= 49 && marks <= 59){
         document.write('Your grade is: C')
    }
    else if(marks >=40 && marks <= 49){
         document.write('Your grade is: D')
    }
    else if(marks >= 0 && marks <= 39){
         document.write('Your grade is: E')
    }
    else{
         document.write('Invalid input')
    }
}
//calling the function and passing it the user input
grading(marks);
