import React from "react";
import stl from './Paginado.module.css';


export default function Paginado({videogamesPerPage, currpage, allVideogames, paginado}){
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(allVideogames/videogamesPerPage)-1;i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav>
            <ul className={stl.paginado}>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li className='number' key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
               
            </ul>
        </nav>
    )
}