import React from "react";
import BookInfo from "./BookInfo";

import "./style.css"



function BookContainer({request}) {
    return(
       <div className="container">
            {request.map(data =><BookInfo check={data} key={data.etag}/>)}
        </div> 
    );
}

export default BookContainer;

