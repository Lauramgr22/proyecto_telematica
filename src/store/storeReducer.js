import { type } from "@testing-library/user-event/dist/type";
import { update } from "./EstadoBoton";

const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    productDeteleAll: 'product - delete all',
    productChange: 'product - change',
    productAdd: 'product - add',
    productDelete: 'product - delete'
}
const initialStore = {
    lastId: 4,
    user: { id: 1, name: 'Laura', rol: 'user' },
    dispositivos: [
        {
            "id": 1,
            "name": "Bombillo 1",
            "estado": "Activo",
            "potencia": 40,
            "energia": 960,
            "acciones": 0,
        },
        {
            "id": 2,
            "name": "Bombillo 2",
            "estado": "Inactivo",
            "potencia": 40,
            "energia": 960,
            "acciones": 1,
        },
        {
            "id": 3,
            "name": "Nevera",
            "estado": "Inactivo",
            "potencia": 100,
            "energia": 2400,
            "acciones": 2,
        },
        {
            "id": 4,
            "name": "Lavadora",
            "estado": "Inactivo",
            "potencia": 100,
            "energia": 2400,
            "acciones": 3,
        }
    ]
}
const storeReducer = (state, action) => {
    switch (action.type) {
        case types.authLogout:
            return {
                ...state,
                user: null
            }
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }
        case types.productDeteleAll:
            return {
                ...state,
                dispositivos: []
            }
        case types.productChange:
            console.log("productChange");
            return {
                ...state,
                dispositivos: update(state.dispositivos, action.payload.id)
            }
        case types.productAdd:
            console.log(state, action.payload);
            return {
                ...state,
                dispositivos: [...state.dispositivos, action.payload],
                lastId: state.lastId + 1
            }
        case types.productDelete:
            const pos= action.payload.pos
            const dispositivos= state.dispositivos
            dispositivos.splice(pos,1)
            console.log(dispositivos);
            return {
                ...state,
                dispositivos: [...dispositivos]
            }
        default:
            return state;
    }
}
export { initialStore, types }
export default storeReducer;