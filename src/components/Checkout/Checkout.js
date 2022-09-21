import React, { useState } from 'react'
import ShippingAddress from '../ShippingAddress';
import ShippingMethod from "../ShippingMethod";


const Checkout = () => {
    const [showShippingAddress, setShowShippingAddress] = useState(false);
    const [showShippingMethod, setShowShippingMethod] = useState(false);


    const handleShowAddress = () => {
        setShowShippingAddress(!showShippingAddress);
    }

    const handleShowShippingMethod = () => {
        setShowShippingMethod(!showShippingMethod);
    }


    return (
        <div style={{ padding: "2% 10%" }}>
            <h1 style={{ color: "#3F762C", fontFamily: "'Raleway', sans-serif" }}>Checkout</h1>            
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                marginTop: "50px",
                gap: "100px"
            }}>

                {/* Shipping and Payment Section */}

                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: "#D9EED2",
                        padding: "2% 5%",
                        color: "#808080",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}>

                    <h2 style = {{ fontFamily: "'Raleway', sans-serif", }}>Shipping and Payment</h2>
                    <hr style={{ width:"100px", marginBottom: "50px", marginTop:"-10px" }}/>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between", gap: "30px"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "30px", background: "#ABD79E",
                            padding: "2% 5%",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style = {{ fontFamily: "'Raleway', sans-serif", fontSize: "20px" }}>Shipping Address</p>
                                <p style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleShowAddress}>{showShippingAddress ? "-" : "+"}</p>

                            </div>
                            {
                                showShippingAddress && <ShippingAddress />
                            }
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "30px", background: "#ABD79E",
                            background: "#ABD79E",
                            padding: "2% 5%",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                <p style = {{ fontFamily: "'Raleway', sans-serif", }}>Shipping Method</p>
                                <p style={{ cursor: "pointer" }} onClick={handleShowShippingMethod}>+</p>
                            </div>
                            {
                                showShippingMethod && <ShippingMethod />
                            }
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            background: "#ABD79E",
                            padding: "2% 5%",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                            <p style = {{ fontFamily: "'Raleway', sans-serif", }}>Payment Method</p>
                            <p style={{ cursor: "pointer" }}>+</p>
                        </div>
                    </div>
                </div>



                {/* Order Summary Section */}

                <div style={{
                    width: "50%", display: "flex", flexDirection: "column", alignItems: "center"
                }}>

                    <div style={{
                        width: "60%",
                        background: "#D9EED2",
                        padding: "2% 10%",
                        color: "#808080",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}>
                        <h2 style={{ fontFamily: "'Raleway', sans-serif", }}>Order summary</h2>
                        <hr style={{ width:"100px", marginBottom: "50px", marginTop:"-10px" }}/>
                        <div style={{ 
                            display: "flex", 
                            justifyContent: "flex-start", 
                            gap: "30px", 
                            alignItems: "center",
                            marginBottom:"20px" 
                            }}>
                            <img src="https://i.postimg.cc/V6DMJvMR/eggplant.jpg" height="100" width="100" style={{ borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} />
                            <div style={{ textAlign: "left", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Eggplant</p>
                                <p>Qty: 1</p>
                                <p>Price: $10</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-start", gap: "30px", alignItems: "center" }}>
                            <img src="https://i.postimg.cc/fbdBScTv/Blueberry.jpg" height="100" width="100" style={{ borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} />
                            <div style={{ textAlign: "left", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Blueberry</p>
                                <p>Qty: 1</p>
                                <p>Price: $10</p>
                            </div>
                        </div>
                        <div style={{ width: "320px", height: "1px", background: "#808000", marginTop: "30px" }}></div>

                        <div>
                            {/* <div style={{ width:"320px", height:"1px", background:"#808000"}}></div> */}
                            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Subtotal</p>
                                <p>$60</p>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Shipping</p>
                                <p>$60</p>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Tax</p>
                                <p>$10</p>
                            </div>

                            <div style={{ width: "320px", height: "1px", background: "#808000" }}></div>

                            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Raleway', sans-serif", }}>
                                <p>Order Subtotal</p>
                                <p>$130</p>
                            </div>
                        </div>


                    </div>

                    <button style={{
                        width: "fit-content",
                        // padding: "2% 10%",
                        marginTop: "30px",
                        background: "#358856",
                        color: "#fff",
                        borderRadius: "5px",
                        fontSize: "16px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        cursor: "pointer",
                        letterSpacing: "1px",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight:"bold",
                            borderWidth: "0px 0px 0px 0px",
    
    padding: "10px 50px 10px 50px",
    textTransform:"uppercase"
                    }}>Confirm and Pay</button>
                </div>


            </div>
        </div>
    )
}

export default Checkout