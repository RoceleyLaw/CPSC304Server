var con=require('../../dbconnection'); //reference of dbconnection.js
var AddressDetailsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllPostalCodes:function(callback){
        return con.query("SELECT * FROM cpsc304.AddressDetails", callback)
    },

    addNewPostalCode:function(AddressDetails, callback){
        // The array has only one value;
        console.log('AddressDetails:',AddressDetails);
        return con.query("INSERT INTO cpsc304.AddressDetails(postalCode, streetName, city, province) values (?,?,?,?)",
                [AddressDetails.postalCode, AddressDetails.streetName, AddressDetails.city, AddressDetails.province],callback);
    }
};
module.exports=AddressDetailsController;