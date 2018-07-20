var mongoose =require('mongoose');

var Userschema={
    email:{type:String},
    mobileNumber:{type:String},
    password:{type:String}
}
var Userschema = new mongoose.Schema(Userschema);
Userschema.statics.findAllUser=function findUser(data,cb){
    
        this.model('User').find(data).exec(function(err,data){
                cb(null,data)
    
        })
}
Userschema.statics.findUniqueUser=function findUser(data,cb){
    this.model('User').findOne(data).exec(function(err,data){
                cb(null,data)
    
    })
};
Userschema.statics.saveUser=function findUser(data,cb){
        var user=new User(data);
        user.save(function(err,data){
            cb(null,data)
        })
}
Userschema.statics.updateUser=function updateUser(query,data,cb){
    this.model('User').findOneAndUpdate(query,data,{new:true}).exec(function(err,data){
        cb(null,data)
    })
    
}
var User = mongoose.model('User', Userschema);
module.exports=User;
