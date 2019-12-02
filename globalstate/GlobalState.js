import {createContext} from "react"

const initialstate={
    login:false,
    user:"",
    register:false
}

export default GlobalState=createContext(initialstate)