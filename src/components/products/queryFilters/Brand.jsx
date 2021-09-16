import { useState,Fragment } from "react"
const Brand = (props) => {
    const {Brand,checkBrands,brandFilter,rmBrands} = (props)
    const [State,setState] = useState(false)
    const addBrandFilter=()=>{
        let checkBrand = brandFilter
        checkBrand.push(Brand)
        checkBrands(checkBrand)
        setState(true)
    }
    const rmBrandFilter=()=>{
        let temBrands = brandFilter
        let newBrandFilter =[]
        console.log(temBrands)
        temBrands.map((brand,i)=> {
            if(brand.Nombre !== Brand.Nombre){
                console.log(brand.Nombre)
                newBrandFilter.push(brand)
            }
        })
        rmBrands(newBrandFilter)
        setState(false)
        
    }
    const checkState = ()=>{
        if(!State)
            addBrandFilter()
        else    
            rmBrandFilter()
    }
    return(
        <Fragment>
        <div className=" text-start">
            <a className="text-decoration-none" > <input type="checkbox" onClick={checkState}/>{Brand.Nombre}</a>
        </div>
        </Fragment>
    )
}

export default Brand