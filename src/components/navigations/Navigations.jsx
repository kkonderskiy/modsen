import React, { useState } from "react";
import "./style.css"

function Navigations(props) {
    
    return(
        <nav className="navigation">
            <h1> Search for books</h1>
            <div>
                
                <input type="text" name="" id="" />
                <input type="button" value="click" name="" id="" />
                <div>
                    <p>Categories</p>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    <p>Sorting by</p>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navigations;