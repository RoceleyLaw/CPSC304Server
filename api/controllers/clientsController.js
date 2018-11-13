var con=require('../../dbconnection'); //reference of dbconnection.js
var ClientsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllClients:function(callback){
        return con.query("SELECT * FROM cpsc304.Clients", callback)
    },

    addNewaddNewClient:function(client, callback){
        // The array has only one value;
        console.log('client:',client);
        return con.query("INSERT INTO cpsc304.Clients(phoneNumber, clientName, clientEmail) values (?,?,?)",
                [client.phoneNumber, client.clientName, client.clientEmail],callback);
    },

    deleteClientbyID:function(id, callback){
        return con.query("DELETE FROM cpsc304.Clients WHERE phoneNumber=?", [id], callback)
     },

    // getAppointmentsbyClientPhone:function(id, callback){
    //    console.log(id)
    //    return con.query("SELECT * FROM cpsc304.Appointments, cpsc304.Realtors\
    //                      WHERE cpsc304.Appointments.licenseNumber=cpsc304.Realtors.licenseNumber\
    //                      AND cpsc304.Appointments.phoneNumber=?", [id], callback)
    // },

    updateClientByID:function(id, client, callback){
        const updateSql =
                "UPDATE cpsc304.Clients\
                 SET phoneNumber=?, clientName=?, clientEmail=?\
                 WHERE phoneNumber=?"
        console.log('updatedClient:', client);
        return con.query(updateSql, [client.phoneNumber, client.clientName, 
            client.clientEmail, id], callback)
    }
};
module.exports=ClientsController;