// const { send } = require('express/lib/response');
var skills = require('../models/skills');


const getAll = (req, res, next) => {
    skills.find({}, (err, response)=>{
        if(err) return next(err);
        res.status(200).send(response)
    })
}

const get = (req, res, next) => {
    const {id}=req.params;
    skills.findOne({_id:id},(err, response) => {
        if(err) return next(err);
        res.status(200).send(response);   
    })
}

// const post = (req, res, next) => {
//     const body = req.body;
//     const doc = new skills(body);
//     doc.save((err, response) => {
//         if(err) return next(err);
//         res.status(200).status(response);
//     })
// }

const put = (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    skills.updateOne({_id : id},{$set : body}, (err, response) => {
        if(err) return next(err);
        send.status(200).send(response)
    })
}

// const Delete =  (req, res, next) => {
//     const {id} = req.params;
//     skills.findByIdAndDelete({_id:id}, (err,response)=>{
//         if(err) return next(err);
//         res.status(200).send(response);
//     })
// }

module.exports ={getAll, get, put}