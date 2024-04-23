function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    
    var lengthArray=names.length;
    console.log(lengthArray);
    var randomNum = Math.floor(Math.random()*lengthArray);
    console.log(randomNum);
    return names[randomNum]+" is going to buy lunch today!";
    


/******Don't change the code below*******/    
}

var names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);