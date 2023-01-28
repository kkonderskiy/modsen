import React, { useState } from "react";
import BookInfo from "./BookInfo";
import "./style.css"



function BookContainer(props) {
    const [bookData, setBookData] = useState([]);
    
    async function getBookData() {
        let url =
        "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI";
        let data = await fetch(url);
        let commits = await data.json(); 
        setBookData(commits.items)
    }
    
    if(bookData.length === 0){getBookData();}        //Затычка для предотвращения бесконечных запросов
    
    return(
       <div className="container">
            {bookData.map(data =><BookInfo check={data} key={data.etag}/>)}
        </div> 
    );
    
}

export default BookContainer;

