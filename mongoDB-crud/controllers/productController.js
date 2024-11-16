const categoryModel = require("../models/category.model");

const categoryController = {
    createCategory: async (req, res) => {
        const body = req.body;
        try {
            const newCategory = await categoryModel.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).send('Error creating category');
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = await categoryModel.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).send('Error fetching categories');
        }
    },

    updateCategory: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedCategory = await categoryModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedCategory);
        } catch (error) {
            res.status(500).send('Error updating category');
        }
    },

    deleteCategory: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedCategory = await categoryModel.findByIdAndDelete(id);
            res.status(200).json(deletedCategory);
        } catch (error) {
            res.status(500).send('Error deleting category');
        }
    }
};

module.exports = categoryController;
