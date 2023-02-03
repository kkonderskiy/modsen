import React, { useState } from "react";
import "./style.css";

function BookInfo(props) {
    
    return(
       <div className="book_container">

            <div className="book_content">

                <div><img src={props.check.volumeInfo.imageLinks === undefined ? 1 : props.check.volumeInfo.imageLinks.thumbnail} alt="Нет картинки"/></div>
                <h2>{ props.check.volumeInfo.title === undefined ? "Нет названия" : props.check.volumeInfo.title }</h2>
                <p>{ props.check.volumeInfo.categories === undefined ? "Нет категории" : props.check.volumeInfo.categories[0] }</p>
                <span>{ props.check.volumeInfo.authors === undefined ? "Нет автора" :  props.check.volumeInfo.authors.join(", ")}</span>

            </div>
                
        </div> 
    );
    
}

export default BookInfo;