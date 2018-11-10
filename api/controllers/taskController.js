var con=require('../../dbconnection'); //reference of dbconnection.js
var TaskController={
    getAllPersons:function(callback){
        //TODO: take SQL commands away from this file, isolate them into a new js file
        return con.query("SELECT * FROM cpsc304.Persons", callback)
    }
};
 module.exports=TaskController; 