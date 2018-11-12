var con=require('../../dbconnection'); //reference of dbconnection.js
var FacilitiesController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllAppointments:function(callback){
        return con.query("SELECT * FROM cpsc304.Appointments", callback)
    },

    addNewAppointment:function(Appointment, callback){
        // The array has only one value;
        const appointment = Appointment[0];
        console.log('LICENSE',appointment.licenseNumber);
        return con.query("INSERT INTO cpsc304.Appointments(appointmentID, licenseNumber, location, date, startTime, endTime, phoneNumber) values (UUID(),?,?,?,?,?,?)",
                [null, appointment.location, appointment.date, appointment.startTime, appointment.endTime, appointment.phoneNumber],callback);
    },

    deleteAppointmentbyID:function(id, callback){
        return con.query("DELETE FROM cpsc304.Appointments WHERE appointmentID=?", [id], callback)
     },

    getAppointmentsbyClientPhone:function(id, callback){
       console.log(id)
       return con.query("SELECT * FROM cpsc304.Appointments, cpsc304.Realtors\
                         WHERE cpsc304.Appointments.licenseNumber=cpsc304.Realtors.licenseNumber\
                         AND cpsc304.Appointments.phoneNumber=?", [id], callback)
    },

    updateAppointmentByID:function(id, appointment, callback){
        console.log(newPost)
        // As id is the primary key so the array has only one value
        const updateSql =
                "UPDATE cpsc304.Appointments SET location=?, date=?, startTime=?, endTime=?, phoneNumber=?, licenseNumber=? WHERE appointmentID=?"
        console.log('this is the appointment', appointment);
        return con.query(updateSql, [appointment.location, appointment.date, appointment.startTime, appointment.endTime, appointment.phoneNumber, appointment.licenseNumber, id], callback)
    }
};
module.exports=FacilitiesController;