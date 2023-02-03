import React, { useState } from "react";
import "./style.css"

function getInf(serch, categories, sorting) {
    let str = serch.replaceAll(" ", "") + "&orderBy=" + sorting;

}

function Navigations(testCallBack) {
    const [request, getReqest] = useState("");
    const [categorie, getCategorie] = useState("all");
    const [sorting, getSorting] = useState("relevance");

    function createReqest(event){
        event.preventDefault();

        testCallBack.test1(request, categorie, sorting);
    }

    return(
        <nav className="navigation">
            <h1> Search for books</h1>
            <form onSubmit={createReqest} id="form1">
                <input type="text" name="" onChange={(e)=> getReqest(e.target.value)}/>
                <input type="submit" value="click" name="" id="" /> 
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
            </form>
        </nav>
    )
}

export default Navigations;