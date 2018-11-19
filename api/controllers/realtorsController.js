var con=require('../../dbconnection'); //reference of dbconnection.js
var RealtorsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllRealtors:function(callback){
        return con.query("SELECT * FROM cpsc304.Realtors", callback)
    },

    addNewRealtor:function(realtor, callback){
        // The array has only one value;
        console.log('Realtor:',realtor);
        return con.query("INSERT INTO cpsc304.Realtors(licenseNumber, r_phoneNumber, realtorEmail, realtorName) values (?,?,?,?)",
                [realtor.licenseNumber, realtor.phoneNumber, realtor.realtorEmail, realtor.realtorName],callback);
    },

    deleteRealtorbyID:function(id, callback){
        return con.query("DELETE FROM cpsc304.Realtors WHERE licenseNumber=?", [id], callback)
     },

    getRealtorByID:function(id, callback){
       console.log(id)
       return con.query("SELECT * FROM cpsc304.Realtors WHERE licenseNumber=?", [id], callback)
    },

    updateRealtorByID:function(id, realtor, callback){
        const updateSql =
                "UPDATE cpsc304.Realtors\
                 SET licenseNumber=?, r_phoneNumber=?, realtorEmail=?, realtorName=?\
                 WHERE licenseNumber=?"
        console.log('this is the updated realtor', realtor);
        return con.query(updateSql, [realtor.licenseNumber, realtor.phoneNumber, 
            realtor.realtorEmail, realtor.realtorName, id], callback)
    },
    
    // Aggregation: get the numbers of houses/apts sold by every realtor and 
    //              display them in descending order
    getSalesInfo:function(callback){
        return con.query("SELECT COUNT(listingID), r.licenseNumber, realtorName FROM cpsc304.SoldListings AS s, cpsc304.Realtors AS r WHERE s.licenseNumber = r.licenseNumber GROUP BY licenseNumber ORDER BY COUNT(listingID) DESC", callback)
     },
};
module.exports=RealtorsController;