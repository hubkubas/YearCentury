var year = 1956;

function centuryFromYear(year) {
if(year % 100 == 0) {
var wiek = Math.floor(year / 100);
return wiek;
} else {
var wiek = Math.floor((year / 100)+1);
return wiek;
}
}

console.log(centuryFromYear(year)+" century.");
