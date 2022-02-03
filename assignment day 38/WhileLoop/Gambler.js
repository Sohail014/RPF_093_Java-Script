let gamblerRs = 100
let bet = 1
let timesWon = 0
let numberOfBet = 0
const gamblerOwn = 1
while (gamblerRs < 200 && gamblerRs > 0 ) {
    let gamblerPlay = Math.floor(Math.random()*10)%2
    if (gamblerPlay == gamblerOwn) {
        gamblerRs++
        timesWon++
    } else {
        gamblerRs--
    }
    numberOfBet++
}
console.log(`Times own ${timesWon} and Number of bets ${numberOfBet}`)