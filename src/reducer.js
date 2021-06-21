import { SERVER_DATA } from './const';


export const servserReduser = (state = [], action) => {
    console.log(action.payload)
    switch(action.type){
        case SERVER_DATA:
            
        return {
            ...state,
            ...action.payload
        };
        default:
        return state
    }
}
