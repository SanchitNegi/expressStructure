var userSignUpController=require("../../Controller/user.signUp.controller");
var middleware=require("../../Middleware/test.middleware")
/* GET home page. */
module.exports = function (router) {
    router.post('/signUp',userSignUpController.signUp);
    router.get('/testing',userSignUpController.testing);
    router.post('/updateUser',middleware.middleware,userSignUpController.updateUser);
    router.get('/', function(req, res) {
            res.sendfile('index.html');
    });

}
