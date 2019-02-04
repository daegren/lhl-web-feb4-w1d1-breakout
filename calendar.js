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

function talkingCalendar(input) {
  var parts = input.split('/');

  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var monthStr = monthStrings[month - 1];
  var daySuffix;
  switch(day) {
    case 1:
    case 21:
    case 31:
      daySuffix = 'st';
    break;

    case 2:
    case 22:
      daySuffix = 'nd';
    break;

    case 3:
    case 23:
      daySuffix = 'rd';
    break;

    default:
      daySuffix = 'th';
    break;
  }

  return `${monthStr} ${day}${daySuffix}, ${year}`;
  // return monthStr + " " + day + daySuffix + ", " + year;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));