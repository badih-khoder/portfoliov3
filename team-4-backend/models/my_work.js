const { Schema, model } = require("mongoose");

const my_work = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const work = [
  {
    name: "project 1",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
  {
    name: "project 2",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
  {
    name: "project 3",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
  {
    name: "project 4",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
  {
    name: "project 5",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
  {
    name: "project 6",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_X0F8j5n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xyt83ew0p5q8blvmh5x6.jpg",
    url: "https://github.com/",
  },
];

const Work = model("projects", my_work);
// work.map((row) => {
//   var work = new Work(row);
//   work
//     .save()
//     .then((result) => console.log(`work ${row.name} uploaded to mongodb`))
//     .catch((err) => console.log(err));
// });

module.exports = Work;
