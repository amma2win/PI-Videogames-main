import React,{useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres, postVgames } from "../../actions";
import { useDispatch, useSelector } from "react-redux";




function validate(input){
    let errors= {};
    if(!input.name) {
        errors.name ='Se requiere un nombre'
    }else if(!input.platform){
    errors.platform = 'Se requiere una plataforma'
}
return errors;
}


export default function VideogameCreate(){
    const dispatch = useDispatch();
    const history= useHistory();
    const genres = useSelector((state)=> state.genres);
    const [errors,setErrors] = useState({});

    const [input,setInput] = useState({
        name:"",
        description:"",
        platform:' ',
        rating:'',
        genre:[]
    })

 useEffect(()=>{
    dispatch(getGenres())
 },[])
function handleSubmit(e){
    e.preventDefault();
    dispatch(postVgames(input))
    alert(`Personaje Creado!`)
    setInput({
        name:" ",
        description:'',
        platform:[],
        rating:'',
        genre:[]
    })
    history.push('/home')  //redirige a la ruta q quiera(una vez que crea el vg, me dirige a /home...)
}
function handleChange(e){  
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
}
function handleSelect(e){
    setInput({
        ...input,
        genre:[...input.genre, e.target.value]
    })
}
function handleCheck(e){
    if(e.target.checked){
        setInput({
            ...input,
            rating: e.target.value
        })
    }
}
 return (
    <div>
        <Link to='/home'><button>Volver</button></Link>
        <h1>Creá tu Videogame!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Nombre:</label>
                <input 
                 type="text"
                 value={input.name} 
                 name="name" 
                 onChange={(e)=>handleChange(e)}
                 />
            </div>
            <div>
                <label >Descripcion:</label>
                <input 
                type="text" 
                value={input.description}
                name="description"
                onChange={(e)=>handleChange(e)}

                />
            </div>
            <div>
             <label>Rating:            </label>
            <label><input
            type="checkbox" 
            name="1"
            value={"1"}
            onChange={(e)=>handleCheck(e)}
            />1</label>
            <label><input
            type="checkbox" 
            name="2"
            value={"2"}
            onChange={(e)=>handleCheck(e)}
            />2</label>
            <label><input
            type="checkbox" 
            name="3"
            value={"3"}
            onChange={(e)=>handleCheck(e)}
            />3</label>
            <label><input
            type="checkbox" 
            name="4"
            value={"4"}
            onChange={(e)=>handleCheck(e)}
            />4</label>
            <label><input
            type="checkbox" 
            name="5"
            value={"5"}
            onChange={(e)=>handleCheck(e)}
            />5</label>
            
            
                
            </div>
            <div>
                <label>Plataformas:</label>
                <input
                 type="text"
                 value={input.platform}
                 onChange={(e)=>handleChange(e)}
                  />
            </div>
            <select onChange={(e)=>handleSelect(e)}>
                {genres.map(g => (
                    <option value={g.name}>{g.name}</option>
                ))}
            </select>Generos
            <ul><li>{input.genre.map((e)=> e + " ,")}</li></ul>
            <button type="submit" >Crear videogame</button>
        </form>
    </div>
 )
}