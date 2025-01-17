import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    studentProfileId: { type: Schema.Types.ObjectId, ref: 'StudentProfile' },
    ownerProfileId: { type: Schema.Types.ObjectId, ref: 'OwnerProfile' }
});

// Hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await genSalt(10);
        this.password = await hash(this.password, salt);
    }
    next();
});

// Compare password method
userSchema.methods.comparePassword = function(password) {
    return compare(password, this.password);
};

const User = model('User', userSchema);

export default User;
