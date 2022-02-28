const { Schema, model } = require("mongoose");

const public = new Schema({
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Headline: { type: String, required: true },
  About_me: { type: String, required: true },
  Image: { type: String, required: true },
});

const profile = [
  {
    First_Name: "John",
    Last_Name: "Cena",
    Headline: "e",
    About_me:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. ",
    Image: "https://i.ibb.co/VQqGj8K/user-Image.png",
  },
];
const Publics = model("public", public);

// profile.map((row) => {
//   var profile = new Publics(row);
//   profile
//     .save()
//     .then((result) => console.log(`profile ${row.name} uploaded to mongodb`))
//     .catch((err) => console.log(err));
// });
module.exports = Publics;
