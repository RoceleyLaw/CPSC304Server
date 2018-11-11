var con=require('../../dbconnection'); //reference of dbconnection.js
var PostsController={
    //TODO: take SQL commands away from this file, isolate them into a new js file
    getAllPosts:function(callback){
        return con.query("SELECT * FROM cpsc304.PostedRealEstate", callback)
    },

    addNewPost:function(Post, callback){
        console.log(Post);
        return con.query("INSERT INTO cpsc304.PostedRealEstate(listingID, listedPrice, postalCode, pictureURL, bedroom, bathroom, licenseNumber) values (?,?,?,?,?,?,?)",[Post.listingID, Post.listedPrice, Post.postalCode, Post.pictureURL, Post.bedroom, Post.bathroom, Post.licenseNumber],callback);
    },

    deletePost:function(id, callback){
       return con.query("DELETE FROM cpsc304.PostedRealEstate WHERE listingID=?", [id], callback)
    },

    getPostbyID:function(id, callback){
        console.log(id)
       return con.query("SELECT * FROM cpsc304.PostedRealEstate where listingID=?", [id], callback)
    },

    updatePostByID:function(id, newPost, callback){
        console.log(newPost)
        // As id is the primary key so the array has only one value
        const Post = newPost[0];
        const updateSql =
                "UPDATE cpsc304.PostedRealEstate SET listedPrice=?, postalCode=?, pictureURL=?, bedroom=?, bathroom=?, licenseNumber=? WHERE listingID=?"
        console.log('this is the post', Post.listedPrice);
        return con.query(updateSql, [Post.listedPrice, Post.postalCode, Post.pictureURL, Post.bedroom, Post.bathroom, Post.licenseNumber, Post.listingID], callback)
    }
};
module.exports=PostsController;