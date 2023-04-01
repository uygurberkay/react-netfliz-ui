import '../styles/Player.css'
import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';
import video from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';


export default function Player() {
    /* To navigate to other pages */
    const navigate = useNavigate()

    
  return (
    <>
        <div className="player">
            <div className="back">
                {/* To navigate back page */}
                <BsArrowLeft onClick={() => navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop controls></video>
        </div>
    </>
  )
}
