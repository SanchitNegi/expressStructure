var userModel=require(".././Model/userModel")
var tokenLib=require("../lib/auth");
var event=require("events");
//var store=new session.MemoryStore();
var events1=new event.EventEmitter();
// function listoner(){
//     events1.on('name',function(data){
//         console.log(data);

//     })

// }
function signUp(req,res){
           
            
            // req.session.email="san@mailinator.com";
            // req.session.userId="1234";
            
            res.status(200).json({data:req.body})
            
            // var room1=global.io.of('/chat');
            // room1.on('connection',function(socket){
                
            //     room1.emit('name',{data:"sanchit"});
            // })
           
            // global.io.on('connection',function(socket){
            //     //io.emit('name',{data:"Herer"})
            //     //socket.broadcast.emit('name',{data:"sanchit"});
            //    // global.io.sockets.emit('name',{data:"sanchit"})
            //     //socket.broadcast.emit('name',{data:"sanchit"});
            //     //socket.broadcast.emit('name',{data:"sanchit"})
            // })
   
    // userModel.findUniqueUser({},function(err,data){
    //     if(err){

    //     }else{
    //         //listoner();
    //         global.io.on('connection',function(socket){
            
    //            // global.io.sockets.emit('name',{data:"sanchit"})
    //             //socket.emit('name',{data:"sanchit"});
    //             //socket.broadcast.emit('name',{data:"sanchit"})
    //         })
                       
    //         res.status(200)
    //         .json({
    //           success: true,
    //           token: tokenLib.createJWToken({
    //               sessionData: data,
    //               maxAge: 3600
    //             })
    //         })
    //     }

    // })
}


function updateUser(req,res){
    var query={_id:req.body['userId']};
    var data={"email":req.body['email']};
    userModel.updateUser(query,data,function(err,data){
            
            return res.status(200).jsonp({data:data});
    })
}

function testing(req,res){
    // console.log("Queryh",req.query);
    // console.log(req.params);return 

    return res.status(200).jsonp({code:200,data:{name:'sam',age:30}})
    // if(req.session.id==req.query['sessionId']){
    //     console.log("Hurray I am")
    // }
    // if(req.session.email){
    //     console.log("Herere");
    // }else{
    //     console.log("Herere I AM");
    // }
    // var session =require('express-session');
    // var store=new session.MemoryStore();
    // store.get(req.query['sessionId'],function(err,data){

    //     console.log(err,data);
    // })
   
  

}

 module.exports={signUp,updateUser,testing}