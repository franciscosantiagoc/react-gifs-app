import { useState } from "react"
import { SearchCategory } from "./Components/SearchCategory";
import { getHistory } from "./utils/Functions";

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

            </div>
            <div className="col-9">
                <SearchCategory setCategories={setCategories}/>
            </div>
        </div>
    </>
  )
}
