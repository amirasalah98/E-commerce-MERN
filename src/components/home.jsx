import React from 'react';
import Shop from './shop';
import 'bootstrap'
import style from './home.module.css'
import dummyImg from '../assets/dummy-img.jpg'
import styled from "styled-components";

function Home(){
return(
    <>
    <p className={style.paragraph}>Hello from home</p>
    <img src={dummyImg} alt="dummy img" width='20%'/>
 <Shop />
    </>
)
}
export default Home;