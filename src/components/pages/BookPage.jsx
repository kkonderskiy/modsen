import "./bookPageStyle.css";
import { useLocation } from "react-router-dom";

function BookPage() {
    const location = useLocation();
    console.log(location.state.check.volumeInfo)
    return(
        <div className="book_page">

                    <div className="book_img"><img src={ location.state.check.volumeInfo.imageLinks.thumbnail } alt="Нет картинки"/></div>
                    <div className="book_info">
                        <h2>{ location.state.check.volumeInfo.title }</h2>
                        <p><b>Categories: </b>{ location.state.check.volumeInfo.categories }</p>
                        <p><b>Authors: </b>{ location.state.check.volumeInfo.authors }</p>
                        <span>{ location.state.check.volumeInfo.description}</span>
                    </div>
                    
        </div>
    );
    
}

export default BookPage;