import {createContext} from "react"

const initialstate={
    login:false,
    user:"",
    
}

export default GlobalState=createContext(initialstate)