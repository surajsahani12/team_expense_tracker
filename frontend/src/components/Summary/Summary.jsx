import "./Summary.css";
import SummaryCard from "./SummaryCard";

function Summary({ summary }) {
    return (
        <section className="summary">

            <SummaryCard
                title="Total Expenses"
                value={`₹${summary.totalExpenses || 0}`}
            />

            <SummaryCard
                title="Transactions"
                value={summary.totalTransactions || 0}
            />

            <SummaryCard
                title="Average Expense"
                value={`₹${summary.averageExpense || 0}`}
            />

        </section>
    );
}

export default Summary;