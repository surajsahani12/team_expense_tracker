import "./ExpenseForm.css";
import { useState, useEffect } from "react";

const initialForm = {
    amount: "",
    description: "",
    category_id: "",
    expense_date: "",
};

function ExpenseForm({
    categories,
    editingExpense,
    onSubmit,
}) {

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {

        if (editingExpense) {

            setFormData({
                amount: editingExpense.amount,
                description: editingExpense.description,
                category_id: editingExpense.category_id,
                expense_date: editingExpense.expense_date?.split("T")[0] || editingExpense.expense_date,
            });

        } else {

            setFormData(initialForm);

        }

    }, [editingExpense]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const validateForm = () => {
        if (!formData.amount || Number(formData.amount) <= 0) {
            alert("Amount must be greater than 0.");
            return false;
        }

        if (!formData.description.trim()) {
            alert("Description is required.");
            return false;
        }

        if (!formData.category_id) {
            alert("Please select a category.");
            return false;
        }

        if (!formData.expense_date) {
            alert("Please select a date.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onSubmit(formData);

        if (!editingExpense) {
            setFormData(initialForm);
        }
    };

    return (
        <section className="card expense-form-card">

            <h2>
                {editingExpense ? "Edit Expense" : "Add Expense"}
            </h2>

            <p>
                {editingExpense
                    ? "Update your expense."
                    : "Record a new expense."}
            </p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Amount</label>

                    <input
                        className="input"
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="₹0.00"
                    />

                </div>

                <div className="form-group">

                    <label>Description</label>

                    <input
                        className="input"
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Lunch with friends"
                    />

                </div>

                <div className="row">

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            className="input"
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Category
                            </option>

                            {categories.map((category) => (

                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Date</label>

                        <input
                            className="input"
                            max={new Date().toISOString().split("T")[0]}
                            type="date"
                            name="expense_date"
                            value={formData.expense_date}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    {editingExpense
                        ? "Update Expense"
                        : "Save Expense"}
                </button>

            </form>

        </section>
    );
}

export default ExpenseForm;