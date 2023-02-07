import Navigations from "../navigations/Navigations";
import { useLocation } from "react-router-dom";

function BookPage() {
    const location = useLocation();
    console.log(location.state.check.volumeInfo)
    return(
        <div className="book_content">

                    <div><img src={location.state.check.volumeInfo.imageLinks.thumbnail} alt="Нет картинки"/></div>
                    <h2>{ location.state.check.volumeInfo.title }</h2>
                    <p>{ location.state.check.volumeInfo.categories }</p>
                    <span>{ location.state.check.volumeInfo.authors }</span>
                    <span>{ location.state.check.volumeInfo.description}</span>
        </div>
    );
    
}

export default BookPage;