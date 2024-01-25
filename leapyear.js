function isLeap(year) {
    
/**************Don't change the code above****************/    
    var leapyear;
    var notleapyear;
    //Write your code here.
    if(year%4===0){
        if(year%100!==0 || year%100===0 && year%400===0){
            
            leapyear="Leap year."
            return leapyear;
        }
        
    
    }
    else
    {
        notleapyear="Not leap year.";
        return notleapyear; 
    }
    

/**************Don't change the code below****************/    

}
isLeap(2400);