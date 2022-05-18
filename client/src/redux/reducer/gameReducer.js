import { CREATE_GAME, ELIMINAR_UN_GAME, OBTENER_DETALLE, OBTENER_GAMES, OBTENER_GAMES_CREATED } from "../action-types/actionTypes"



var ab = 1



const initialState = {
    arrayGames: [],
    gameDetail: [],
    gameCreated: {},
    aGamesCreated: [],
    eli: [],

}


const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case OBTENER_GAMES:
            
            return{
                ...state,
                arrayGames: action.payload,
                
            }

        case OBTENER_DETALLE:
            return{
                ...state,
                gameDetail: action.payload
            }

        case CREATE_GAME:
            return{
                ...state,
                gameCreated: action.payload
                

            }
        case OBTENER_GAMES_CREATED:
            if(action.payload.length){
                return{
                    ...state,
                    aGamesCreated: action.payload,
                    
                }
            }else{
                return{
                    ...state,
                    aGamesCreated: "vacia"
                    
                }
            }
            
        
        case ELIMINAR_UN_GAME:
            
            return {
                ...state,
                eli: ab++
            
            }
            
    
        default:
            return state
    }

}


export default gameReducer