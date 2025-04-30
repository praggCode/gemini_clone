import React from "react";
import './sidebar.css';
import {assets} from '../../assets/assets';
import { SunIcon, MoonIcon, LightBulbIcon, LightCodeIcon, LightCompassIcon, 
         LightMenuIcon, LightMessageIcon, LightPlusIcon, 
         LightQuestionIcon, LightSendIcon, LightSettingsIcon, LightUserIcon } from '../../assets/ThemeIcons';

const Sidebar = ({Context}) => { 
    
    const [extended, setExtended] = React.useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat, isDarkTheme, toggleTheme} = React.useContext(Context);

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    // Create a reversed copy of prevPrompts to show most recent first
    const reversedPrompts = [...(prevPrompts || [])].reverse();

    return (
        <div className={`sidebar ${!extended ? 'collapsed' : ''}`}>
            <div className="top">
                <div className="menu-icon" onClick={()=>setExtended(prev=>!prev)}>
                    {isDarkTheme ? (
                        <LightMenuIcon />
                    ) : (
                        <img src={assets.menu_icon} alt='' />
                    )}
                </div>
                <div onClick={newChat} className="new-chat">
                    {isDarkTheme ? (
                        <LightPlusIcon />
                    ) : (
                        <img src={assets.plus_icon} alt='' />
                    )}
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {reversedPrompts.map((prompt, index) => (
                            <div key={index} onClick={() => loadPrompt(prompt)} className="recent-entry">
                                {isDarkTheme ? (
                                    <LightMessageIcon />
                                ) : (
                                    <img src={assets.message_icon} alt='' />
                                )}
                                <p>{prompt.length > 18 ? `${prompt.slice(0, 18)}...` : prompt}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry theme-toggle" onClick={toggleTheme}> 
                    <div className="theme-icon">
                        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
                    </div>
                    {extended?<p>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</p>:null}
                </div>
                <div className="bottom-item recent-entry"> 
                    {isDarkTheme ? (
                        <LightSettingsIcon />
                    ) : (
                        <img src={assets.setting_icon} alt='' />
                    )}
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
