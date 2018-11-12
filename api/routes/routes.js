'use strict';
//export by default
var posts=require('../controllers/postsController');
var appointment=require('../controllers/appointmentController');

module.exports = function (app) {
    
    app.route('/').get(function (req, res, next) {
        res.send('Welcome to the our API');
    });

    /**************************** PostedRealEstate *************************************/
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
       .delete(function(req, res, next){ // Only one delete is needed for parent table as it is CASCADE
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
    
    /**************************** Houses *************************************/    
    // GET/POST REQ - get all posts that are houses/post a new house
    app.route('/allHouses')
    .get(function(req, res, next) {
        posts.getAllHouses(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function(req,res,next){
        posts.addNewHouse(req.body,function(err,count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
            }
        });
    });

    /**************************** Apartments *************************************/
    // GET REQ - get all posts that are apartments
    app.route('/allApts')
    .get(function(req, res, next) {
        posts.getAllApts(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function(req,res,next){
        posts.addNewApt(req.body,function(err,count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
            }
        });
    });

    /**************************** Appointments *************************************/   
    app.route('/appointments')
       .post(function(req, res, next){
        appointment.addNewAppointment(req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
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
    
    // GET - get client appointments by phone number
    app.route('/appointments/:clientPhone?')
    .get(function(req, res, next) {
        const id = req.params.clientPhone;
        appointment.getAppointmentsbyClientPhone(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    
    // Delete - delete appointment by id
    // PUT - edit the appointment by id --- NOT DONE YET MIGHT NOT WORK NOW
    app.route('/appointments/:appointmentID?')
    .delete(function(req, res, next) {
        const id = req.params.appointmentID;
        appointment.deleteAppointmentbyID(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(req.body);
            }
        });
    })
    .put(function(req, res, next){
        const id = req.params.appointmentID;
        posts.updatePostByID(id, req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
       });
}