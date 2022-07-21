import { createContext, useReducer, useContext } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [store, dispatch]= useReducer(storeReducer,initialStore)
  return(
    <StoreContext.Provider value={[store,dispatch]}>
      {children}  
    </StoreContext.Provider>
  )
}
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useDispatch }
export default StoreProvider;