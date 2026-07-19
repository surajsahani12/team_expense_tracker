import "./Summary.css";
import SummaryCard from "./SummaryCard";

function Summary({ summary }) {
    return (
        <section className="summary">

            {/* <div >
                <SummaryCard
                    title="Total Expenses"
                    value={`₹${summary.totalExpenses || 0}`}
                />
            </div> */}


            {/* <SummaryCard
                title="Transactions"
                value={summary.totalTransactions || 0}
            /> */}

            {summary.categoryWise?.map((category, index) => (

                <SummaryCard
                    key={index}
                    title={category.name}
                    value={`₹${category.total || 0}`}
                    flag={category.monthly_budget !== null && Number(category.total) > Number(category.monthly_budget) ? "over-budget" : ""}
                />

            ))}

        </section>
    );
}

export default Summary;