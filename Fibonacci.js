function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fib=[0,1];
    if(n<2){
        return fib.slice(0,n);
    }
 
    for(var i=2; i<n; i++){
       fib.push(fib[(i-1)]+fib[(i-2)]);
        

    }
    return fib;
     
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(8);