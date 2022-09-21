import React from 'react'
import styled from "styled-components"


const Navbar = () => {
    const Logo = styled.h1`
    font-size:30px;
    font-weignt:bold;  
    color:white;  
    `;

    return (
        <>
        <div style = {{ 
            padding:"10px 10%", 
            display:"flex", 
            justifyContent:"space-between", 
            alignItems:"center", 
            backgroundColor: "rgb(128, 180, 137)",
            fontFamily: "'Raleway', sans-serif"}}>

            <Logo>Garden Of Eden</Logo>
            


            {/* <div >
                <input style = {{ width:"400px", height:"40px", borderRadius:"5px" }} type="search" />
            </div> */}

            <ul style = {{ 
                display:"flex", 
                justifyContent:"space-between", 
                listStyleType:"none" 
                }}>
                <li>Sign In</li> 
                <li style={{ marginLeft:"20px" }}>My Basket (0)</li>               
            </ul>
        </div>

        {/* <ul style={{display:"flex", justifyContent:"space-between",listStyleType:"none" }}>

            <li>Home</li>
                <li>Products</li>                
            </ul> */}
        </>
    )
}

export default Navbar