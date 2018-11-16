var con=require('../../dbconnection'); //reference of dbconnection.js
//var randomID = RandomIDGenerator.getRandomID();
var SoldListingsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getSoldListingsByRealtorID:function(id, callback){
        return con.query("SELECT * FROM cpsc304.SoldListings\
                          WHERE licenseNumber=?",[id], callback);
    },

    addNewSold:function(sold, callback){
        return con.query("INSERT INTO cpsc304.SoldListings(agreementNumber, finalPrice, soldDate, completionDate, phoneNumber, licenseNumber, listingID) values (?,?,?,?,?,?,?)",
        [null, sold.finalPrice, sold.soldDate, sold.completionDate, sold.phoneNumber, sold.licenseNumber, sold.listingID],callback);
    }

};
module.exports=SoldListingsController;