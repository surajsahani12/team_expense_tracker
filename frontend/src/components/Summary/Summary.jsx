import "./Summary.css";
import SummaryCard from "./SummaryCard";

const Summary = () => {
    return (
        <section className="summary">

            <SummaryCard
                title="Total Expenses"
                value="12,500"
                prefix="₹"
            />

            <SummaryCard
                title="Transactions"
                value="48"
            />


            <SummaryCard
                title="Average Expense"
                value="260"
                prefix="₹"
            />


        </section>
    );
}

export default Summary;