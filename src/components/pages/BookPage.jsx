import "./bookPageStyle.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { routeList } from "../../helpers/routeList";
function BookPage() {
    const location = useLocation();
    return(
        <div className="book_page">

                    <div className="book_img"><img src={ location.state.check.volumeInfo.imageLinks.thumbnail } alt="Нет картинки"/></div>
                    <div className="book_info">
                    <Link to={routeList.mainPage}><input type="button" value="Назад" /></Link>
                        <h2>{ location.state.check.volumeInfo.title }</h2>
                        <p><b>Categories: </b>{ location.state.check.volumeInfo.categories }</p>
                        <p><b>Authors: </b>{ location.state.check.volumeInfo.authors }</p>
                        <span>{ location.state.check.volumeInfo.description}</span>
                    </div>
                    
        </div>
    );
    
}

export default BookPage;