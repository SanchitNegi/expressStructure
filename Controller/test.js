var userModel=require(".././Model/userModel")
 function f() {
    
    userModel.find().exec(function(err,data){
        console.log(data)
    })
    

    
    console.log("Herer"); // "done!"
}
f();
    