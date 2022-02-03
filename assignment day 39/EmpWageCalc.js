console.log("Hi All!\n"+ 
"Welcome to EmployeeWage!\n"+
"Today we shall calculate Wage of employee depending on work done by him.");

const NO_WORK = 0;
const PART_TIME_WORK = 4;
const FULL_TIME_WORK = 8;
const PER_HR_WAGE = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WRKG_HRS_MONTH = 160;

/**
 * UC 1: Check if employee is present or not
 */
let employeePresent = false;
if(Math.random() > 0.5){
    employeePresent = true;
}else if(Math.random() <= 0.5){
    employeePresent = false;
}
console.log("If employee present today: " + employeePresent);

/**
 * UC 2: Calculate daily employee wage based on part time or full time work using switch case 
 */

// To get a random number out of 1, 2 or 3
{
    let workNoOrPartOrFullTime = Math.ceil((Math.random()*10)/3);
    let empWageToday = 0;

    switch(workNoOrPartOrFullTime){
        case(1):
        empWageToday = NO_WORK* PER_HR_WAGE;
        break;
        case(2):
        empWageToday = PART_TIME_WORK*PER_HR_WAGE;
        break;
        case(3):
        empWageToday = FULL_TIME_WORK*PER_HR_WAGE;
        break;
    }
    console.log("Wage of employee today: $"+ empWageToday);
}

/**
 * UC 3: Write function to get work hours
 * @return : Hours worked by the employee in a given day
 */
function getWorkHours(){
    let randomHours = Math.floor((Math.random()*10)/3);
    let hours_worked = 0;

    if(randomHours == 0){
        hours_worked = 0;
    }else if(randomHours == 1){
        hours_worked = 4;
    }else if(randomHours == 2){
        hours_worked = 8;
    }
    return hours_worked;
}
console.log("Hours worked by employee today = "+ getWorkHours());

/**
 * UC 4: Calculate wages for a month assuming 20 working days in a month
 */
{
    let days = 0;
    let wages_of_month = 0;
    while(days < WORKING_DAYS_IN_MONTH){
        wages_of_month += PER_HR_WAGE*getWorkHours(); 
        days++;
    }
    console.log("The wage of the employee in this month = "+ wages_of_month);
}
/**
 * UC 5: Calculate wages till a condition of total working hours of 160 or max days of 20 is reached for a month
 */
 {
     //MAX_WRKG_HRS_MONTH
     let tot_wrkg_hrs = 0;
     let days_wrkd = 0;
     let wages_month = 0;
     while((tot_wrkg_hrs<MAX_WRKG_HRS_MONTH) && (days_wrkd < WORKING_DAYS_IN_MONTH)){
         tot_wrkg_hrs += getWorkHours();
         days_wrkd++;
     }
     wages_month += tot_wrkg_hrs*PER_HR_WAGE;
     console.log("Days worked: "+ days_wrkd);
     console.log("Total working hours: "+ tot_wrkg_hrs);
     console.log("Wages of the month: "+ wages_month);
}

/**
 * UC 6: Store Daily and Total wage
 */
{
    let daily_wage = 0;
    let totl_wage = 0;
    const daily_wage_arr = [];
    for(let i=0;i<WORKING_DAYS_IN_MONTH;i++){
        daily_wage = PER_HR_WAGE* getWorkHours();
        daily_wage_arr[daily_wage_arr.length] = daily_wage;
        totl_wage += daily_wage;
    }
    console.log("Total wage of the employee = "+ totl_wage);
    console.log("Daily wages of the employee are: \n"+ daily_wage_arr)
}
/**
 * UC 7: Perform helper functions using daily wage array
 */
{// calculate total wage using Array forEach or reduce method
    const daily_wage_arr = [];
    for(let i=0;i<WORKING_DAYS_IN_MONTH;i++){
        let daily_wage = PER_HR_WAGE*getWorkHours();
        daily_wage_arr[daily_wage_arr.length] = daily_wage
    }
    console.log("Daily wage array: "+ daily_wage_arr);
    let sum_wages = 0;
    daily_wage_arr.forEach(func);
    function func(daily_wage){
        sum_wages += daily_wage;
    }
    console.log("Sum of wages = "+sum_wages);

// Show the day along with daily wage using array map helper function
let i =0;
daily_wage_arr.forEach(myFunc);
function myFunc(daily_wage){
    i++;
    console.log("Day "+i,daily_wage);
}

// Show days when full time wage of 160 were earned using filter function
let j = 0;
daily_wage_arr.filter(myFunc1);
function myFunc1(daily_wage){
    j++;
    if(daily_wage==160){
        return console.log("Days when wage of 160 earned: "+j);
    }
}
//Find the first occurrence when Full Time Wage was earned using find function
let k = 0;
const FULL_TIME_WAGE = 160;
let first_occur = 1 + daily_wage_arr.findIndex(function (element) {
    return element == FULL_TIME_WAGE;
});

console.log("The full time wage was first earned on day " + first_occur);

// Find number of days the employee worked

let days = 0;
for(let i=0;i<daily_wage_arr.length;i++){
    if(daily_wage_arr[i]>0){
        days++;
    }
}
console.log("Number of days worked: "+ days);
}

/**
 * UC8: Store day and daily wage along with total wage
 */
{
    let day = 0;
    let DAILY_WAGE_MAP = new Map();
    let total_wage = 0;
    
    // compute wages for each day and insert day and wage into the map
    for(let i=1;i<=WORKING_DAYS_IN_MONTH;i++){
        let daily_wage = getWorkHours()*PER_HR_WAGE;
        if(daily_wage>0){day++;}
        total_wage += daily_wage;
        DAILY_WAGE_MAP.set(i,daily_wage);
    }
    DAILY_WAGE_MAP.set("Total Days ",day);
    DAILY_WAGE_MAP.set("Total Wages ",total_wage);
    console.log(DAILY_WAGE_MAP);  
}