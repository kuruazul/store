import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect, useCallback } from "react";
import Category from "./queryFilters/Category";
const Filter = (props) => {
    const [Categories,setCategories] = useState([])
    const [ProductList,setProductList] = useState([])
    const [catFilter,setCatFilter] = useState([])
    const {listHandler} =(props)

    const fetchCategories =async()=>{
        let url = "http://192.168.0.3:1337/categorias"
        let raw_data =await fetch(url)
        let data = await raw_data.json()
        setCategories(data)
    }

    const fetchProducts =async()=>{
        let url = "http://192.168.0.3:1337/productos"
        let raw_data =await fetch(url)
        let data = await raw_data.json()
        setProductList(data)
        console.log(data)
        let newProductList = []

        data.map((prod,i)=>{

            newProductList.push(prod)}
        )
        listHandler(newProductList)
    }
    useEffect(()=>{
        fetchCategories()
        fetchProducts()
        
    },[])
    const checkCategories=(cat)=>{
        setCatFilter(cat)
    }
    const rmCategories=(cat)=>{
        setCatFilter(cat)
    }

    const displayCategories =()=>{
        let categoriesFinal = []
        Categories.map((cat,i) =>{
            categoriesFinal.push(
             [<Category Cat={cat} checkCategories={checkCategories} catFilter={catFilter} rmCategories={rmCategories}/>]
            )
        })
        return categoriesFinal
    }
    const searhProducts =()=>{
        console.log(catFilter)
    }

    return(
        <div className="filter-bar col-3 rounded-3 p-0">
                <div className="filter-bar-header">
                    <span>Categorias y màs</span>
                </div>
                <div className="container-fluid p-0 my-0">
                    <div className="row justify-content-between">
                        <div className="w-auto">
                            <span>Categorias</span>
                        </div>
                        <div className="w-auto">
                           <a id="btn-display-categories" className="btn p-0 m-0"> <FontAwesomeIcon className="m-0 p-0" icon={faCaretDown}/></a>
                        </div>
                    </div>
                </div>
                <hr className="p-0 m-0" />
                <div id="categories-filter-data" className="">
                        <div className="row">
                        {displayCategories()}
                        </div>
                    </div>
                    <div className="text-center">
                    <a className="btn btn-secondary"  onClick={searhProducts}>Aplicar</a>
                    </div>
            </div>
    )
}

export default Filter