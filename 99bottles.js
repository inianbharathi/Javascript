function ninty() {
    var wall = 99;

    while (wall >= 0) {
        if(wall>=2){
        console.log(wall + " bottles of beer on the wall, " + wall + " bottles of beer. Take one down and pass it around, " + (wall - 1) + " bottles of beer on the wall.");
        }
        else if (wall === 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        }
        else if (wall === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }        
        wall--; 
    }    
}

ninty();