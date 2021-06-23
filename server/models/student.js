import mongoose from 'mongoose';

const studentSchema= mongoose.Schema({
    regNo: Number,
    sname: String,
    grade: String,
    section: String
});
 
const student=mongoose.model('student',studentSchema);
export default student;