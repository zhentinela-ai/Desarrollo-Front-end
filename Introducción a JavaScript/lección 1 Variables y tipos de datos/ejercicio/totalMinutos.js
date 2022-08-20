function totalMinutes(hours, minutes) {
  var hoursToMinutes = hours * 60;
  var total_minutes = hoursToMinutes + minutes;
  return total_minutes;
}

var total_minutes_1 = totalMinutes(5, 23);
console.log(total_minutes_1);
