import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect, useCallback } from "react";
import Category from "./queryFilters/Category";
import Brand from "./queryFilters/Brand";
const Filter = (props) => {
    const [Categories,setCategories] = useState([])
    const [Brands,setBrands] = useState([])
    const [ProductList,setProductList] = useState([])
    const [catFilter,setCatFilter] = useState([])
    const [brandFilter,setBrandFilter] = useState([])
    const {listHandler} =(props)

    const fetchCategories =async()=>{
        let url = "http://192.168.0.3:1337/categorias"
        let raw_data =await fetch(url)
        let data = await raw_data.json()
        setCategories(data)
    }
    const fetchBrands =async()=>{
        let url = "http://192.168.0.3:1337/marcas"
        let raw_data =await fetch(url)
        let data = await raw_data.json()
        setBrands(data)
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
        fetchBrands()
        
    },[])
    const checkCategories=(cat)=>{
        setCatFilter(cat)
    }
    const rmCategories=(cat)=>{
        setCatFilter(cat)
    }
    const checkBrands=(brand)=>{
        setBrandFilter(brand)
    }
    const rmBrands=(brand)=>{
        setBrandFilter(brand)
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
    const displayBrands =()=>{
        let brandsFinal = []
        Brands.map((brand,i) =>{
            brandsFinal.push(
             [<Brand Brand={brand} checkBrands={checkBrands} brandFilter={brandFilter} rmBrands={rmBrands}/>]
            )
        })
        return brandsFinal
    }
    const searhProducts =()=>{
        console.log(catFilter,brandFilter)
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

                <div className="container-fluid p-0 my-0">
                    <div className="row justify-content-between">
                        <div className="w-auto">
                            <span>Marcas</span>
                        </div>
                        <div className="w-auto">
                           <a id="btn-display-brands" className="btn p-0 m-0"> <FontAwesomeIcon className="m-0 p-0" icon={faCaretDown}/></a>
                        </div>
                    </div>
                </div>
                <div id="brands-filter-data" className="">
                    <div className="row">
                    {displayBrands()}
                    </div>
                </div>
                    <div className="text-center">
                    <a className="btn btn-secondary"  onClick={searhProducts}>Aplicar</a>
                    </div>
            </div>
    )
}

export default Filter