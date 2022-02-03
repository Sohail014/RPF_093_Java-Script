/**
 * (a) Roll a die and find the number between 1 and 6
 */
 function rollDie(){
    let die_roll = Math.ceil(Math.random()*6);
    //console.log(die_roll);
    return die_roll;
}

/**
 * (b) Repeat the die roll and find the result each time
 */
function repeatDieRoll(){
    let die_roll = rollDie();
    let die_roll_rept = [];
    for(let i=0;i<10;i++){
        die_roll = rollDie();
        console.log(die_roll)
    }
}
repeatDieRoll();
/**
 * (c) Store the result in a dictionary
 */
function storeDieRollResultDict(){
    let dieRollMap = new Map();
    for(let i=0;i<10;i++){
        dieRollMap.set(i,rollDie());
    }
    return dieRollMap;
}
console.log(storeDieRollResultDict());

/**
 * (d) Repeat till any one of the number has reached 10 times
 */
function repeatDieRollCondit(){
    let dieRollMap = new Map();
    let maxTimesOfAnyNum = 0;
    while(maxTimesOfAnyNum != 10){
        let dieRoll = rollDie();
        
        // If the result of dice is already present in map, increment it by one
        // else add the new key with 1 as value
        if(dieRollMap.has(dieRoll)){
            let value = dieRollMap.get(dieRoll);
            dieRollMap.set(dieRoll,value+1);
        }else{
            dieRollMap.set(dieRoll,1);
        }
        
        // Check if any number has reached 10 times      
        for(let i=1;i<7;i++){
            if(maxTimesOfAnyNum < dieRollMap.get(i)){
                maxTimesOfAnyNum = dieRollMap.get(i);
            }
        }
    }
     console.log(dieRollMap);  
     return dieRollMap;
}
repeatDieRollCondit();

/**
 * (e) Find the number that reached maximum times and the one that was for minimum times 
 */
function findMaxMinRepeatedNum(){
    let dieRollMap = repeatDieRollCondit();
    let max_times = 0;
    let min_times = 10;
    let num_rpt_max = 0;
    let num_rpt_min = 0;
    for(let i=1;i<7;i++){
        if(max_times < dieRollMap.get(i)){
            max_times = dieRollMap.get(i);
            num_rpt_max = i;
        }
        if(min_times > dieRollMap.get(i)){
            min_times = dieRollMap.get(i);
            num_rpt_min = i;
        }
    }
    console.log("Maximum repeated number = "+ num_rpt_max);
    console.log("Minimum repeated number = "+ num_rpt_min);
}
findMaxMinRepeatedNum();