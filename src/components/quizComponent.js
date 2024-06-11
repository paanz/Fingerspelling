// import react from "react";
import "../styles/homePage.css"
import { Outlet } from "react-router-dom"
import imageBG from "../images/quizImages/quizBg2.png"
import {
     Image
} from "@chakra-ui/react"
import "./stacking.css"

export function QuizComponent() {
     return (
          <>
               <Image className='menuImage' src={imageBG} style={{zIndex:"-3"}} />
               <div className='overlay' style={{zIndex:"-2"}}></div>
               
               <Outlet style={{zIndex:"-1"}}/>
               
          </>
     )
}
