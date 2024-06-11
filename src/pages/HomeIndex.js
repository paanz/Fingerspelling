import { Routes, Route} from 'react-router-dom';
import { Home } from "./Home"
import { Hello } from "./Hello"
import { HomeMY } from "./HomeMY"
import { menuindex } from "./MenuIndex"
import BgVideo from "../videos/BGvideo.mp4"
import PageNotFound from './NotFound';
import "../styles/homePage.css"

export function HomeIndex() {
  return (
    <>
     <div className = 'main'>
      <video className='homeBg' src={BgVideo} autoPlay loop muted />
     </div>
      <div className='overlay'></div>
      <h1>Test</h1>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/my" element = {<HomeMY />} />
        <Route path = "*" element = {<PageNotFound />} />
        {/* <Route path = "menu/*" element = {<menuindex />} /> */}
      </Routes>
    </>
  );
}

export default HomeIndex;
