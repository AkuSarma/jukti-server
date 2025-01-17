import StudentProfile from '../models/studentProfile';
import OwnerProfile from '../models/ownerProfile';
import User from '../models/user';

// Create student profile
export async function createStudentProfile(req, res) {
    try {
        const studentProfile = new StudentProfile(req.body);
        await studentProfile.save();
        
        // Update user with student profile ID
        await User.findByIdAndUpdate(req.body.userId, { studentProfileId: studentProfile._id });

        res.status(201).send(studentProfile);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Get student profile
export async function getStudentProfile(req, res) {
    try {
        const studentProfile = await StudentProfile.findById(req.params.id).populate('userId');
        if (!studentProfile) {
            return res.status(404).send();
        }
        res.send(studentProfile);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Create owner profile
export async function createOwnerProfile(req, res) {
    try {
        const ownerProfile = new OwnerProfile(req.body);
        await ownerProfile.save();
        
        // Update user with owner profile ID
        await User.findByIdAndUpdate(req.body.userId, { ownerProfileId: ownerProfile._id });

        res.status(201).send(ownerProfile);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Get owner profile
export async function getOwnerProfile(req, res) {
    try {
        const ownerProfile = await OwnerProfile.findById(req.params.id).populate('userId');
        if (!ownerProfile) {
            return res.status(404).send();
        }
        res.send(ownerProfile);
    } catch (error) {
        res.status(500).send(error);
    }
}
