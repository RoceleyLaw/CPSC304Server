'use strict';
//export by default
var task=require('../controllers/taskController');
var posts=require('../controllers/postsController');
var appointment=require('../controllers/appointmentController');

module.exports = function (app) {
    //get all persons at route baseURL/allpersons 
    app.route('/allpersons')
        .get(function (req, res, next) {
            task.getAllPersons(function(err, result){
                if (err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    // TODO: add routes
    app.route('/').get(function (req, res, next) {
        res.send('Welcome to the our API');
    });

    app.route('/new').post(function(req,res,next) {
        //res.send("hello world~");
        //console.log("post received");
        task.addNewPerson(req.body,function(err,count){
          if (err) {
            res.json(err);
          } else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
            }
          });
         });

    // ----------------- Every route below would be for our project -------------------------
    // GET REQ - get all posts in PostedRealEstate relation
    app.route('/allposts').get(function(req, res, next) {
        posts.getAllPosts(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    });

    // POST REQ - post a new real estate for sale
    app.route('/addNewPost').post(function(req,res,next){
        posts.addNewPost(req.body,function(err,count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
            }
        });
    });
    
    // PUT/DELETE/GET REQ - update/delete/get a specific post by its listingID
    app.route('/allposts/:listingID?')
       .put(function(req, res, next){
        const id = req.params.listingID;
        posts.updatePostByID(id, req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
       })
       .delete(function(req, res, next){
           const id = req.params.listingID;
           //console.log('this is the id', id)
           posts.deletePost(id, function(err, count){
               if (err) {
                   res.json(err);
               } else {
                    console.log(req.body);
                    res.json(req.body);
                }
            });
        })
       .get(function(req, res, next) {
            const id = req.params.listingID;
            posts.getPostbyID(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
            });
        });


    // appointments
    app.route('/appointments')
       .post(function(req, res, next){
        appointment.addNewAppointment(req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
       })
       .get(function(req, res, next){
        appointment.getAllAppointments(function(err, result){
            if (err) {
                res.json(err);
            } else {
                res.json(result);
             }
         });
       });
}