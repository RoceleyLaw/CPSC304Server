var con=require('../../dbconnection'); //reference of dbconnection.js
var TaskController={
    getAllPersons:function(callback){
        //TODO: take SQL commands away from this file, isolate them into a new js file
        return con.query("SELECT * FROM cpsc304.Persons", callback)
    },

    addNewPerson:function(Persons, callback){
        //"Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
        console.log(Persons);
        return con.query("INSERT INTO cpsc304.Persons(PersonID, LastName, FirstName, DetailAddress, City) values (?,?,?,?,?)",[Persons.PersonID,Persons.LastName,Persons.FirstName,Persons.DetailAddress,Persons.City],callback);
    }
};
 module.exports=TaskController; 