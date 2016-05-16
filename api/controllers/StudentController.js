"use strict";

var _ = require('lodash');
/**
 * StudentController
 * @description :: Server-side logic for ...
 */

module.exports = {
    getwards: function(req,res){
        var user = req.user;
        var wards = user.wards;
        User.findOne({id:req.user.id}).populateAll()
        .then(function(user){
           var wards = user.wards;
           var promises = [];
           for(var i=0;i<wards.length;++i){
               var promise = Student.findOne({id: wards[i].id}).populateAll();
               promises.push(promise);
           } 
           return promises;
        }).all().then(function(wardsC){
            var promises = [];
            var classRooms = [];
            for(var i=0;i<wards.length;++i){
                for(var j=0;j<wardsC[i].classes.length;++j)
                    classRooms.push(wardsC[i].classes[j]);
            }
            wards = wardsC;            
            for(var i=0;i<classRooms.length;++i){
                var promise = ClassRoom.findOne({id:classRooms[i].id}).populateAll();
                promises.push(promise);
            }
            return promises;
        }).all().then(function(classes){
            res.ok({wards:wards,classes:classes});
        });

    }
};
