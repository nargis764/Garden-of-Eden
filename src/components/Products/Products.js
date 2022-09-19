import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card"
import styles from "./Products.module.css";


const Products = () => {

    const [rating, setRating] = useState(0);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        // axios.get("./data.json")
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data)
        })
    }, [])


    const handleChange = (e, productFromBelow) => {
        let productsCopy = products.map((product) => {
            if(product === productFromBelow) {
                let productCopy = {...productFromBelow}
                productCopy.rating = e.target.value;
                setRating(e.target.value)
                return productCopy
            } else {
                return product
            }
        })
        
        setProducts(productsCopy)                
}


    return (
        <div className={ styles.products }>
            {
                products.map((product, index) => {
                    return (
                        <Card 
                        key = { product._id }
                        id = { product._id }
                        title = { product.title }
                        description = { product.description }
                        categories = { product.categories }
                        image = { product.image }
                        handleChange = {(e) => handleChange(e, product) }
                        price = { product.price }
                        rating = { product.rating }
                        />
                        
                    )
                })
            }


        </div>
    )
}

export default Products