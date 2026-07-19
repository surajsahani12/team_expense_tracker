import "./CategoryPanel.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function CategoryPanel({
    categories,
    onAdd,
    onDelete,
}) {
    const [categoryName, setCategoryName] = useState("");
    const [monthlyBudget, setMonthlyBudget] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = categoryName.trim();

        if (!name) {
            alert("Category name is required.");
            return;
        }

        onAdd(name, monthlyBudget);

        setCategoryName("");
    };
    return (
        <section className="card category-panel">

            <h2>Categories</h2>

            <p>Manage expense categories.</p>

            <form
                className="category-form"
                onSubmit={handleSubmit}
            >
                <input
                    className="input"
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />

                <input
                    className="input"
                    type="number"
                    placeholder="Monthly Budget (₹)"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Category
                </button>
            </form>

            <ul className="category-list">

                {categories.length === 0 ? (

                    <li className="empty-category">
                        No categories available.
                    </li>

                ) : (

                    categories.map((category) => (

                        <li
                            key={category.id}
                            className="category-item"
                        >
                            <span>{category.name}</span>
                            {category.monthly_budget !== null && (
                                <span className="monthly-budget">
                                    ₹{category.monthly_budget}
                                </span>
                            )}
                            <button
                                className="icon-btn delete-btn"
                                onClick={() => onDelete(category.id)}
                            >
                                <FaTrash />
                            </button>


                        </li>

                    ))

                )}

            </ul>

        </section>
    );
}

export default CategoryPanel;