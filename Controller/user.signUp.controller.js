var userModel=require(".././Model/userModel")
var tokenLib=require("../lib/auth");
var event=require("events");

var events1=new event.EventEmitter();
// function listoner(){
//     events1.on('name',function(data){
//         console.log(data);

//     })

// }
function signUp(req,res){

    userModel.findUniqueUser({},function(err,data){
        if(err){

        }else{
            //listoner();
            global.io.on('connection',function(socket){
            
               // global.io.sockets.emit('name',{data:"sanchit"})
                //socket.emit('name',{data:"sanchit"});
                //socket.broadcast.emit('name',{data:"sanchit"})
            })
                       
            res.status(200)
            .json({
              success: true,
              token: tokenLib.createJWToken({
                  sessionData: data,
                  maxAge: 3600
                })
            })
        }

    })
}


function updateUser(req,res){
    var query={_id:req.body['userId']};
    var data={"email":req.body['email']};
    userModel.updateUser(query,data,function(err,data){
            
            return res.status(200).jsonp({data:data});
    })
}

module.exports={signUp,updateUser}