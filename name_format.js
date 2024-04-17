var name=prompt("Enter your name:");
name=name.toLowerCase();
var firstLetter=name.slice(0,1);
var rest=name.slice(1,name.length);
firstLetter=firstLetter.toUpperCase();
alert("Your name is "+ firstLetter + rest);