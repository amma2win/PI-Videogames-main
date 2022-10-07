import axios from 'axios'

export function getVideoGames(){
    return async function(dispatch){
        var response = await axios ('http://localhost:3001/videogames')//aca sucede la conexion entre el back y front. le hago la peticion a mi back
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: response.data
        })
    }
}

export function filterByGenres (payload){
    return {
        type:'FILTER_BY_GENRE',
        payload
    }
}

export function getGenres(){
    return async function(dispatch){
        var response = await axios ('http://localhost:3001/genres',{

        });
        return dispatch({
            type: 'GET_GENRES',
            payload: response.data
        })
        
    }
}

export function sortVgames (payload){
    return {
        type: 'SORT_VGAMES',
        payload
    }

}


export function filterCreated(payload){
    return {
        type : 'FILTER_CREATED',
        payload
    }
}
export function postVgames(payload){
    return async function (dispatch){
        const response = await axios.post('http://localhost:3001/videogames',payload)
        return response;
    }
}
export function getNameVgames(name){

    return async function(dispatch){
        try {
            var findName = await axios.get('http://localhost:3001/videogames?name='+ name);  // aca me trabe un rato por no buscar bien !
            return dispatch({
                type: 'GET_NAME_VGAMES',
                payload: findName.data,
            })

        } catch (e) {
            alert(console.log);
        }
    }
};