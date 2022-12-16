import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllCategories } from '../api';
import { Food } from "../components/food";
import { Preloader } from "../components/preloder";
import { Search } from "../components/Search";



function Home() {
    const [catalog, setCatalog] = useState( [] );
    const [filteredCatalog, setFilteredCatalog] = useState( [] );

    const navigate = useNavigate();

    const getFiltered = (value) => {
        const filCat = catalog.filter( (el) => el.strCategory.toLowerCase().includes( value.toLowerCase()) );
        if (!filCat.length) {
            setFilteredCatalog( catalog );
        } else setFilteredCatalog( filCat );
        navigate(`/?search=${value}`);
    }

    useEffect( () => {
        console.log('useEffect'); 
        getAllCategories().then( (data) => {
            const strSearch = window.location.href.split("=")[1];
            setCatalog( data.categories );
            if (!strSearch) {
                setFilteredCatalog( data.categories );
            } 
            else {
                const filCat = data.categories.filter( (el) => el.strCategory.toLowerCase().includes( strSearch.toLowerCase()) );
                setFilteredCatalog( filCat );
            } 
        });
    }, [] );

    useEffect( () => {
        console.log("any useEffect");
        const strSearch = window.location.href.split("=")[1];
        if (!strSearch) {
            setFilteredCatalog( catalog );
        } 
    });

    return <>

        <Search cb={getFiltered} />

        <div className="goods">   

            { !filteredCatalog.length ? <Preloader /> : filteredCatalog.map( (foodObj) => {
                return <Food key={foodObj.idCategory} {...foodObj} />
            }) }

        </div>
    </>
}

export { Home };
