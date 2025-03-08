import { useState } from "react"
import { CategorySearch } from "./Components/CategorySearch";
import { getHistory } from "./utils/Functions";
import { CategoryHistory } from "./Components/CategoryHistory";

export const GifExpertsApp = () => {
    const initialHistory = getHistory();

    const [categories, setCategories] = useState(initialHistory);
    
  return (
    <>  
        <header>
            <h1>GifExpertsApp</h1>
        </header>
        <div className="row">
            <div className="col-3">
                <CategoryHistory categories={categories} setCategories={setCategories}/>
            </div>
            <div className="col-9">
                <CategorySearch setCategories={setCategories}/>
            </div>
        </div>
    </>
  )
}
