function SummaryCard({ title, value, flag }) {
    console.log("SummaryCard props:", { title, value, flag }); // Debugging line
    return (
        <div className={`card summary-card ${flag}`}>
            <h3>{flag === "over-budget" ? "Over Budget" : ""}</h3>
            <p>{title}</p>
            <h2>{value}</h2>
        </div>
    );
}

export default SummaryCard;