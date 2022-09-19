import React, { useState } from 'react'
import styles from "./ShippingAddress.module.css";


const ShippingAddress = () => {
    const [showAddressForm, setShowAddressForm] = useState(false);

    const handleAddressForm = () => {
        setShowAddressForm(!showAddressForm)
    }


    return (
        <div>
            <p><span style={{ cursor: "pointer", fontSize:"20px" }} onClick={handleAddressForm}>{showAddressForm? "-" : "+"}</span> Add shipping address</p>


            {
                showAddressForm && <form style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px", textAlign: "left" }}>
                    <label htmlFor="firstname">First Name</label>
                    <input style={{ height: "30px", background: "#D9EED2", color:"#808080", borderRadius:"5px", paddingLeft:"10px" }} type="text" name="firstname" />

                    <label htmlFor="lastname">Last Name</label>
                    <input style={{ height: "30px", background: "#D9EED2", color:"#808080", borderRadius:"5px", paddingLeft:"10px" }} type="text" name="lastname" />

                    <label htmlFor="address">Address</label>
                    <input style={{ height: "30px", background: "#D9EED2", color:"#808080", borderRadius:"5px", paddingLeft:"10px" }} type="text" name="address" />

                    <label htmlFor="zipcode">Zipcode</label>
                    <input style={{ height: "30px", background: "#D9EED2", color:"#808080", borderRadius:"5px", paddingLeft:"10px" }} type="text" name="zipcode" />

                    <label htmlFor="city">City</label>
                    <input style={{ height: "30px", background: "#D9EED2", color:"#808080", borderRadius:"5px", paddingLeft:"10px" }} type="text" name="city" />
                </form>
            }


        </div>
    )
}

export default ShippingAddress