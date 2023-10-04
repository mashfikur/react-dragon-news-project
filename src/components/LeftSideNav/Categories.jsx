import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {

    const [categories,setCategories]=useState([])

    useEffect( () => {
        fetch("/categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <ul className="space-y-0" >
                {
                    categories.map((category) => <li key={category.id} ><NavLink to={category.id} ><button  className=" w-full btn-ghost btn capitalize justify-start " >{category.name}</button></NavLink></li> )
                }
            </ul>
        </div>
    );
};

export default Categories;