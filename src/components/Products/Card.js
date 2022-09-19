import React, { useState } from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, categories, image, price, rating, handleChange }) => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <div className={isHover? styles.cardBodyOnHover : styles.cardBody} 
        onMouseOver={handleMouseEnter} 
        onMouseOut={handleMouseLeave}>

            {
                isHover ?

                    <Link className={ styles.details } to={`/details/${id}`}>View Details</Link>
                    :
                    <>

                        <img
                            src={image}
                            className={styles.image} />
                        <p className={styles.title}>{title}</p>

                    </>

            }


            {/* <p>{description}</p>
            <p>{categories}</p>
            
            <input
                type="number"
                placeholder=""
                onChange={(e) => handleChange(e, "param")} />
            <p>{price}</p>
            <p>{rating}</p> */}
        </div>
    )
}

export default Card