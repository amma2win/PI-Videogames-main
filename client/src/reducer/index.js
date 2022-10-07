const initialState = {
  videogames: [],
  videodetails: [],
  allVideogames: [],
  genres: [],
  platforms: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload
      };
      case 'GET_NAME_VGAMES':
        return {
          ...state,
          videogames:action.payload
        }
        case 'POST_VGAMES':
          return{
            ...state,
          }
      case "GET_GENRES":
        return {
          ...state,
          genres: action.payload
        };
    case "FILTER_BY_GENRE":
      const allVgames = state.allVideogames;
      const filterVg =
        action.payload === "All"
          ? allVgames
          : allVgames.filter((v) => v.genres.includes(action.payload));
        /*   console.log(filterVg)
          console.log(allVgames) */
      if (filterVg.length === 0) {
        alert(`No existe el video juego con ese genero ${action.payload}`);
        return state;
      } else {
        return {
          ...state,
          videogames: filterVg
        };
      };
     case 'GET_PLATFORMS':
      
        return {
          ...state,
          platforms: action.payload
        } 
    case 'FILTER_CREATED':
      

      const filterVgames = state.allVideogames
      
      const createdFilter = action.payload === 'created' ? filterVgames.filter(e => e.createdAtDb) : filterVgames.filter(el => !el.createdAtDb)
      return{
        ...state,
        videogames: action.payload === 'All' ? state.allVideogames : createdFilter
      }
      case "SORT_VGAMES":
      if (action.payload === "rating") {
        let sortedArr = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          videogames: sortedArr,
        };
      } else {
        let sortedArr =
          action.payload === "asc"
            ? state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
            : state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          videogames: sortedArr,
        };
      }
    default:
      return state;
  }
}
