import React, {useState} from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'


function Sidebar() {

    const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            {/* onClick function on menu img to set setExtended previous value to opposite the prev value true to false and vice versa*/}
            <img onClick={()=>{setExtended(prev => !prev)}} 
            className='menu' src={assets.menu_icon} alt="" />

            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {/* if menu icon is false with ternary operator display none */}
                {extended ? <p>New Chat</p> : null}
            </div>

                {/*start if menu icon is false with ternary operator display none */}

            {extended ? 
                        <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div> : null
        }
                {/*end if menu icon is false with ternary operator display none */}

        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />

                {/* if menu icon is false with ternary operator display none */}
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />

                {/* if menu icon is false with ternary operator display none */}
                {extended ? <p>Activity</p> : null}

            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />

                {/* if menu icon is false with ternary operator display none */}
                {extended ? <p>Settings</p> : null}
            </div>                        
        </div>
    </div>
  )
}

export default Sidebar