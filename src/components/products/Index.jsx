import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../js/catDisplayBtn.js';
import { useState,useEffect } from "react";
const Index = () => {
    const [Categories,setCategories] = useState([])
    const fetchCategories =async()=>{
        let url = "http://localhost:1337/categorias"
        let raw_data =await fetch(url)
        let data = await raw_data.json()
        setCategories(data)
    }
    useEffect(()=>{
        fetchCategories()
    },[])
    const displayCategories =()=>{
        let categoriesFinal = []
        Categories.map((cat,i) =>{
            categoriesFinal.push(
                <div className="col-6">
                    <span>{cat.Nombre}</span>
                </div>
            )
        })
        return categoriesFinal
    }
    return(
        <div className="mt-5">
            <div>
            <div className="filter-bar col-3 rounded-3">
                <div className="filter-bar-header">
                    <span>Categorias y màs</span>
                </div>
                <div className="container-fluid  my-3">
                    <div className="row justify-content-between">
                        <div className="w-auto">
                            <span>Categorias</span>
                        </div>
                        <div className="w-auto">
                           <a id="btn-display-categories" className="btn p-0 m-0"> <FontAwesomeIcon icon={faCaretDown}/></a>
                        </div>
                        <hr className="p-0 m-0" />
                    </div>
                    <div id="categories-filter-data">
                        <div className="row">
                        {displayCategories()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-9 products-box"></div>
            </div>
        </div>
    )
    
}

export default Index