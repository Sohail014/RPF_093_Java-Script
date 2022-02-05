let diceMap = new Map()
diceMap.set(1,0)
diceMap.set(2,0)
diceMap.set(3,0)
diceMap.set(4,0)
diceMap.set(5,0)
diceMap.set(6,0)
let limitNotReached = 1
while (limitNotReached == 1 ) {
    let rollDice = (Math.floor(Math.random()*10) %6 )+ 1
    diceMap.set(rollDice,diceMap.get(rollDice)+1)
    for(let key of diceMap.keys())
    {
        if (diceMap.get(key)  == 10) {
            limitNotReached = 0
            console.log("The maximum time repeaed is " +key);
        }
    } 
}

min = 10
for (let key of diceMap.keys())
{
    if (diceMap.get(key) < min)
    {
        min = diceMap.get(key)
        var min_key = key
    }
}
console.log("The minimum time repeated number is "+min_key);