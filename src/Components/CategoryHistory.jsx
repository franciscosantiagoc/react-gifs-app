import { FaBan } from "react-icons/fa6";
import './../assets/categoryHistory.css';
import { addItemToHistory, removeItemToHistory } from "../utils/Functions";

export const CategoryHistory = ({ categories, setCategories }) => {
    const handleResearch = (category) => {
        console.log('handleResearch')
        setCategories(addItemToHistory(category));
    };

    const handleDelete = (category) => {
        console.log('handleDelete')
        setCategories(removeItemToHistory(category))
    }
    return (
        <div className="category-history">
            <h4>Historial de búsqueda</h4>
            {categories.length > 0 && (
                <ul>
                    {
                        categories.map((category, index) => (
                            <li className='card-history' key={index}>
                                <span onClick={() => handleResearch(category)}
                                    data-bs-toggle="tooltip" data-bs-placement="right"
                                    title={`Buscar '${category}'`}>{category}</span>
                                <button onClick={() => handleDelete(category)}
                                    data-bs-toggle="tooltip" data-bs-placement="right"
                                    title={`Eliminar '${category}' del historial`}>
                                    <FaBan />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
            }

        </div>
    )
}
