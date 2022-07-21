import { type } from "@testing-library/user-event/dist/type";

const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    productDeteleAll: 'product - delete all',
    productChange: 'product - change',
    productAdd: 'product - add'
}
const initialStore = {
    user: {id:1, name: 'Laura'},
    dispositivos: [
        {
            "name":"Bombillo 1",
            "estado": "Approved",
            "potencia": 40,
            "energia": 960,
            "acciones": 75.5  
          },
          {
            "name":"Bombillo 2",
            "estado": "Disable",
            "potencia": 40,
            "energia": 960,
            "acciones": 75.5
          },
          {
            "name":"Nevera",
            "estado": "Error",
            "potencia": 100,
            "energia": 2400,
            "acciones": 75.5 
          },
          {
            "name":"Lavadora",
            "estado": "Approved",
            "potencia": 100,
            "energia": 2400,
            "acciones": 75.5 
          }
    ]
}
const storeReducer = (state,action) => {
 switch(action.type){
    case types.authLogout:
         return{
             ...state,
             user: null
         }
    case types.authLogin:
        return{
            ...state,
            user: action.payload
        }  
    case types.productDeteleAll:
        return{
            ...state,
            dispositivos: []
        } 
    case types.productChange:
        return{
            ...state,
            dispositivos: [{id: 3, tittle: 'Product #3' }]
        }   
    case types.productAdd:
        console.log(state, action.payload);
        return{
            ...state,
            dispositivos: [...state.dispositivos,action.payload]
        }   
     default:
         return state;
 }
}
export {initialStore, types}
export default storeReducer;