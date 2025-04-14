//1. Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using alert.

let date=new Date('2012-02-20T03:12');
alert(date);

//2. Write a function   getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
function getWeekDay(date2) {
    let weekdays=date2.getDay();
    if(weekdays==0) return weekdays='SU';
    else if(weekdays==1) return weekdays='MO';
    else if(weekdays==2) return weekdays='TU';
    else if(weekdays==3) return weekdays='WE';
    else if(weekdays==4) return weekdays='TH';
    else if(weekdays==5) return weekdays='FR';
    else if(weekdays==6) return weekdays='SA';
    else return "not a weekday";
  }

alert( getWeekDay(date2) );       //TU

//3. European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date3) {
    let weekdays=date3.getDay();
    if(date3==0){
        date3=7;
    }
    return weekdays;
  }

let date3 = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date3) );       // tuesday, should show 2

//4. Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

let date4 = new Date(2015, 0, 2);

function getDateAgo(date4,a){
    let date=new Date(date4);
    date.setDate(date.getDate() - a);
    return date.getDate();
}

alert( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date4,365) ); // 2, (2 Jan 2014)

//5. Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

    function getLastDayOfMonth(year,month){
        let date=new Date(year,month,0,0,0,0,0)
        alert(date.getDate());
    }
    getLastDayOfMonth(2021,2)

//6. Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday2(){
    let time2=new Date();
    let hours=time2.getHours();
    alert((hours*3600)+time2.getSeconds()+(time2.getMinutes())*60)
}
getSecondsToday2()

//7. Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow(){
    let time2=new Date();
    let hours=time2.getHours();
    alert(86400-(hours*3600)+time2.getSeconds()+(time2.getMinutes())*60)
}
getSecondsToTomorrow();

//8. Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
// For instance:

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );