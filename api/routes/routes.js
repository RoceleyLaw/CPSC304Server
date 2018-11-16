'use strict';
//export by default
var posts=require('../controllers/postsController');
var appointment=require('../controllers/appointmentController');
var realtors=require('../controllers/realtorsController');
var clients=require('../controllers/clientsController');
var soldListings=require('../controllers/soldListingsController');
var addressDetails=require('../controllers/addressDetailsController');

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

    app.route('/allUnsoldPosts').get(function(req, res, next) {
        posts.getAllUnsoldPosts(function(err, result){
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
    
    /**************************** SoldListings *************************************/
    app.route('/soldlistings/:realtorid?')
    .get(function(req, res, next) {
        const id = req.params.realtorid;
        soldListings.getSoldListingsByRealtorID(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })

    app.route('/soldlistings')
    .post(function(req,res,next){
        soldListings.addNewSold(req.body,function(err,count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
            }
        });
    });;
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

    // GET - get client appointments by realtorid
    app.route('/appointments/byrealtor/:realtorid?')
    .get(function(req, res, next) {
        const id = req.params.realtorid;
        appointment.getAppointmentsbyRealtorID(id, function(err, result){
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
        appointment.updatePostByID(id, req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
       });
    
    /**************************** Realtors *************************************/ 
    // GET - get all realtors
    app.route('/allRealtors')
    .get(function(req, res, next) {
        realtors.getAllRealtors(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function(req, res, next){
        realtors.addNewRealtor(req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
             }
         });
    });

    // Delete - delete realtor by licenseNumber
    // PUT - edit the realtor by licenseNumber
    app.route('/allRealtors/:licenseNumber?')
    .delete(function(req, res, next) {
        const id = req.params.licenseNumber;
        realtors.deleteRealtorbyID(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(req.body);
            }
        });
    })
    .put(function(req, res, next){
        const id = req.params.licenseNumber;
        realtors.updateRealtorByID(id, req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
    })
    .get(function(req, res, next) {
        const id = req.params.licenseNumber;
        realtors.getRealtorByID(id, function(err, result){
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
        });
    });
    
    /**************************** Clients *************************************/
    app.route('/allClients')
    .get(function(req, res, next) {
        clients.getAllClients(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function(req, res, next){
        clients.addNewClient(req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
             }
         });
       });

    // Delete - delete client by phoneNumber
    // PUT - edit the client by phoneNumber
    app.route('/allClients/:phoneNumber?')
    .delete(function(req, res, next) {
        const id = req.params.phoneNumber;
        clients.deleteClientbyID(id, function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(req.body);
            }
        });
    })
    .put(function(req, res, next){
        const id = req.params.phoneNumber;
        clients.updateClientByID(id, req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                res.json(req.body);
             }
         });
    })
    .get(function(req, res, next) {
        const id = req.params.phoneNumber;
        clients.getClientbyID(id, function(err, result){
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
        });
    });
  
 /**************************** AddressDetails *************************************/
 app.route('/postalcodes')
    .get(function(req, res, next) {
        addressDetails.getAllPostalCodes(function(err, result){
            if (err){
                res.json(err);
            } else {
                res.json(result);
            }
        });
    })
    .post(function(req, res, next){
        addressDetails.addNewPostalCode(req.body, function(err, count){
            if (err) {
                res.json(err);
            } else {
                console.log(req.body);
                res.json(req.body);
             }
         });
       });
}