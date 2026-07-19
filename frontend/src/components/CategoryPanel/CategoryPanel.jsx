import "./CategoryPanel.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function CategoryPanel({
    categories,
    onAdd,
    onDelete,
}) {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = categoryName.trim();

        if (!name) {
            alert("Category name is required.");
            return;
        }

        onAdd(name);

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
                    placeholder="New category"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Add
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