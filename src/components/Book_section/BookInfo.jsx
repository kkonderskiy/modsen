import React, { useState } from "react";
import "./style.css";

function BookInfo(props) {
    console.log(props);
    return(
       <div className="book_container">

            <div className="book_content">

                <div><img src={props.check.volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <h2>{ props.check.volumeInfo.categories !== undefined ? props.check.volumeInfo.categories[0] : "Нет категории" }</h2>
                <p>{ props.check.volumeInfo.title !== undefined ? props.check.volumeInfo.title : "Нет названия" }</p>
                <span>{ props.check.volumeInfo.authors[0] !== undefined ? props.check.volumeInfo.authors.join(", ") : "Нет автора" }</span>

            </div>
                
        </div> 
    );
    
}

export default BookInfo;