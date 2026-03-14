import React,{ useContext } from "react";
import Shop from './shop';
import 'bootstrap'
import style from './home.module.css'
import dummyImg from '../assets/dummy-img.jpg'
import { DarkModeContext } from "../DarkModeContext";
function Home(){
    const {darkMode}=useContext(DarkModeContext)
    
return(
    <div className={`container ${darkMode? style.containerDark:style.containerLight} `}>
    <div className=" d-flex flex-column flex-md-row justify-content-between py-5">
        
                    <div className={` ${style.halfParagraph} `}>
                        <span>Welcome to my enchanted world</span>
                        <h2>Where dreamy <br></br><i><b>landscapes bloom</b></i></h2>
                        <p className={`p-4  ${style.homeCardsCard}`}>
                            <i>
                           "Hand-painted landscapes that capture nature's whispered secrets through delicate ink strokes,
                            soft oil pastels, and dreamy acrylics. Each piece is a love letter to the quiet moments and
                             wild adventures that make our hearts flutter."
                             </i>
                        </p>
                       
                        <div className='d-flex my-4 '>
                        <button className={`mx-2 ${style.gradientBtn} `}>Explore My Gallery</button>
                        <button className='mx-2'>Meet the Dreamer</button>
                        </div>
                    </div>
                    <img className={`${style.halfWidthImg}`} src={dummyImg} alt="dummy img" width='50%'/>
                </div>
                <div className='text-center'>
                    <h2>Featured <br></br><i><b>Artistic Treasures</b></i></h2>
                    <div className='text-center'>
                        <p>"Each canvas holds a piece of my heart, a whispered story of nature's magic"</p>
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-center'>
                        <div className={`text-center p-4 ${style.homeCardsCard}`}>
                            <img src={dummyImg} alt="dummy img" width='50%'/>
                            <h3>Misty Mountains</h3>
                            <span>100</span>
                            <button className={`my-2 ${style.gradientBtn}`}>Add to collection</button>
                        </div>
                         <div className={`text-center p-4 mx-s mx-md-4 my-3 my-md-0 ${style.homeCardsCard}`}>
                            <img src={dummyImg} alt="dummy img" width='50%'/>
                            <h3>Desert Dreams</h3>
                            <span>200</span>
                            <button className={`my-2 ${style.gradientBtn}`}>Add to collection</button>
                        </div>
                         <div className={`text-center p-4 ${style.homeCardsCard}`}>
                            <img src={dummyImg} alt="dummy img" width='50%'/>
                            <h3>Gentle Peaks</h3>
                            <span>150</span>
                            <button className={`my-2 ${style.gradientBtn}`}>Add to collection</button>
                        </div>
                    </div>
                    <button className='my-4'>View My Complete Gallery</button>
                </div>
                <div className=" d-flex flex-column flex-md-row justify-content-between py-5">
        
                    <div className={`${style.halfParagraph}`}>
                        <span>My Heart's Story</span>
                        <h2>Finding beauty in the <i>spaces between</i></h2>
                        <div>
                        <p className={`p-4 ${style.homeCardsCard}`}>
                            <i>
                        "I'm Amira, a dreamer who speaks fluent landscape. Every stroke of my brush carries the essence 
                        of morning mist, the warmth of golden sunsets, and the gentle secrets that mountains whisper to those who truly listen."
                         </i>
                         
                            <i>
                            Working with delicate inks, soft oil pastels, and flowing acrylics, I create both vibrant celebrations and gentle monochromatic
                             meditations that speak directly to the soul's longing for beauty and peace.
                        </i>
                        </p>
                        </div>
                        <button className='my-4'>Discover my journey</button>
                    </div>
                    <img className={`${style.halfWidthImg}`} src={dummyImg} alt="dummy img" width='50%'/>
                </div>
 {/* <Shop /> */}
    </div>
)
}
export default Home;