import PG from '../models/pgModel.js';

export const createPG = async (req, res) => {
    try {
        const { name, capacity, genderAllowed, usersStaying, owner, shortDescription, foodDescription, gateTiming, address, contactNumber, price } = req.body;
        const pg = new PG({ name, capacity, genderAllowed, usersStaying, owner, shortDescription, foodDescription, gateTiming, address, contactNumber, price });
        await pg.save();
        res.status(201).json(pg);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPGs = async (req, res) => {
    try {
        const pgs = await PG.find();
        res.status(200).json(pgs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPGById = async (req, res) => {
    try {
        const pg = await PG.findById(req.params.id);
        if (!pg) return res.status(404).json({ message: 'PG not found' });
        res.status(200).json(pg);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePG = async (req, res) => {
    try {
        const { name, capacity, genderAllowed, usersStaying, owner, shortDescription, foodDescription, gateTiming, address, contactNumber, price } = req.body;
        const pg = await PG.findByIdAndUpdate(req.params.id, { name, capacity, genderAllowed, usersStaying, owner, shortDescription, foodDescription, gateTiming, address, contactNumber, price }, { new: true });
        if (!pg) return res.status(404).json({ message: 'PG not found' });
        res.status(200).json(pg);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePG = async (req, res) => {
    try {
        const pg = await PG.findByIdAndDelete(req.params.id);
        if (!pg) return res.status(404).json({ message: 'PG not found' });
        res.status(200).json({ message: 'PG deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
