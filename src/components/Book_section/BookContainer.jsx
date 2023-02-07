import React from "react";
import BookInfo from "./BookInfo";

import "./style.css"



function BookContainer(props) {
    console.log(props);

    return(
       <div className="container">
            {props.request.map(data =><BookInfo check={data} key={data.etag}/>)}
        </div> 
    );
    
}

export default BookContainer;

