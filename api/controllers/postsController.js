var con=require('../../dbconnection'); //reference of dbconnection.js
var RandomIDGenerator=require('../randomIDgenerator');
//var randomID = RandomIDGenerator.getRandomID();
var PostsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllPosts:function(callback){
        return con.query("SELECT * FROM cpsc304.PostedRealEstate, cpsc304.AddressDetails\
                          WHERE cpsc304.PostedRealEstate.postalCode = cpsc304.AddressDetails.postalCode", callback)
    },

    getAllUnsoldPosts:function(callback){
        return con.query("SELECT * FROM cpsc304.PostedRealEstate\
                          WHERE cpsc304.PostedRealEstate.listingID\
                          NOT IN (SELECT cpsc304.SoldListings.listingID FROM cpsc304.PostedRealEstate, cpsc304.SoldListings WHERE cpsc304.PostedRealEstate.listingID = cpsc304.SoldListings.listingID)", callback);
    },

    addNewPost:function(Post, callback){
        const randomID = RandomIDGenerator.getRandomID();
        console.log("Random ID assigned", randomID);
        return con.query("INSERT INTO cpsc304.PostedRealEstate(listingID, listedPrice, postalCode, pictureURL, bedroom, bathroom, licenseNumber) values (?,?,?,?,?,?,?)",
        [randomID, Post.listedPrice, Post.postalCode, Post.pictureURL, Post.bedroom, Post.bathroom, Post.licenseNumber],callback);
    },

    deletePost:function(id, callback){
       return con.query("DELETE FROM cpsc304.PostedRealEstate WHERE listingID=?", [id], callback)
    },

    getPostbyID:function(id, callback){
       return con.query("SELECT * FROM cpsc304.PostedRealEstate where listingID=?", [id], callback)
    },

    updatePostByID:function(id, newPost, callback){
        console.log(newPost)
        // As id is the primary key so the array has only one value
        const Post = newPost;
        const updateSql =
                "UPDATE cpsc304.PostedRealEstate SET listedPrice=?, postalCode=?, pictureURL=?, bedroom=?, bathroom=?, licenseNumber=? WHERE listingID=?"
        console.log('this is the post', Post);
        return con.query(updateSql, [Post.listedPrice, Post.postalCode, Post.pictureURL, Post.bedroom, Post.bathroom, Post.licenseNumber, Post.listingID], callback)
    },
    
    // ISA relationship 
    getAllHouses:function(callback){
        return con.query("SELECT * FROM cpsc304.Houses, cpsc304.PostedRealEstate, cpsc304.AddressDetails\
                          WHERE cpsc304.Houses.listingID = cpsc304.PostedRealEstate.listingID\
                                AND cpsc304.PostedRealEstate.postalCode = cpsc304.AddressDetails.postalCode", callback)
    },

    getAllApts:function(callback){
        return con.query("SELECT * FROM cpsc304.Apartments, cpsc304.PostedRealEstate, cpsc304.AddressDetails\
                          WHERE cpsc304.Apartments.listingID = cpsc304.PostedRealEstate.listingID\
                                AND cpsc304.PostedRealEstate.postalCode = cpsc304.AddressDetails.postalCode", callback)
    },

    addNewHouse:function(House, callback){
        //Q: is it a good way to send 2 queries at one req?
        //Solution: enable multiple queries. It might cause security issues for production level application
        //We want to insert the tuple into parent and child table as there is an ISA relationship btw 2 tables
        const insertSql =
                "INSERT INTO cpsc304.PostedRealEstate(listingID, listedPrice, postalCode, pictureURL, bedroom, bathroom, licenseNumber)\
                 values (?,?,?,?,?,?,?);\
                 INSERT INTO cpsc304.Houses(listingID, houseNumber, lotSize)\
                 values (?,?,?);";
        const randomID = RandomIDGenerator.getRandomID();
        console.log("Random ID assigned", randomID);       
        return con.query(insertSql,[randomID, House.listedPrice, House.postalCode, 
            House.pictureURL, House.bedroom, House.bathroom, House.licenseNumber, 
            randomID, House.houseNumber, House.lotSize],callback);
    },

    addNewApt:function(Apt, callback){
        const insertSql =
                "INSERT INTO cpsc304.PostedRealEstate(listingID, listedPrice, postalCode, pictureURL, bedroom, bathroom, licenseNumber)\
                 values (?,?,?,?,?,?,?);\
                 INSERT INTO cpsc304.Apartments(listingID, apartmentRoomNumber, buildingNumber)\
                 values (?,?,?);";
        const randomID = RandomIDGenerator.getRandomID();
        console.log("Random ID assigned", randomID);      
        return con.query(insertSql,[randomID, Apt.listedPrice, Apt.postalCode, 
            Apt.pictureURL, Apt.bedroom, Apt.bathroom, Apt.licenseNumber, 
            randomID, Apt.apartmentRoomNumber, Apt.buildingNumber],callback);
    }

};
module.exports=PostsController;