import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState([false]);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    
    const filterProduct=(cat)=>{
        const updatedList=data.filter((x)=>x.category ===cat);
        setFilter(updatedList)
    }
        
    
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-3 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All Categories</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                </div>
                {filter.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4"key={Product.id}>
                                    <img src={Product.image} class="card-img-top" alt={Product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{Product.title}</h5>
                                        <p class="card-text lead fw-bold">${Product.price}</p>
                                        <NavLink to={`/products/${Product.id}`}class="btn btn-outline-primary">GO TO ITEM</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-4 py-4">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h1 className="display-4 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {<ShowProducts />}
               
            </div>
        </div>
    );
    }
export default Products;