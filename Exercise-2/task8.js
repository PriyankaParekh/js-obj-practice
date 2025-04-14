//Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.

let date1=new Date("2018-07-01");
let date2=new Date("2020-05-03");

function diffSubtract(date1, date2) {
    diff=Math.abs(date2-date1);
    let year=Math.floor(diff/(365*24*60*60*1000));
let month=Math.floor((diff%(365*24*60*60*1000))/(30*24*60*60*1000));
let days=Math.floor((diff%(30.44*24*60*60*1000))/(24*60*60*1000));
console.log(`years: ${year} months: ${month} days: ${days}`)
  }
diffSubtract(date1,date2);