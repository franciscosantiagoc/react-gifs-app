let historyNameItem = "gifsHistory"
export const getHistory = () => {
    let history = localStorage.getItem(historyNameItem);
    history = history ? JSON.parse(history) : [];
}