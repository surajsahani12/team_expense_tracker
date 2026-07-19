import "./ExpenseTable.css";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

function ExpenseTable({
    expenses,
    searchTerm,
    setSearchTerm,
    onEdit,
    onDelete
}) {
    return (
        <section className="card expense-table">

            <div className="table-header">

                <div>
                    <h2>Recent Expenses</h2>
                    <p>Track and manage your transactions</p>
                </div>

                <div className="search-box">
                    <FaSearch className="search-icon" />

                    <input
                        className="input"
                        type="text"
                        placeholder="Search expenses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

            </div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Date</th>

                            <th>Description</th>

                            <th>Category</th>

                            <th className="amount-column">Amount</th>

                            <th className="actions-column">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {expenses.length === 0 ? (

                            <tr>
                                <td colSpan="5" className="empty-state">
                                    No expenses found.
                                </td>
                            </tr>

                        ) : (

                            expenses.map((expense) => (

                                <tr key={expense.id}>

                                    <td>{new Date(expense.date).toLocaleDateString("en-IN")}</td>

                                    <td>{expense.description}</td>

                                    <td>{expense.category_name}</td>

                                    <td className="amount-column">
                                        ₹{expense.amount}
                                    </td>

                                    <td className="actions">

                                        <button
                                            className="icon-btn edit-btn"
                                            onClick={() => onEdit(expense)}
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            className="icon-btn delete-btn"
                                            onClick={() => onDelete(expense.id)}
                                        >
                                            <FaTrash />
                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </section>
    );
}

export default ExpenseTable;