import { ELIMINAR_UN_GAME, OBTENER_DETALLE, OBTENER_GAMES } from "../action-types/actionTypes"







const initialState = {
    arrayGames: [],
    gameDetail: []

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
        
        case ELIMINAR_UN_GAME:
            return state
            
    
        default:
            return state
    }

}


export default gameReducer