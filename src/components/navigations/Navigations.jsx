import React, { useState } from "react";
import "./style.css"

function getInf(serch, categories, sorting) {
    let str = serch.replaceAll(" ", "") + "&orderBy=" + sorting;

}

function Navigations(testCallBack) {
    const [request, getReqest] = useState();
    const [categorie, getCategorie] = useState();
    const [sorting, getSorting] = useState();

    function createReqest(event){
        event.preventDefault();
        testCallBack.test1(2);
        console.log(categorie, sorting);
    }

    function testForm() {
        
    }
    return(
        <nav className="navigation">
            <h1> Search for books</h1>
            <form onSubmit={createReqest} id="form1">
                <input type="text" name="" />
                <input type="submit" value="click" name="" id="" /> 
                <div>
                    
                    <p>Categories</p>
                    <select name="categories" onChange={(e)=> getCategorie(e.target.value)} id="">
                        <option value="123">1</option>
                        <option value="2ёё6">2</option>
                    </select> 
                </div>
                <div>
                    
                    <p>Sorting by</p>
                    <select name="sorting" onChange={(e)=> getSorting(e.target.value)} id="">
                        <option value="456">1</option>
                        <option value="45н62">2</option>
                    </select>
                </div>
            </form>
        </nav>
    )
}

export default Navigations;