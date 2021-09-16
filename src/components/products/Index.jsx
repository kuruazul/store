
import '../../js/catDisplayBtn.js';
import { useState } from "react";

import Filter from './Filter'
import ProductsQuery from './ProductsQuery.jsx';
const Index = () => {
    let [currentProductList,setCurrentProductList] = useState([])

    const listHandler =(list)=>{
        setCurrentProductList(list)
    }
    return(
        <div className=" product-display container-fluid">
            <div className="row">
            <Filter listHandler={listHandler}/>
            <ProductsQuery List={currentProductList}/>
            </div>
        </div>
    )
    
}

export default Index