let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 20;

if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000
}

if (runnerAge > 18 && earlyRegister === true) {
  console.log(`Your race number is ${raceNumber} and you will begin the race at 9:30am.`)
} else if (runnerAge > 18 && earlyRegister !== true) {
  console.log(`Your race number is ${raceNumber} and you will begin the race at 11:00am.`)
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and you will begin the race at 12:30pm.`)
} else {
  console.log('Please visit the registration desk.')
}
