const my_work = require("../models/my_work");

const getAll = (req, res, next) => {
  my_work.find({}, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

const get = (req, res, next) => {
  const { id } = req.params;
  my_work.findOne({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

// const put = (req, res, next) => {
//   const { id } = req.params;
//   const body = req.body;
//   my_work.updateOne({ _id: id }, { $set: body }, (err, response) => {
//     if (err) return next(err);
//     res.status(200).send(response);
//   });
// };

const put = (req, res, next) => {
  my_work
    .findById(req.params.id)
    .then(async (project, err) => {
      Object.assign(project, req.query);
      await project.save();
      res.send({
        message: "the project is updated successfuly",
        data: project,
      });
    })
    .catch((err) => {
      res
        .status(404)
        .send({
          status: 404,
          error: true,
          message: `the book '${req.params.id}' does not exist`,
        });
    });
};

const post = (req, res, next) => {
  const body = req.body;
  const doc = new my_work(body);
  doc.save((err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

const Delete = (req, res, next) => {
  const { id } = req.params;
  my_work.findByIdAndDelete({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send(response);
  });
};

module.exports = { getAll, get, post, put, Delete };
