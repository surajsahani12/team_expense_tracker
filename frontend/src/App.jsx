import "./App.css";
import { useState } from "react";
import Summary from "./components/Summary/Summary";
import CategoryPanel from "./components/CategoryPanel/CategoryPanel";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  const handleDeleteExpense = async (id) => {
    // later call API
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Track and manage your daily expenses</p>
      </header>

      <Summary />

      <section className="content">

        <ExpenseForm />

        <CategoryPanel />

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
}

export default App;