const todoKey = "reactTodo";

export const getLocalStorageToDoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    try {
        return rawTodos ? JSON.parse(rawTodos) : [];
    } catch (error) {
        console.error("Failed to parse JSON from localStorage:", error);
        return [];
    }
};

export const setLocalStorageToDoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
};
