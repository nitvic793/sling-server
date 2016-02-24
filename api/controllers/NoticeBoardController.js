/**
 * NoticeBoardsController
 *
 * @description :: Server-side logic for managing Noticeboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getParentNoticeBoard: function(req,res){
		if(req.user.parent){
			//TODO: Send all notice board info here

		}
		else{
			return res.json({error:"Parent notice board not found"});
		}
	},
	getTeacherNoticeBoard: function(req,res){
		if(req.user.teacher){
			//TODO: Send all notice board info here

		}
		else{
			return res.json({error:"Teacher notice board not found"});
		}
	}
};
