import React from "react";
import { Outlet } from "react-router-dom"
import imageBackground from "../images/menuImages/menuBackground.png"
import { 
     Image,
     Text
} from "@chakra-ui/react"
import "../styles/homePage.css"

export function MenuComponent() {
     return(
          <>
          <div>
               <Image className='menuImage' src={imageBackground}/>
          </div>
          <div className='overlay'>
               <Outlet />
          </div>
               
          </>
     )
}