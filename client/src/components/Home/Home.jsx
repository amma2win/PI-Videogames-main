import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getVideoGames,filterByGenres, getGenres, sortVgames,filterCreated } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import VideogameCreate from "../VgCreate/VideogameCreate";


export default function Home (){

const dispatch = useDispatch()
const allVideogames = useSelector((state)=> state.videogames)
const allGenres = useSelector((state) => state.genres)
const [render,setRender] = useState('') 
const [currentPage,setCurrentPage] = useState(1)
const [videogamesPerPage, setVideogPerPage ] = useState(7) //me traigo 15 vg por pag
const indexOfLastVg = currentPage * videogamesPerPage // pagina actual por la cantidad de vg por pagina q tengo seria 15 1x15
const indexOfFirstVg = indexOfLastVg - videogamesPerPage 
const currentVideogame = allVideogames.slice(indexOfFirstVg,indexOfLastVg)

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect (()=>{  //para poder cargar previamente dat
    dispatch(getGenres());
    dispatch(getVideoGames());
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getVideoGames());
}

function handleGenreFilter(e){
    e.preventDefault(e);
    dispatch(filterByGenres(e.target.value))
}



function handleSortvgames(e){
    e.preventDefault();
    dispatch(sortVgames(e.target.value))
    setCurrentPage(1); 
    setRender(`Ordenado${e.target.value}`)
}
function handleFilterCreated(e){
   
    dispatch(filterCreated(e.target.value))
}

return (
    <div>
        <div>
             <Link to= '/videogames'>
        <button>Crear Videogame</button>
        </Link>
        </div>
       
        <h1>Videogames APP</h1>
        <button className="boton1" onClick={e => {handleClick(e)}}>
            Volver a cargar todos los Videogames
        </button>
        <div>
          
            <div>                    
                  <select className="filtergenre" onClick={e => handleGenreFilter(e)} >
                    {allGenres?.map((e,i) => {
                         
                         return(
                            
                            <option value={e.name} key={i}>{e.name}</option>
                             )
                    })}      
                  </select>
                </div>
                <div>  
                  <select className="acomodar"  onChange={e => handleSortvgames(e)} >
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                    <option value='rating'>Mejores Rating</option>
                  </select>
                  <select name="FILTROS" id="" onChange={e => handleFilterCreated(e)}>
                    <option value="All">Todos los videogames</option>
                    <option value="created">Creados</option>
                    <option value="api">Existentes</option>
                  </select>
                </div> 
            <Paginado
            videogamesPerPage={videogamesPerPage}
            allVideogames= {allVideogames.length}
            paginado = {paginado}
            />
            <SearchBar/>
           
        {
          currentVideogame?.map((e) => {
            return (
            <div key= {e.id} >
                <Link to ={"/home/" + e.id}>
            <Card  name ={e.name} image={e.img} rating={e.rating} platform={e.platforms} genre={e.genres}/>
            </Link>
            </div>
          );
        })
        }
        </div>
    </div>
)
}