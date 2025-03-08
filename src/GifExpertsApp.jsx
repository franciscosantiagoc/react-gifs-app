import { useState } from "react"
import { SearchCategory } from "./Components/SearchCategory";

export const GifExpertsApp = () => {

    const [categories, setCategories] = useState([]);
  return (
    <>  
        <header>
            <h1>GifExpertsApp</h1>
        </header>
        <div className="row">
            <div className="col-3">

            </div>
            <div className="col-9">
                <SearchCategory />
            </div>
        </div>
    </>
  )
}