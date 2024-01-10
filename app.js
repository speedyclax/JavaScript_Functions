console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    if (count < 0)
    {
        for (let i = -1; i >= count; i--)
    {
        if (i % 2 != 0) 
        {
            console.log(i);
        }
    }
    } else 
    {
        for (let i = 1; i < count; i++)
        {
            if (i % 2 != 0) 
            {
                console.log(i);
            }
        }
    }
}

printOdds(-10);
printOdds(10);

// Exercise 2 Section
console.log("");
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    let aboveSixteen = `Congrats, ${userName}! You can drive!`;
    let belowSixteen = `Sorry, ${userName}. You need to wait ${16 - age} more year(s) until you can drive.`;

    if (age < 16 )
    {
        console.log(belowSixteen);
    }
    else 
    {
        console.log(aboveSixteen);
    }
}

checkAge("Jon", 20);
checkAge("Sam", 12);

// Exercise 3 Section
console.log("");
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) 
{
    if (x == 0 && y != 0) 
    {
        console.log('Y Axis');
    }
    else if (y == 0 && x != 0)
    {
        console.log('X Axis'); 
    }
    else if (x == 0 && y == 0) 
    {
        console.log('Origin');
    }
    else if (x > 0 && y > 0) 
    {
        console.log('Quadrant 1');
    }
    else if (x < 0 && y > 0)
    {
        console.log('Quadrant 2');
    }
    else if (x < 0 && y < 0)
    {
        console.log('Quadrant 3');
    }
    else 
    {
        console.log('Quadrant 4');
    }
}

whichQuadrant (0,0);//Origin
whichQuadrant (3,0);//X axis
whichQuadrant (0,-2);//Y axis
whichQuadrant (3,7);//1
whichQuadrant (-5,5);//2
whichQuadrant (-3,-9);//3
whichQuadrant (6,-2);//4

// Exercise 4 Section
console.log("");
console.log("EXERCISE 4:\n==========\n");

function isTriangle(a,b,c) 
{
    if (a + b > c && a + c > b && b + c > a) 
    {
        if (a == b && b == c) 
        {
            console.log('Equilateral triangle');
        }
        else if ((a == b && b != c) || (a == c && a != b) || (b == c && a != c)) 
        {
            console.log('Isosceles triangle');
        }    
        else
        {
            console.log('Scalene triangle');
        }    
    }
    else 
    {
        console.log('Not a triangle');
    }
}

console.log(isTriangle(4,4,4));//Equilateral
console.log(isTriangle(1,4,4));//Isosceles
console.log(isTriangle(2,3,4));//Scalene
console.log(isTriangle(1,9,4));//Invalid

// Exercise 5 Section
console.log("");
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage) 
{
    let daysRemaining = 30 - day;
    let alottedDailyUseAvg = planLimit / 30;
    let userDailyUseAvg = usage / day;
    let exceedPlan = (((daysRemaining * userDailyUseAvg) + usage) - planLimit);
    let recommendedDailyUse = (planLimit - usage) / daysRemaining;

    if (daysRemaining * userDailyUseAvg + usage > planLimit) 
    {
        console.log(`----txt----`);
        console.log(`${day} day(s) used, ${daysRemaining} day(s) remaining`);
        console.log(`Average alotted daily use: ${alottedDailyUseAvg} GB/day`);
        console.log(`You are EXCEEDING your average daily use (${userDailyUseAvg} GB/day)`);
        console.log(`Continuing this high usage, you'll exceed your data plan by ${exceedPlan} GB`);
        console.log(`To stay below your data plan limit, use no more than ${recommendedDailyUse} GB/day`)
        console.log(`-----------`);
    }
    else 
    {
        console.log(`----txt----`);
        console.log(`${day} day(s) used, ${daysRemaining} day(s) remaining`);
        console.log(`Average alotted daily use: ${alottedDailyUseAvg} GB/day`);
        console.log(`Users average daily use: ${userDailyUseAvg} GB/day`);
        console.log(`You are on track to stay below or meet your data use limit during this pay period.`);
        console.log(`-----------`);
    } 
}

dataUsage(50,9,25);
dataUsage(125,20,49);

