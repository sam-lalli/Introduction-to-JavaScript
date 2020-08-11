/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = "20";
if(votingAge > 18){
    console.log(true)
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let student ="Sam";
let grades = "F";
if(grades === "A"){
    student = "Sam"
}
else if(grades === "F"){
    student = "Lalli"
}
console.log(student)




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let string ="1999";
parseInt(string);
console.log(string);




//Task d: Write a function to multiply a*b 
function mult(a, b){
    return a*b;
}
console.log (mult(2,5));





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age){
    return age*7;
}
console.log (dogYears(12));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(age, weight){
    if(age >= 1){
        if(weight <= 5){
            return weight * .05;
        }
        else if(weight === 6){
            return weight * .04;
        }
        else if(weight >= 11){
            return weight * .03;
        }
        else if(weight > 15){
            return weight * .02;
        }
    }
    else if(age < 1){
        if(age <= .166){
            return weight * .10;
        }
        else if(age >= .33){
            return weight * .05;
        }
        else if(age >= .583){
            return weight * .04;
        }
    }
}

console.log(dogFeeder(1,15));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


  
function rps(userChoice){
    const computer = Math.random();
    if(computer < .33){
        let computer ="rock"
        if(userChoice === "rock"){
            console.log("tie");
        }
        else if(userChoice === "scissors"){
            console.log("lost");
        }
        else if(userChoice === "paper"){
            console.log("won");
        }
    }
    else if(computer > .34 < .66){
        let computer ="paper"
        if(userChoice === "rock"){
            console.log("lost");
        }
        else if(userChoice === "scissors"){
            console.log("won");
        }
        else if(userChoice === "paper"){
            console.log("tie");
        }
    }
    else if(computer > .67){
        let compuer ="scissors"
        if(userChoice === "rock"){
            console.log("lost");
        }
        else if(userChoice === "scissors"){
            console.log("tie");
        }
        else if(userChoice === "paper"){
            console.log("won");
        }
    }
}
rps("rock");
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(km){
     return km * 0.621371;
}
console.log(miles(1));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feet(cm){
    return cm * 30.48;
}
console.log(feet(1));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
    for(let i = num; i > 0; i--)
    console.log((i),"bottles of soda on the wall", (i), "bottles of soda, take one down pass it around", (i), "bottles of soda on the wall",);
}
annoyingSong(10);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(numGrade){
    if(numGrade >= 90){
        let numGrade = "A";
        return numGrade
    }else if(numGrade >= 80){
        let numGrade = "B";
        return numGrade
    }else if(numGrade >= 70){
        let numGrade = "C";
        return numGrade
    }else if(numGrade >= 60){
        let numGrade = "D";
        return numGrade
    }else if(numGrade < 60){
        let numGrade = "F";
        return numGrade
    }
}
console.log(letterGrade(33));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
