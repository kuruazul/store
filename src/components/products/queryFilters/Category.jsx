import { useState, Fragment } from "react"

const Categories = (props) => {
    const {Cat,checkCategories,catFilter,rmCategories} = (props)
    const [State,setState] = useState(false)
    const addCatFilter=()=>{
        let checkCat = catFilter
        checkCat.push(Cat)
        checkCategories(checkCat)
        setState(true)
    }
    const rmCatFilter=()=>{
        let temCats = catFilter
        let newCatFilter =[]
        console.log(temCats)
        temCats.map((cat,i)=> {
            if(cat.Nombre !== Cat.Nombre){
                console.log(cat.Nombre)
                newCatFilter.push(cat)
            }
        })
        rmCategories(newCatFilter)
        setState(false)
        
    }
    const checkState = ()=>{
        if(!State)
            addCatFilter()
        else    
            rmCatFilter()
    }
    return(
        <Fragment>
        <div className=" text-start">
            <a className="text-decoration-none" > <input type="checkbox" onClick={checkState}/>{Cat.Nombre}</a>
        </div>
        </Fragment>
    )
}

export default Categories