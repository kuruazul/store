import { useEffect,useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Categories = () => {
    const [Categories,setCategories] = useState([])

    const fetchCategories = async()=>{
        let url = "http://192.168.0.3:1337/categorias";      
        let raw_data = await fetch(url)
        let data = await raw_data.json()  
        console.log(data)
        setCategories(data)
    }
    useEffect(()=>{
        fetchCategories()
    },[])
    const disCategories =()=>{
        let categories =[]
        Categories.map((cat,i) =>{
            categories.push(
                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white">
                            <span>{cat.Nombre}</span>
                        </div>
                    </div>
                    {cat.Image != null ?
                    <img class="img-fluid h-100 w-100" src={"http://192.168.0.3:1337"+cat.Image.url } alt="..." /> :
                    <img class="img-fluid h-100 w-100" src={""} alt="..." /> 
                    }
                </div>
            </div>
            
            )
        })
        return categories
    }
    return(
        <section class="page-section portfolio" id="categories">
        <div class="container">
            
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Categories</h2>
            
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                
                <div class="divider-custom-line"></div>
            </div>
            
            <div class="row justify-content-center">
                {disCategories()}
            </div>
        </div>
    </section>
    )
}

export default Categories