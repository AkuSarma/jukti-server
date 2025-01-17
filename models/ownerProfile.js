import { Schema, model } from 'mongoose';

const ownerProfileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    aadharCard: { type: String, required: true },
    panCard: { type: String, required: true },
    voterId: { type: String, required: true },
    pgName: { type: String, required: true },
    pgAddress: { type: String, required: true }
});

const OwnerProfile = model('OwnerProfile', ownerProfileSchema);

export default OwnerProfile;
