import mongoose from 'mongoose';

const pgSchema = new mongoose.Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    genderAllowed: { type: String, required: true },
    usersStaying: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shortDescription: { type: String, required: true },
    foodDescription: { type: String, required: true },
    gateTiming: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

const PG = mongoose.model('PG', pgSchema);

export default PG;
