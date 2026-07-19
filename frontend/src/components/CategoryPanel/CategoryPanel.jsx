import "./CategoryPanel.css";
import { FaTrash } from 'react-icons/fa'
function CategoryPanel() {
    return (
        <section className="card">

            <h2>Categories</h2>

            <div className="category-list">

                <div className="category-item">
                    <span>Food</span>
                    <span><FaTrash /></span>
                </div>

                <div className="category-item">
                    <span>Travel</span>
                    <span><FaTrash /></span>
                </div>

                <div className="category-item">
                    <span>Bills</span>
                    <span><FaTrash /></span>
                </div>

            </div>

            <div className="add-category">

                <input
                    placeholder="New category"
                    className="input"
                />

                <button className="btn">
                    Add
                </button>

            </div>

        </section>
    );
}

export default CategoryPanel;