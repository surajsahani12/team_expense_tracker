const db = require("../config/db");

const getSummary = async (req, res) => {
    try {

        const totalExpense = await db.query(
            `SELECT COALESCE(SUM(amount), 0) AS total_expenses
             FROM expenses`
        );

        const totalTransactions = await db.query(
            `SELECT COUNT(*) AS total_transactions
             FROM expenses`
        );

        const categoryWise = await db.query(
            `SELECT
                c.name,
                SUM(e.amount) AS total
             FROM expenses e
             JOIN categories c
             ON e.category_id = c.id
             GROUP BY c.name
             ORDER BY total DESC`
        );

        res.status(200).json({
            totalExpenses: totalExpense.rows[0].total_expenses,
            totalTransactions: totalTransactions.rows[0].total_transactions,
            categoryWise: categoryWise.rows
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }
};

module.exports = {
    getSummary
};