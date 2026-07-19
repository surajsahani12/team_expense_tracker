const BASE_URL = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return await response.json();
};

export const createCategory = async (name) => {
    const response = await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });

    if (!response.ok) {
        throw new Error("Failed to create category");
    }

    return await response.json();
};

export const deleteCategory = async (id) => {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete category");
    }

    return await response.json();
};

export const getExpenses = async () => {
    const response = await fetch(`${BASE_URL}/expenses`);

    if (!response.ok) {
        throw new Error("Failed to fetch expenses");
    }

    return await response.json();
};

export const createExpense = async (expense) => {
    const response = await fetch(`${BASE_URL}/expenses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
    });

    if (!response.ok) {
        throw new Error("Failed to create expense");
    }

    return await response.json();
};

export const updateExpense = async (id, expense) => {
    const response = await fetch(`${BASE_URL}/expenses/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
    });

    if (!response.ok) {
        throw new Error("Failed to update expense");
    }

    return await response.json();
};

export const deleteExpense = async (id) => {
    const response = await fetch(`${BASE_URL}/expenses/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete expense");
    }

    return await response.json();
};

export const getSummary = async () => {
    const response = await fetch(`${BASE_URL}/summary`);

    if (!response.ok) {
        throw new Error("Failed to fetch summary");
    }

    return await response.json();
};