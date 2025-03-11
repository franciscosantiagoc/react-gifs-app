import { useState, useEffect } from "react";
import { CategorySearch } from "./Components/CategorySearch";
import {
  getHistory,
  addItemToHistory,
  removeItemToHistory,
} from "./utils/historyFunctions";
import { CategoryHistory } from "./Components/CategoryHistory";
import { CategoryListGrid } from "./Components/CategoryListGrid";

export const GifExpertsApp = () => {
  const initialHistory = getHistory();
  const [categories, setCategories] = useState(initialHistory);
  const [searches, setSearches] = useState([]);

  const handleSearch = (value) => {
    let items = addItemToHistory(value);
    setCategories(items);
    let newSearches = searches.filter(item=>item!=value);
    setSearches([value, ...newSearches]);
  };

  const handleDeleteItem = (category) => {
    setCategories(removeItemToHistory(category));
  };


  const getLatesSearchedCategory = () => {
    if (categories.length > 0) {
      let lastItem = categories[categories.length - 1];
      setSearches([...searches, lastItem]);
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
      
      <main>
        <div className="row gifs-container">
            <div className="col-3">
            <CategoryHistory
                categories={categories}
                handleSearch={handleSearch}
                handleDeleteItem={handleDeleteItem}
            />
            </div>
            <div className="col-9">
            <CategorySearch handleSearch={handleSearch} />
            <div className="container">
                {
                    searches.length >0 && searches.reverse().map((search) => (
                        <CategoryListGrid key={search} category={search} />
                    ))
                }
            </div>
            </div>
        </div>
      </main>
    </>
  );
};
