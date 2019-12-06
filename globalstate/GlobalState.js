import {createContext} from "react"

const initialstate={
    login:false,
    user:"",
    register:false,
    modalVisible:false
}

export default GlobalState=createContext(initialstate)