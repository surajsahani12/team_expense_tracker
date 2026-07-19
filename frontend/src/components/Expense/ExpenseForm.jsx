import "./ExpenseForm.css";
import { useState, useEffect } from "react";

const initialForm = {
    amount: "",
    description: "",
    category_id: "",
    date: "",
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
                date: editingExpense.date?.split("T")[0] || editingExpense.date,
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

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.amount ||
            !formData.description ||
            !formData.category_id ||
            !formData.date
        ) {
            alert("Please fill all fields.");
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
                            type="date"
                            name="date"
                            value={formData.date}
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