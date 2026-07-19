const SummaryCard = ({ title, value, prefix = "" }) => {
    return (
        <div className="card summary-card">
            <p>{title}</p>
            <h2>{value}  {prefix}</h2>

        </div>
    );
}

export default SummaryCard;