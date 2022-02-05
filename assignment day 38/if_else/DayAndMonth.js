let month =5;
let date = 19;
let flag = true;
if(month>=3 && month<=6) 
{
    if(month == 3 && date <20 )
    {
     flag = false;
    }
    if(date>20 && month ==6)
    {
        flag = false;
    }
    if(flag == false)
    {
    console.log("invalid date");
    }
    else{
        console.log("valid date");
    }
    }
else{
    console.log("invalid date");
}