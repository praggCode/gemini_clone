import React from "react";
import './sidebar.css';
import {assets} from '../../assets/assets';
import { Context } from "../../context/Context";


const Sidebar = () => { 

    const [extended, setExtended] = React.useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = React.useContext(Context);

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    // Create a reversed copy of prevPrompts to show most recent first
    const reversedPrompts = [...(prevPrompts || [])].reverse();

    return (
        <div className={`sidebar ${!extended ? 'collapsed' : ''}`}>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt='' />
                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt='' />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {reversedPrompts.map((prompt, index) => (
                            <div key={index} onClick={() => loadPrompt(prompt)} className="recent-entry">
                                <img src={assets.message_icon} alt='' />
                                <p>{prompt.length > 18 ? `${prompt.slice(0, 18)}...` : prompt}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry"> 
                    <img src={assets.question_icon} alt='' />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry"> 
                    <img src={assets.history_icon} alt='' />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry"> 
                    <img src={assets.setting_icon} alt='' />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
