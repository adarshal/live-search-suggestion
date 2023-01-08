const mongoose = require('mongoose');


const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provide']
        //unique: true
    },
  },{
    timestamps: true // to know when user was created when was updated
  });




  const Animal=mongoose.model('Animal',AnimalSchema);
module.exports =Animal;