import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../helpers/Search.js";
import { Outlet } from "react-router-dom";
import "./style.css"
import { categoriesOption, sortingOption } from "../../helpers/searchParams.js";
function Navigations() {
    const dispatch = useDispatch();

    const [request, getRequest] = useState("");
    const [categorie, getCategorie] = useState("all");
    const [sorting, getSorting] = useState("relevance");

    function createRequest(event){
        event.preventDefault();
        dispatch(fetchBooks({request:request, categorie:categorie, sorting:sorting, index: 0, pagination: false,
            bookList: []}))
    }

    return(
        <>
        <nav className="navigation">
            <h1> Search for books</h1>
            <form onSubmit={createRequest} id="form1">

                <div className="submitInput">
                    <input type="text" name="" onChange={(e)=> getRequest(e.target.value)} className="submitField"/>
                    <input type="submit" value="click" name="" id="" className="submitButton"/>
                </div>
                <div className="searchParam">

                    <div>
                        <p>Categories</p>
                        <select name="categories" onChange={(e)=> getCategorie(e.target.value)} id="" >
                            {categoriesOption.map(categori => <option value={categori.value} key={categori.value}>{categori.text}</option>)}
                        </select> 
                    </div>

                    <div>
                        <p>Sorting by</p>
                        <select name="sorting" onChange={(e)=> getSorting(e.target.value)} id="" >
                            {sortingOption.map(sort => <option value={sort.value} key={sort.value}>{sort.text}</option>)}
                        </select>
                    </div>

                </div> 

            </form>
        </nav>
        <Outlet/>
        </>
    )
}

export default Navigations;