/*
CIT 281 Project 1
Name: Anna Anton
*/

function DayofWeek() {
    let date = new Date();
    let day1 = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days[day1]);
    

}

DayofWeek();

