var con=require('../../dbconnection'); //reference of dbconnection.js
var FacilitiesController={
    getAllFacilities:function(callback){
        return con.query("SELECT * FROM cpsc304.CloseByFacilities", callback)
    },

    addNewFacility:function(Facility, callback){
        console.log('Facility:',Facility);
        return con.query("INSERT INTO cpsc304.Facilities(fid, address, type) values (?,?,?)",
                [null, Facility.address, Facility.type],callback);
    },

    getFacilitiesCloseByListingID:function(id, callback){
       console.log(id);
       return con.query("SELECT * FROM cpsc304.CloseByFacilities\
                         WHERE cpsc304.CloseByFacilities.listingID=?", [id], callback)
    }
};
module.exports=FacilitiesController;