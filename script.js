function age() {
  // uncomment this console.. line below and check in web browser console if not working
  // console.log("age() function called!");

  var d1 = parseInt(document.getElementById("date").value);
  var m1 = parseInt(document.getElementById("month").value);
  var y1 = parseInt(document.getElementById("year").value);
  
  // uncomment this console.. line below and check in web browser console if not working
  // console.log("Date:", d1, "Month:", m1, "Year:", y1);

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // uncomment this console.. line below and check in web browser console if not working
  // console.log("Current Date:", d2, "Current Month:", m2, "Current Year:", y2);

  if (d1 > d2) {
      m2 -= 1;
      d2 += month[m2 - 1];
  }

  if (m1 > m2) {
      y2 -= 1;
      m2 += 12;
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  // uncomment this console.. line below and check in web browser console if not working
  // console.log("Calculated Age - Years:", y, "Months:", m, "Days:", d);

  document.getElementById("age").innerHTML = "Your age is " + y + " years " + m + " months " + d + " days";
}
