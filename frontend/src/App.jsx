import "./App.css";
import { useState } from "react";

import Summary from "./components/Summary/Summary";
import CategoryPanel from "./components/CategoryPanel/CategoryPanel";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([{ id: 1, name: "Food" },
  { id: 2, name: "Travel" },]);
  const [summary, setSummary] = useState({
    totalExpenses: 12500,
    totalTransactions: 25,
    averageExpense: 500,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);

  const handleSaveExpense = async (expenseData) => {
    console.log(expenseData);

    // POST / PUT API later
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  const handleDeleteExpense = async (id) => {
    console.log(id);

    // DELETE API later
  };

  const handleAddCategory = async (categoryName) => {
    console.log(categoryName);

    // POST API later
  };

  const handleDeleteCategory = async (id) => {
    console.log(id);

    // DELETE API later
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Track and manage your daily expenses</p>
      </header>

      <Summary
        summary={summary}
      />

      <section className="content">

        <ExpenseForm
          categories={categories}
          editingExpense={editingExpense}
          onSubmit={handleSaveExpense}
        />

        <CategoryPanel
          categories={categories}
          onAdd={handleAddCategory}
          onDelete={handleDeleteCategory}
        />

      </section>

      <ExpenseTable
        expenses={expenses}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />

    </div>
  );
};

export default App;