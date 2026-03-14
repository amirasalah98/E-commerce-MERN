import React,{ useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import dummyImg from '../assets/dummy-img.jpg'
import style from './home.module.css'
function About() {
    const {darkMode}=useContext(DarkModeContext)
    return(
        <div className={`container ${darkMode? style.containerDark:style.containerLight}`}>
            <div className='py-5 text-center'>
            <h1>Meet Amira</h1>
            <p>A landscape artist who finds magic in nature's quiet moments</p>
            </div>
            <div className=" d-flex flex-column flex-md-row justify-content-between py-5">
    <img className={`${style.halfWidthImg}`} src={dummyImg} alt="dummy img" width='50%'/>
                <div className={`${style.halfParagraph}`}>
                    <span>My Journey</span>
                    <h2>Finding beauty in the <i>spaces between</i></h2>
                    <p>
                        I've always been drawn to the quiet moments in nature—the way morning mist clings to mountain peaks, how desert light transforms throughout the day,
                         or the gentle rhythm of rolling hills under a cloudy sky.
                    </p>
                    <p>My journey as an artist began during a solo hiking trip through the Pacific Northwest.
                         I found myself stopping every few miles, not just to rest, but to really see the landscapes around me. That's when I knew I needed to capture these moments somehow.</p>
                    <p>
                        Working primarily with ink, oil pastels, and acrylics,
                         I love how each medium brings something different to the table.
                          Ink flows like water, capturing the ephemeral quality of mist and clouds. Oil pastels blend beautifully, perfect for those soft transitions between earth and sky. Acrylics give me the boldness to express the drama of desert sunsets and mountain storms.
                    </p>
                    <button>Let's connect</button>
                </div>
            </div>
            <div className='aboutCards d-flex flex-column flex-md-row'>
                <div className={` text-center p-4 ${style.aboutCardsCard}`}>
                    <h3>Intuitive Process</h3>
                    <p>I believe the best art comes from feeling rather than thinking.
                         Each piece begins with an emotion,
                         a memory, or a moment that took my breath away.</p>
                </div>
                <div className={` text-center p-4 mx-s mx-md-4 my-3 my-md-0 ${style.aboutCardsCard}`}>
                    <h3>Nature as Teacher</h3>
                    <p>Every landscape has something to teach us about patience, resilience,
                         and beauty. I try to listen to what each scene wants to become on paper.</p>
                </div>
                <div className={` text-center p-4 ${style.aboutCardsCard}`}>
                    <h3>Emotional Connection</h3>
                    <p>Art should touch the soul. My goal is to create pieces that resonate with your own memories and experiences
                         of nature's wonder.</p>
                </div>
            </div>
            <div className=" d-flex flex-column flex-md-row justify-content-between py-5">
                <div className={`${style.halfParagraph}`}>
                    
                    <h2>Behind the Scenes</h2>
                    <p>
                       My studio is my sanctuary—a light-filled space where creativity flows as naturally as morning coffee. You'll find canvases in various stages of completion, jars of brushes sorted by medium,
                        and windows that frame the very landscapes that inspire my work.
                    </p>
                    <p>
                        Each piece begins with a sketch or a feeling.
                         Sometimes I work from photographs taken during my travels, but more often,
                        I work from memory and emotion. I find that memories tend to distill the essence of a place better than any photograph ever could.
                    </p>
                    <div className=' d-flex'>
                    <div>
                    <b>Favorite Materials</b>
                    <ul>
                        <li>Winsor & Newton oil pastels</li>
                        <li>India ink & bamboo brushes</li>
                        <li>Professional acrylics</li>
                        <li>Textured watercolor paper</li>
                    </ul>
                    </div>
                    <div>
                        <b>Inspiration Sources</b>
                    <ul>
                        <li>Early morning hikes</li>
                        <li>Classical music</li>
                        <li>Changing seasons</li>
                        <li>Travel memories</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <img className={`${style.halfWidthImg}`} src={dummyImg} alt="dummy img" width='50%'/>
            </div>
            <div className='text-center'>
                <h2>Let's Create Something Beautiful Together</h2>
                <p>Whether you're looking for the perfect piece for your space or interested in a custom commission, I'd love to hear from you.</p>
                <div className='d-flex justify-content-center'>
                    <button className={`mx-2 ${style.gradientBtn} `}>Browse Gallery</button>
                    <button className="mx-2">Get in touch</button>
                </div>
            </div>
        </div>
    )
}
export default About;