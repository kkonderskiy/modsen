import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { routeList } from "../../helpers/routeList";

function BookInfo(props) {
    const {imageLinks, title, categories, authors} = props.check.volumeInfo;
    return(
       <div className="book_container">
            <Link to={`${routeList.bookPageActiv+props.check.id}`} state={props}>
                <div className="book_content">

                    <div><img src={imageLinks === undefined ? 1 : imageLinks.thumbnail} alt="Нет картинки"/></div>
                    <h2>{ title === undefined ? "Нет названия" : title }</h2>
                    <p>{ categories === undefined ? "Нет категории" : categories[0] }</p>
                    <span>{ authors === undefined ? "Нет автора" :  authors.join(", ")}</span>

                </div>
            </Link>    
        </div> 
    );
    
}

export default BookInfo;