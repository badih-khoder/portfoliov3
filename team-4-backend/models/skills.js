const { Schema, model } = require('mongoose');

const skills = new Schema ({

  icon:{ type: String, required:true}

})

const Skill = model('skill', skills)
module.exports = Skill;