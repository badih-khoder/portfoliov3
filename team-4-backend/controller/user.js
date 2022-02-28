const user = require('../models/user');


const getAll = (req, res, next) =>{

    user.find({}, (err, response) => {
        if(err) return next(err);
        res.status(200).send(response)
    })
}

const get = (req, res, next) => {
    const {id} = req.params;
    user.findOne({_id:id}, (err, response) => {
        if(err) return next(err);
        res.status(200).send(response);
    })
}

module.exports = {get, getAll}