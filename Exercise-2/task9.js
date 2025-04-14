//Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.

const newdate = new Date(1607518718*1000);

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short'
};

const maindate = newdate.toLocaleString('en-US',options);

console.log(maindate);
//Wednesday, December 9, 2020 6:28:38 PM GMT+05:30