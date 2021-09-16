import { useState } from "react"
const ProductsQuery = (props) => {
    const {List} = (props)

    const renderList=()=>{
        let listTemplate=[]
        List.map((prod,i)=>{

            listTemplate.push(<div className="col-4 text-center">
                <span>{prod.Nombre}</span>
            </div>)
        })
        return listTemplate
    }
    return(
        <div className="col-9 products-box">
            {List ? <div className="row"> {renderList()}</div> : <div className="text-center fs-1 text-uppercase">loading</div>}
        </div>
    )
}

export default ProductsQuery