var assert = require('assert');
var chai = require('chai'),
    chaiHttp = require('chai-http');

chai.use(chaiHttp);

// describe('Array', function() {
//   describe('#sum', function() {
//     it('sum should be greator then 0', function() {
//         var c=2-3;
//         assert.notEqual(c,-1)
//     });
//   });
// });
describe('Check API', function () {
    describe('checkArgument', function () {
        
        describe('#CHECK 200', function () {
            it('status should be 200', function () {
    
                chai.request("http://localhost:3005").get('/testing')
                    .end(function (err,res) {
                    
                        expect(res).to.have.code("123");
                    });
            });
        });

    })
    
});