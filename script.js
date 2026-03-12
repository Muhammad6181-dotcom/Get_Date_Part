var date = prompt("Sanani kiriting (16-06-2008)");

var type = prompt("day, month, year yozing:");
var parts = date.split("-");

var day = parts[0];
var month = parts[1];
var year = parts[2];

if (type === "day") {
    alert(day);
} else if (type === "month") {
    alert(month);
} else if (type === "year") {
    alert(year);
} else {
    alert("Xato");
}