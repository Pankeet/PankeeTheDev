import mongoose from 'mongoose';

const { Schema } = mongoose;

const recruit = new Schema({
    firstname : String ,
    lastname : String , 
    email : {unique: true ,type: String}
});

const recruiter = mongoose.model('recruit' , recruit);

export default recruiter;