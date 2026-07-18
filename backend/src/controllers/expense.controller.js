const db = require("../config/db");

const getExpenses = async (req, res) => {
    try {
        const result = await db.query(
          "SELECT e.*, c.name AS category_name FROM expenses e JOIN categories c ON e.category_id = c.id ORDER BY e.expense_date DESC"
        );

        res.status(200).json({ message: "Expenses retrieved successfully", expenses: result.rows });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const createExpense = async (req, res) => {
    try {

        const {
            amount,
            description,
            category_id,
            expense_date
        } = req.body;

        if (
            !amount ||
            !description ||
            !category_id ||
            !expense_date
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const result = await db.query(
            `INSERT INTO expenses
            (amount, description, category_id, expense_date)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [
                amount,
                description,
                category_id,
                expense_date
            ]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const updateExpense = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            amount,
            description,
            category_id,
            expense_date
        } = req.body;

        const result = await db.query(
            `UPDATE expenses
             SET amount = $1,
                 description = $2,
                 category_id = $3,
                 expense_date = $4
             WHERE id = $5
             RETURNING *`,
            [
                amount,
                description,
                category_id,
                expense_date,
                id
            ]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({ message: "Expense updated successfully", expense: result.rows[0] });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const deleteExpense = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await db.query(
            "DELETE FROM expenses WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
};