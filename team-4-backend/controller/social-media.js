var social_media = require("../models/social-media");

const getAll = (req, res, next) => {
  social_media.find({}, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

const get = (req, res, next) => {
  const { id } = req.params;
  social_media.findOne({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

const post = (req, res, next) => {
  const body = req.body;
  const doc = new social_media(body);
  doc.save((err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

const put = (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  console.log(body)
  social_media.updateOne({ _id: id }, { $set: body }, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

// const put = (req, res, next) => {
//   social_media
//     .findById(req.params.id)
//     .then(async (social, err) => {
//       Object.assign(social, req.query);
//       await social.save();
//       res.send({
//         message: "the link is updated successfuly",
//         data: social,
//       });
//     })
//     .catch((err) => {
//       res.status(404).send({
//         status: 404,
//         error: true,
//         message: err,
//       });
//     });
// };

// const Delete = (req, res, next) => {
//     const {id} = req.params;
//     social_media.findByIdAndDelete({_id:id},(err, response) => {
//         if(err) return next(err);
//         res.status(200).send(response);
//     })
// }

module.exports = { getAll, get, put, post };
