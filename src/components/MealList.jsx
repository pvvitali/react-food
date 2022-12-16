import { MealsItem } from "./MealsItem";
import { useNavigate } from "react-router-dom";

function MealList(props) {
    const {meal} = props;

    const navigate = useNavigate();

    return <>
        <div><button className="btn" onClick={ () => navigate(-1)}>Back</button></div>
        <div className="goods">
            {meal.map( (el) => <MealsItem key={el.idMeal} {...el} />)}
        </div>
    </> 
}

export {MealList};

