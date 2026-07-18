const db = require("../config/db");

const getCategories = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM categories ORDER BY id ASC"
        );

        res.status(200).json({ message: "Categories retrieved successfully", categories: result.rows });
    } catch (error) {
        console.error("Get Categories Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required",
            });
        }

        const result = await db.query(
            `INSERT INTO categories (name)
             VALUES ($1)
             RETURNING *`,
            [name]
        );

        res.status(201).json({
            message: "Category created successfully",
            category: result.rows[0],
        });
    } catch (error) {
        console.error("Create Category Error:", error);

        if (error.code === "23505") {
            return res.status(409).json({
                message: "Category already exists",
            });
        }

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            "DELETE FROM categories WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        res.status(200).json({
            message: "Category deleted successfully",
            category: result.rows[0],
        });
    } catch (error) {
        console.error("Delete Category Error:", error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    getCategories,
    createCategory,
    deleteCategory,
};