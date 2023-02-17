import BookContainer from "../Book_section/BookContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../helpers/Search.js";
import "./mainPageStyle.css"
import Loader from "../UI/loader.jsx";


function MainPage() {
  const dispatch = useDispatch();
  const {request, categorie, sorting} = useSelector(state => state.books.requestData);
  const index = useSelector(state => state.books.indexPage);
  const bookData = useSelector(state => state.books.bookList);
  const loading = useSelector(state => state.books.loader);

  async function paginations() {
    dispatch(fetchBooks({request:request, categorie:categorie, sorting:sorting, index: index, pagination: true,
      bookList: bookData}));
  }

  return (
    <div className="App">

      <h2>
        Количество{" "}
        {bookData.totalItems !== undefined ? bookData.totalItems : null}
        {bookData.totalItems === undefined && index >= 30? "книги не найдены" : null}
      </h2>
      <BookContainer
        request={bookData.items !== undefined ? bookData.items : []}
      />
      {loading ? <Loader /> : null}
      {bookData.length === 0 ? (
        " "
      ) : (
        <input className="input_pagination" type="button" value="Load more" onClick={paginations} />
      )}
    </div>
  );
}

export default MainPage;
