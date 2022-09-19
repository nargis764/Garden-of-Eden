import React,{ useState, useEffect } from 'react';
import axios from "axios";
import styles from "./ProductDetails.module.css";
import { Link, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
    }, [])

    const handleClick = () => {
        setShowDetails(!showDetails);
    }


    return (
        <div className={styles.productDetailsContainer}>
            <Link to="/" style={{ textAlign:"left" }}>Home</Link>
            <span>&gt;</span>
            <Link>{product.categories}</Link>
            <span>&gt;</span>
            <Link>{product.title}</Link>
            <div className={styles.productContainer}>
                <div>
                    <img src={product.image} alt="Product Image" height="500" width="500" />
                </div>

                <div className={styles.productDetails}>
                    {/* <p>{product.categories}</p> */}
                    <h1 style={{ color: "Green" }}>{product.title}</h1>
                    <h2>{product.price}</h2>
                    {/* <p>{product.description}</p> */}

                    <div>

                    <div style={{ display:"flex", justifyContent:"space-between" }}>
                        <p>Product Details</p>
                        <p style={{ cursor:"pointer" }} onClick={handleClick}> { showDetails? "-" : "+" }</p>
                    </div>

                    { showDetails? <p style={{ color: "gray" }}>{product.description}</p> : ""} 
                    </div>
                    
                    
                    <button>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails