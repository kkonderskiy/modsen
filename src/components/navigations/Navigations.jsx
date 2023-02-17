import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../store/Search.js";
import { Outlet } from "react-router-dom";
import "./style.css"

function Navigations() {
    const dispatch = useDispatch();

    const [request, getReqest] = useState("");
    const [categorie, getCategorie] = useState("all");
    const [sorting, getSorting] = useState("relevance");

    function createReqest(event){
        event.preventDefault();

        dispatch(fetchBooks({request:request, categorie:categorie, sorting:sorting, index: 0, pagination: false,
            bookList: []}))

    }

    return(
        <>
        <nav className="navigation">
            <h1> Search for books</h1>
            <form onSubmit={createReqest} id="form1">

                <div className="submitInput">
                    <input type="text" name="" onChange={(e)=> getReqest(e.target.value)} className="submitField"/>
                    <input type="submit" value="click" name="" id="" className="submitButton"/>
                </div>
                <div className="searchParam">
                    <div>
                        
                        <p>Categories</p>
                        <select name="categories" onChange={(e)=> getCategorie(e.target.value)} id="" >
                            <option value={"all"} defaultValue>All</option>
                            <option value={"art"}>Art</option>
                            <option value={"biography"} >Biography</option>
                            <option value={"computers"}>Computers</option>
                            <option value={"history"} >History</option>
                            <option value={"medical"}>Medical</option>
                            <option value={"poetry"} >Poetry</option>
                            
                        </select> 
                    </div>
                    <div>
                        
                        <p>Sorting by</p>
                        <select name="sorting" onChange={(e)=> getSorting(e.target.value)} id="" >
                            <option value={"relevance"} defaultValue>relevance</option>
                            <option value={"newest"}>newest</option>
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