var monthStrings = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function generateDaySuffix(day) {
  switch(day) {
    case 1:
    case 21:
    case 31:
      return 'st';

    case 2:
    case 22:
      return 'nd';

    case 3:
    case 23:
      return 'rd';

    default:
      return 'th';
  }
}

function talkingCalendar(input) {
  var parts = input.split('/');

  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var monthStr = monthStrings[month - 1];
  var daySuffix = generateDaySuffix(day);
  

  return `${monthStr} ${day}${daySuffix}, ${year}`;
  // return monthStr + " " + day + daySuffix + ", " + year;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));