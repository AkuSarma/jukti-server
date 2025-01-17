import { Schema, model } from 'mongoose';

const studentProfileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    aadharCard: { type: String, required: true },
    address: { type: String, required: true },
    university: { type: String, required: true },
    universityIdCard: { type: String, required: true }
});

const StudentProfile = model('StudentProfile', studentProfileSchema);

export default StudentProfile;
