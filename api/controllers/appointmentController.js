var con=require('../../dbconnection'); //reference of dbconnection.js
var AppointmentController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllAppointments:function(callback){
        return con.query("SELECT * FROM cpsc304.Appointments", callback)
    },

    addNewAppointment:function(Appointment, callback){
        // The array has only one value;
        const appointment = Appointment[0];
        console.log('LICENSE',appointment.licenseNumber);
        return con.query("INSERT INTO cpsc304.Appointments(appointmentID, licenseNumber, location, date, startTime, endTime, phoneNumber) values (UUID(),?,?,?,?,?,?)",[appointment.licenseNumber, appointment.location, appointment.date, appointment.startTime, appointment.endTime, appointment.phoneNumber],callback);
    }

    // deletePost:function(id, callback){
    //    return con.query("DELETE FROM cpsc304.PostedRealEstate WHERE listingID=?", [id], callback)
    // },

    // getPostbyID:function(id, callback){
    //     console.log(id)
    //    return con.query("SELECT * FROM cpsc304.PostedRealEstate where listingID=?", [id], callback)
    // },

    // updatePostByID:function(id, newPost, callback){
    //     console.log(newPost)
    //     // As id is the primary key so the array has only one value
    //     const Post = newPost[0];
    //     const updateSql =
    //             "UPDATE cpsc304.PostedRealEstate SET listedPrice=?, postalCode=?, pictureURL=?, bedroom=?, bathroom=?, licenseNumber=? WHERE listingID=?"
    //     console.log('this is the post', Post.listedPrice);
    //     return con.query(updateSql, [Post.listedPrice, Post.postalCode, Post.pictureURL, Post.bedroom, Post.bathroom, Post.licenseNumber, Post.listingID], callback)
    // }
};
module.exports=AppointmentController;