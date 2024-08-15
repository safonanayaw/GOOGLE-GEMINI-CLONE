import React from 'react'
import {assets} from '../../assets/assets'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Nana.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly tel me how your day when yesterday</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly tell me how you plan to spend the holiday with your family this week?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>How are the things you Loe in this world important to you?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div> 
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double check its response
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main