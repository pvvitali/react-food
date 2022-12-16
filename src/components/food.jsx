import { Link} from "react-router-dom";

function Food(props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;

    return ( <>
            
            <div className="card" id={idCategory}>
                <div className="card-image">
                    <img src={strCategoryThumb} alt="img" />

                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <p>Description: {strCategoryDescription.slice(0, 50)}...</p>
                </div>
                <div className="card-action">
                    <Link to={`/category/${strCategory}`} className="btn" >Show category</Link>
                </div>
            </div>
    </>


    );
}

export { Food };