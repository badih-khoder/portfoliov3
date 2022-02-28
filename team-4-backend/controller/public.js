var Public = require('../models/public');


const getAll = (req,res,next) => {
  
  
    Public.find({}, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });

})}

const get = (req,res,next) =>{
   const {id} = req.params
   Public.findOne({_id:id},(err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });

    })
}

const post = (req,res,next) =>{
  const  body = req.body
  const doc = new Public(body)
  doc.save((err, response) => {
      if(err) return next(err);
      res.status(200).send(response);
  })
}  

const put = (req,res,next) => {
 const {id} = req.params;
 const body = req.body;
 Public.updateOne({_id : id},{ $set : body}, (err,response)  => 
 {if(err) return next(err);
res.status(200).send(response)} )
}

const Delete = (req,res,next) => {
    const {id} = req.params;
    Public.findByIdAndDelete({_id : id},(err, response) =>{
        if(err) return next(err);
        res.status(200).send(response);
    })
}


module.exports = {getAll, get,Delete, put, post}