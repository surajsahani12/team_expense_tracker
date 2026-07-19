import "./App.css";
import { useEffect, useMemo, useState } from "react";

import Summary from "./components/Summary/Summary";
import CategoryPanel from "./components/CategoryPanel/CategoryPanel";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

import {
  getCategories,
  createCategory,
  deleteCategory,
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary,
} from "./api/api";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [summary, setSummary] = useState({});

  const [searchTerm, setSearchTerm] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const loadExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data.expenses);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSummary = async () => {
    try {
      const data = await getSummary();

      setSummary(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCategories();
    loadExpenses();
    loadSummary();
  }, []);


  const handleSaveExpense = async (expense) => {
    try {
      if (editingExpense) {
        await updateExpense(editingExpense.id, expense);
        setEditingExpense(null);
      } else {
        await createExpense(expense);
      }

      await loadExpenses();
      await loadSummary();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  const handleDeleteExpense = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      await deleteExpense(id);

      await loadExpenses();
      await loadSummary();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async (name, monthlyBudget = "") => {
    try {
      await createCategory(name, monthlyBudget);
      await loadCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);
      await loadCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredExpenses = useMemo(() => {
    return expenses?.filter((expense) => {
      const search = searchTerm.toLowerCase();

      return (
        expense.description
          .toLowerCase()
          .includes(search) ||
        expense.category_name
          .toLowerCase()
          .includes(search)
      );
    });
  }, [expenses, searchTerm]);

  return (
    <div className="app">

      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Track and manage your daily expenses</p>
      </header>

      <Summary summary={summary} />

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
        expenses={filteredExpenses}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />

    </div>
  );
};

export default App;