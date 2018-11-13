var con=require('../../dbconnection'); //reference of dbconnection.js
var RealtorsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllRealtors:function(callback){
        return con.query("SELECT * FROM cpsc304.Realtors", callback)
    },

    addNewRealtor:function(realtor, callback){
        // The array has only one value;
        console.log('Realtor:',realtor);
        return con.query("INSERT INTO cpsc304.Realtors(licenseNumber, phoneNumber, realtorEmail, realtorName) values (?,?,?,?)",
                [realtor.licenseNumber, realtor.phoneNumber, realtor.realtorEmail, realtor.realtorName],callback);
    },

    deleteRealtorbyID:function(id, callback){
        return con.query("DELETE FROM cpsc304.Realtors WHERE licenseNumber=?", [id], callback)
     },

    // getAppointmentsbyClientPhone:function(id, callback){
    //    console.log(id)
    //    return con.query("SELECT * FROM cpsc304.Appointments, cpsc304.Realtors\
    //                      WHERE cpsc304.Appointments.licenseNumber=cpsc304.Realtors.licenseNumber\
    //                      AND cpsc304.Appointments.phoneNumber=?", [id], callback)
    // },

    updateRealtorByID:function(id, realtor, callback){
        const updateSql =
                "UPDATE cpsc304.Realtors\
                 SET licenseNumber=?, phoneNumber=?, realtorEmail=?, realtorName=?\
                 WHERE licenseNumber=?"
        console.log('this is the updated realtor', appointment);
        return con.query(updateSql, [realtor.licenseNumber, realtor.phoneNumber, 
            realtor.realtorEmail, realtor.realtorName, id], callback)
    }
};
module.exports=RealtorsController;