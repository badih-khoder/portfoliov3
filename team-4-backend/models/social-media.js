const { Schema, model } = require("mongoose");

// const social_media_schema = new Schema({
//   s_name: { type: String, required: true },
//   s_url: { type: String, required: true },
// });
const social_media_schema = new Schema({
  Facebook: { type: String, required: true },
  Github: { type: String, required: true },
  Linkedin: { type: String, required: true },
});
// const social = [
//   // {
//   //   Facebook: "https://www.facebook.com/",
//   //   Github: "https://www.github.com/",
//   //   Linkedin: "https://www.linkedin.com/",
//   // },
//   {
//     s_name: "Github",
//     s_url: "https://www.github.com/",
//   },
//   {
//     s_name: "Facebook",
//     s_url: "https://www.facebook.com/",
//   },
//   {
//     s_name: "Linkedin",
//     s_url: "https://www.linkedin.com/",
//   },
// ];
const Social_media = model("social_media", social_media_schema);

// social.map((row) => {
//   var social = new Social_media(row);
//   social
//     .save()
//     .then((result) => console.log(`social ${row.name} uploaded to mongodb`))
//     .catch((err) => console.log(err));
// });

module.exports = Social_media;
