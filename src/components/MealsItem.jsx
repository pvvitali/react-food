import { Link } from "react-router-dom";

function MealsItem(props) {
    const {strMeal, strMealThumb, idMeal} = props;

    return (
        <div className="card" id={idMeal}>
            <div className="card-image">
                <img src={strMealThumb} alt="img" />

            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
                <p>Description: {strMeal.slice(0, 50)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn" >Watch resipe</Link>
            </div>
        </div>
    );
    
}

export { MealsItem };