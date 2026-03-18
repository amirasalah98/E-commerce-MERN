import style from './home.module.css'
import React,{ useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { BsEnvelope,BsFacebook,BsInstagram   } from "react-icons/bs";
function Contact() {
        const {darkMode}=useContext(DarkModeContext)
    
    return(
        <div className={` py-5 container ${darkMode? style.containerDark:style.containerLight}`}>
            <div className='pb-5 text-center'>
                <h1>Let's Connect</h1>
                <p>
I'd love to hear from you! Whether you have questions about my work,
 interested in a custom piece, or just want to chat about art, don't hesitate to reach out.</p>
            </div>
         <div className={`text-center p-4 ${style.contactCardsCard}`}>
            <div>
            <h5><BsEnvelope /> Email</h5>
            <span>amira.salahh9@gmail.com</span>
            </div>
            <div>
            <h5><BsFacebook /> Facebook</h5>
            <span><a href="#">Amira's Facebook</a></span>
            </div>
            <div>
            <h5><BsInstagram /> Instagram</h5>
            <span><a href="#">Amira's Instagram</a></span>
            </div>
         </div>
         </div>
    )
}
export default Contact;