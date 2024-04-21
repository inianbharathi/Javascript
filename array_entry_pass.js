function arrayList(){
    var list=["Inian","Divya","Mani","Priya"];
    var name=prompt("Enter your name to enter");
    if (list.includes(name))
    {
        console.log("You can enter");
    }
    else{
        console.log("You can't enter");
    }
}
arrayList();