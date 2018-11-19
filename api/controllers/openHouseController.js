var con=require('../../dbconnection'); //reference of dbconnection.js
var OpenHouseController={
    //Formal Specification 5:
    getAllOpenHouseEvents:function(callback){
        return con.query("SELECT * FROM cpsc304.BookOpenHouseFor\
                          NATURAL JOIN cpsc304.Posts\
                          NATURAL JOIN cpsc304.Realtors\
                          NATURAL JOIN cpsc304.TimePeriod;\
                            ", callback)
    },

    addNewOpenHouseEvent:function(openHouse, callback){
        // /appointments route is shared by post and get
        console.log('openHouse:',openHouse);
        return con.query("INSERT INTO cpsc304.TimePeriod(date, startTime, endTime) values (?,?,?);\
            INSERT INTO `cpsc304`.`BookOpenHouseFor` (`listingID`,`licenseNumber`,`date`,`startTime`,`endTime`)\
            VALUES\
            (?,?,?,?,?)",
            [openHouse.date, openHouse.startTime, openHouse.endTime,
            openHouse.listingID, openHouse.licenseNumber, openHouse.date, openHouse.startTime, openHouse.endTime], callback);
    },

    getOpenHouseEventsbyRealtorID:function(id, callback){
        console.log("license number:", id);
        return con.query("SELECT * FROM cpsc304.BookOpenHouseFor, cpsc304.Clients\
                          WHERE cpsc304.BookOpenHouseFor.phoneNumber=cpsc304.Clients.phoneNumber\
                          AND cpsc304.BookOpenHouseFor.licenseNumber=?", [id], callback)
     },
};
module.exports=OpenHouseController;