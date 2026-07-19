import "./ExpenseForm.css";

function ExpenseForm() {
    return (
        <section className="card expense-form-card">

            <h2>Add New Expense</h2>
            <p>Record your daily spending</p>

            <form>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        className="input"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="What did you spend on?"
                        className="input"
                    />
                </div>

                <div className="form-row">

                    <div className="form-group">
                        <label>Category</label>

                        <select className="input">
                            <option>Select Category</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label>Date</label>

                        <input type="date" className="input" />

                    </div>

                </div>

                <button type="submit" className="btn btn-primary">
                    Save Expense
                </button>

            </form>

        </section>
    );
}

export default ExpenseForm;