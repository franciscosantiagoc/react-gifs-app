let historyNameItem = "gifsHistory"
export const getHistory = () => {
    let history = localStorage.getItem(historyNameItem);
    history = history ? JSON.parse(history) : [];
    return history;
}

export const setHistory = (history) => {
    localStorage.setItem(historyNameItem, JSON.stringify(history));
}

export const addItemToHistory = (item) => {
    let history = getHistory();
    if(history.includes(item)) {
        history = history.filter(itemHistory => itemHistory != item);
    }
    history= [
        ...history,
        item
    ];
    
    setHistory(history);
    return history;
}

export const removeItemToHistory = (item) => {
    let history = getHistory();
    history = history.filter(category => category != item);
    
    setHistory(history);
    return history;
}