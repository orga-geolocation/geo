import {createContext} from "react"

const initialstate={
    login:false,
    user:"",
    register:false,
    modalVisible:false,
    userData:null
}

export default GlobalState=createContext(initialstate)