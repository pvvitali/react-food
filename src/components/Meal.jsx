import { getMealById } from "../api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "./preloder";

function Meal() {
    const { id } = useParams();
    const [ meal, setMeal] = useState( null );
    const navigate = useNavigate();

    useEffect( () => {
        getMealById(id).then( (el) => {setMeal(el.meals[0]); console.log("setMeal !")}  );
    }, [id] );


    return  <>
            { !meal ? <Preloader /> : 
                <div className="card">
                    <div className="card-image">
                        <img src={ meal.strMealThumb } alt="img" />

                    </div>
                    <div className="card-content">
                        <span className="card-title">{meal.strMeal}</span>
                        <p>Instructons: {meal.strInstructions}</p>
                    </div>
                    <div className="card-action">
                        <button onClick={() => navigate(-1)} className="btn" >Back</button>
                    </div> 
                </div>
            }
    </>


}

export { Meal };