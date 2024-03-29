"use strict";

/**
 * NoticeBoardController
 * @description :: Server-side logic for ...
 */

module.exports = {
    get: function(req,res){
        var user = req.user;
        var skip = req.param('skip');
        var student = req.param('student');
        var notices = [];
        if(user.isParent){
            if(!student){
                return res.badRequest({status:'Missing parameters'});
            }
            Student.findOne({id:student}).populate('classes',{limit:100})
            .then(function(data){
                return data.classes;
            }).then(function(cl){
                var promises = [];
                cl.forEach(function(v,i,a){
                    promises.push(ClassRoom.findOne({id:v.id}).populate('notices'),{limit:100});
                }); 
                return promises;
            }).all().then(function(cln){
                return res.ok(cln);
            })
            .catch(function(err){
                return res.serverError(err);
            });  
        }
        else if(user.isTeacher){
            ClassRoom.find({teacher:user.id}).populate('notices')
            .then(function(cln){
                return res.ok(cln);
            })
            .catch(function(err){
                return res.serverError(err);
            });
        }
        else{
            return res.serverError({status:'User neither Teacher or Parent'});
        }
    },
    
    getAll: function(req,res){
        var user = req.user;
        console.log(user);
        var promises = [];
        for(var i=0;i<user.wards.length;++i){

        }
        res.ok();
    }
};
