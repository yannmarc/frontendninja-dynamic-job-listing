import { createContext, useState } from "react"

const FilterContext = createContext();
const UpdateFilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filterValue, setFilterValue] = useState([]);


    return (
        <FilterContext.Provider value={filterValue}>
            <UpdateFilterContext.Provider value={setFilterValue}>
                {children}
            </UpdateFilterContext.Provider>
        </FilterContext.Provider>
    )
}