/*1.No numbers are provided: Easy. It should just not beep at all and 
end immediately since no beeps should get scheduled.
2.An input is a negative number: Ignore/skip any numbers that are 
negative. We can't schedule anything in the past.
3.An input is not a number: Ignore/skip these as well, instead of 
attempting to call setTimeout with a non-number.*/


//get the command line values
const num = process.argv.slice(2);
// console.log(num)
// Initially set the timer/delay to 0
let timer = 0;
// loop over the values and convert those in the Number.
for(let index in num){
  //console.log(element)
   num[index] = Number(num[index])
   timer = timer + num[index]
  //  console.log(`${num[index]}`)
  setTimeout (()=> {
    process.stdout.write('\x07');
  console.log(` ⏰️ is at ${num[index]} second`)} , timer*1000);//needed to mulitply timer by 1000 for it to be a full second
};

