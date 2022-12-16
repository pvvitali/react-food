import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "../components/preloder";
import { MealList } from "../components/MealList";

function Category() {
    const { name } = useParams();
    const [category, setCategory] = useState(null);

    useEffect( () => {
        console.log('useEffect change name category');
        getFilteredCategory(name).then( (data) => {setCategory(data.meals)} );
    }, [name] );

    return <div>
        { !category ? <Preloader /> : <MealList meal={category}/> }
    </div>
}

export { Category };
