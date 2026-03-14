import React,{ useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import style from './style.module.css'

function Modal({ children }){
    const {darkMode}=useContext(DarkModeContext)
return(
<div style={{height: '100vh',display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className={darkMode? style.containerDark:style.containerLight} >
    {children}
</div>
)
}
export default Modal;