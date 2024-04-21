prompt("Enter your name");
prompt("Enter your partner name");
var loveScore=Math.random();
loveScore=(Math.floor(loveScore*100)+1);


if(loveScore<=30){
    console.log("Your love Score is "+loveScore+"%,"+"Your love is like oil and water");
    }
if(loveScore>30 && loveScore<70){
    console.log("Your love score is "+loveScore+"%");    
}
if(loveScore>70){
    console.log("Your love score is "+loveScore+"%,"+ "You love each other like kanye loves kanye")
}