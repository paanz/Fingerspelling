import React from 'react'
import bg_menu from '../images/bg_menu.png'
import { Routes, Route} from 'react-router-dom';
import { MenuEng } from './MenuEng';

export function MenuIndex() {
     return (
     <>
     <h1>Testing</h1>
     <div>
          <image src={bg_menu} alt="Background" />
     </div>
     <Routes>
          <Route path = "/menu" element = {<MenuEng />} />
          {/* <Route path = "/menuMy" element = {<MenuMy />} />  */}
     </Routes>
     </>
     );
}
