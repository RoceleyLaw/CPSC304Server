var mysql=require('mysql');

//connect to the locally hosted mysql db
//NOTES: if not able to connect to your local db 
//Possible issue 1: authentication or protocol error
//Solution 1: run this SQL command on your db instance
//   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' 
var connection=mysql.createPool({
    host: "cpsc304.czxlnqdoif9r.us-west-2.rds.amazonaws.com",
    port: "3306",
    user: "cpsc304",
    password: "password"
});

module.exports=connection;


 