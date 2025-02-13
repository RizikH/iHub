const Idea = require('../models/Idea');

// GET /api/ideas
const getAllIdeas = async (req, res) => {
    try {
        const ideas = await Idea.getAllIdeas();
        res.json(ideas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST /api/ideas
const createIdea = async (req, res) => {
    try {
        const newIdea = await Idea.createIdea(req.body);
        res.status(201).json(newIdea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET /api/ideas/:id
const getIdeaById = async (req, res) => {
    try {
        const idea = await Idea.getIdeaById(req.params.id);
        if (idea) {
            res.json(idea);
        } else {
            res.status(404).json({ message: 'Idea not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT /api/ideas/:id
const updateIdea = async (req, res) => {
    try {
        const updatedIdea = await Idea.updateIdea(req.params.id, req.body);
        if (updatedIdea) {
            res.json(updatedIdea);
        } else {
            res.status(404).json({ message: 'Idea not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE /api/ideas/:id
const deleteIdea = async (req, res) => {
    try {
        const deletedIdea = await Idea.deleteIdea(req.params.id);
        if (deletedIdea) {
            res.json({ message: 'Idea deleted' });
        } else {
            res.status(404).json({ message: 'Idea not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllIdeas,
    createIdea,
    getIdeaById,
    updateIdea,
    deleteIdea
};