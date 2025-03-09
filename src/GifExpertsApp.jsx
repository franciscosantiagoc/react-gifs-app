import { useState, useEffect } from "react";
import { CategorySearch } from "./Components/CategorySearch";
import { getHistory, addItemToHistory, removeItemToHistory } from "./utils/Functions";
import { CategoryHistory } from "./Components/CategoryHistory";

export const GifExpertsApp = () => {
  const initialHistory = getHistory();
  const [categories, setCategories] = useState(initialHistory);

  const handleSearch = (value) => {
    let items = addItemToHistory(value);
    setCategories(items);
  };

  const handleDeleteItem = (category) => {
    setCategories(removeItemToHistory(category));
  };

  const fetchInfo = async (textToFind) => {};

  const getLatesSearchedCategory = () => {
    if (categories.length > 0) {
      let lastItem = categories[categories.length - 1];
      fetchInfo(lastItem);
    }
  };

  useEffect(() => {
    getLatesSearchedCategory();
  }, []);

  return (
    <>
      <header>
        <h1>GifExpertsApp</h1>
      </header>
      <div className="row">
        <div className="col-3">
          <CategoryHistory
            categories={categories}
            handleSearch={handleSearch}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
        <div className="col-9">
          <CategorySearch handleSearch={handleSearch} />
        </div>
      </div>
    </>
  );
};
