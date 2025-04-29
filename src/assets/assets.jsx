import React from 'react';
import history_icon from './history_icon.png'
import menu_icon from './menu_icon.png'
import plus_icon from './plus_icon.png'
import question_icon from './question_icon.png'
import setting_icon from './setting_icon.png'
import bulb_icon from './bulb_icon.png'
import compass_icon from './compass_icon.png'
import gallery_icon from './gallery_icon.png'
import mic_icon from './mic_icon.png'
import user_icon from './user_icon.png'
import youtube_icon from './youtube_icon.png'
import message_icon from './message_icon.png'
import code_icon from './code_icon.png'
import send_icon from './send_icon.png'
import gemini_icon from './gemini_icon.png'

// SVG icons for theme toggle
export const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.6 5.6L7.05 7.05M16.95 16.95L18.4 18.4M5.6 18.4L7.05 16.95M16.95 7.05L18.4 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const assets = {
    history_icon,
    menu_icon,
    plus_icon,
    question_icon,
    setting_icon,
    bulb_icon,
    compass_icon,
    gallery_icon,
    mic_icon,
    user_icon,
    youtube_icon,
    message_icon,
    code_icon,
    send_icon,
    gemini_icon
}