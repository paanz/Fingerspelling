import React from "react";
import BgVideo from "../videos/BGvideo.mp4"
import "../styles/homePage.css"
import { Outlet } from "react-router-dom"

export function BGcomponent() {
     return(
     <>
          <div className = 'main'>
               <video className='homeBg' src={BgVideo} autoPlay loop muted />
          </div>
          <div className='overlay'>

          <Outlet />
          </div>
     </>
     )
}

