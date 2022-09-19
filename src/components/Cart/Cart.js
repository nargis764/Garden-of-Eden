import React from 'react'
import styles from "./Cart.module.css";


const Cart = () => {
    return (
        <div className = { styles.cartContainer }>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className = { styles.shoppingCart }>
                    <h2 className={ styles.shoppingCartTitle }>Your Shopping Basket (2 items)</h2>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start", 
                        gap: "30px"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "30px"
                        }}>
                            <img src="https://i.postimg.cc/7hGT6kkt/persimmon-tree.jpg"
                                className = { styles.cartImage } />

                            <div style={{ padding: "0 20px", textAlign: "left" }} >
                                <p>Persimmon tree</p>
                                <p>Qty: 1</p>
                                <p>Price: $10</p>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "20px"
                                }}>
                                    <button className={ styles.cartButton }>Edit</button>
                                    <button className={ styles.cartButton }>Save for later</button>
                                </div>
                            </div>


                        </div>
                        <p style={{ cursor: "pointer" }}>x</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}>
                            <img src="https://i.postimg.cc/d388qFvR/IMG-7846.jpg"
                                className = { styles.cartImage } />

                            <div style={{ padding: "0 20px", textAlign: "left" }} >
                                {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}> */}
                                <p>Iris</p>

                                {/* </div> */}

                                <p>Qty: 1</p>
                                <p>Price: $10</p>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                                    <button className={ styles.cartButton }>Edit</button>
                                    <button className={ styles.cartButton }>Save for later</button>
                                </div>
                            </div>

                        </div>

                        <p style={{ cursor: "pointer" }}>x</p>
                    </div>
                </div>


                <div className={ styles.orderSummaryContainer }>
                    <h2 style={{ color: "#3F762C", }}>Order summary</h2>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Subtotal</p>
                            <p>$60</p>
                        </div>

                        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Shipping</p>
                            <p>$10</p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Tax</p>
                            <p>$10</p>
                        </div> */}

                        <div style={{ display: "flex", justifyContent: "space-between", color: "#808080", }}>
                            <p>Order Subtotal</p>
                            <p>$60</p>
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "10px"
                    }}>
                        <button className={ `${styles.orderSummaryButton} ${styles.marginBottom}`}>
                            Continue Shopping
                        </button>
                        <button className={ styles.orderSummaryButton }>
                            Checkout
                        </button>
                    </div>

                </div>
            </div>

            <div style={{ width: "1100px", height: "1px", background: "#808000", margin: "50px auto 30px", }}></div>
            {/* saved for later section */}
            <div>
                <h2 style={{ color: "#3F762C", marginBottom: "50px" }}>Saved for later (2 items)</h2>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "30px" }}>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}>
                            <img src="https://i.postimg.cc/7PSdWT7c/Rose-of-sharon.jpg"
                                className = { styles.cartImage } />
                            <div>

                                <p style={{ marginBottom: "60px", textAlign: "left" }}>Rose of Sharon</p>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                    <button className={ styles.cartButton }>Move to cart</button>
                                    <button className={ styles.cartButton }>Remove</button>
                                </div>
                            </div>
                        </div>

                        <p style={{ width: "20%" }}>$20</p>
                    </div>

                    <div style={{ width: "1100px", height: "1px", background: "#808080", margin: "50px auto 30px", }}></div>


                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}>
                            <img src="https://i.postimg.cc/KYtdLkZt/Passion-fruit.jpg"
                                className = { styles.cartImage } />
                            <div>

                                <p style={{ marginBottom: "60px", textAlign: "left" }}>Passion Fruit</p>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                    <button className={ styles.cartButton }>Move to cart</button>
                                    <button className={ styles.cartButton }>Remove</button>
                                </div>
                            </div>
                        </div>

                        <p style={{ width: "20%" }}>$20</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Cart