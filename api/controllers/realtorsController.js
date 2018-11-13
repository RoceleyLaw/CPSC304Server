var con=require('../../dbconnection'); //reference of dbconnection.js
var RealtorsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllRealtors:function(callback){
        return con.query("SELECT * FROM cpsc304.Realtors", callback)
    },

    // addNewAppointment:function(appointment, callback){
    //     // The array has only one value;
    //     console.log('LICENSE',appointment);
    //     return con.query("INSERT INTO cpsc304.Appointments(appointmentID, licenseNumber, location, date, startTime, endTime, phoneNumber) values (?,?,?,?,?,?,?)",
    //             [null, appointment.licenseNumber, appointment.location, appointment.date, appointment.startTime, appointment.endTime, appointment.phoneNumber],callback);
    // },

    // deleteAppointmentbyID:function(id, callback){
    //     return con.query("DELETE FROM cpsc304.Appointments WHERE appointmentID=?", [id], callback)
    //  },

    // getAppointmentsbyClientPhone:function(id, callback){
    //    console.log(id)
    //    return con.query("SELECT * FROM cpsc304.Appointments, cpsc304.Realtors\
    //                      WHERE cpsc304.Appointments.licenseNumber=cpsc304.Realtors.licenseNumber\
    //                      AND cpsc304.Appointments.phoneNumber=?", [id], callback)
    // },

    // updateAppointmentsByID:function(id, appointment, callback){
    //     const updateSql =
    //             "UPDATE cpsc304.Appointments\
    //              SET licenseNumber=?, location=?, date=?, startTime=?, endTime=?, phoneNumber=?\
    //              WHERE appointmentID=?"
    //     console.log('this is the appointment', appointment);
    //     return con.query(updateSql, [appointment.licenseNumber, appointment.location, 
    //         appointment.date, appointment.startTime, appointment.endTime, appointment.phoneNumber, id], callback)
    // }
};
module.exports=RealtorsController;