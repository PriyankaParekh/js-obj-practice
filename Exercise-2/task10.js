// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.

// Input = 01-07-2018 & 03/05/2020
// Output : 
// 1 years 10 months 2 days
// or 22 months 2 days
// or 96 weeks 0 days
// or 672 days
// or 16,128 hours
// or 967,680 minutes

let date10=new Date("2018-07-01");
let date11=new Date("2020-05-03");

function diffSubtract(date10, date11) {
    diff=Math.abs(date10-date11);
    let year=Math.floor(diff/(365*24*60*60*1000));

let totaldays=Math.floor(diff/(24*60*60*1000));
let weeks=Math.floor(totaldays/7);
let remainingDaysweeks=Math.floor(totaldays%7);
let hr=Math.floor(totaldays*24);
let minutes=Math.floor(totaldays*24*60);
let month=Math.floor((diff%(365*24*60*60*1000))/(30*24*60*60*1000));
let days=Math.floor((diff%(30.44*24*60*60*1000))/(24*60*60*1000));
let month2=(12*year)+month;

console.log(`years: ${year} months: ${month} days: ${days}`);
console.log(`monthdays: ${month2} ${days} days`);
console.log(`weeks: ${weeks} ${remainingDaysweeks} days`);
console.log(`total days: ${totaldays}`);
console.log(`hours: ${hr}`);
console.log(`minutes: ${minutes}`)
}

diffSubtract(date10,date11);

