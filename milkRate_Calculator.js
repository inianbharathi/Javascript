function getMilk(startMoney,costPerBottle) { 
    
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("Buy "+ calculateBottles(startMoney,costPerBottle)+ " bottles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log("change to give is "+calculateChange(startMoney,costPerBottle));
}
function calculateBottles(startMoney,costPerBottle)
{  
 var bottles=Math.floor(startMoney/costPerBottle);
  return bottles;
  
}
function calculateChange(startMoney,costPerBottle)
{
  var change= startMoney % costPerBottle;
  return change;
}

getMilk(5,1.5);