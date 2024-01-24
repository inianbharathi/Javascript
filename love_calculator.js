prompt("Enter your name: ");
prompt("Enter your partner name: ");
var n = Math.random();
n= (Math.floor(n*100)+1);
if (n>70)
{
    alert("You are made for each other: "+n +"%");
}
if (n>=30&& n<70){
    alert("You are ok with each other "+n+"%");
}
if(n<=30){
    alert("You don't get along "+n+"%");
}