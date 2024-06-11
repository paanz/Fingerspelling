import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import { HomeIndex } from "./pages/HomeIndex"
// import { Hello } from "./pages/Hello"
// import { MenuIndex } from "./pages/MenuIndex"
import BgVideo from "./videos/BGvideo.mp4"
import PageNotFound from "./pages/NotFound"
import { BGcomponent } from './components/bgcomponent';
import { HomeEng } from "./pages/Home"
import { HomeMY } from "./pages/HomeMY"
import { MenuComponent } from './components/menucomponent';
import { MenuEng } from "./pages/MenuEng"
import { MenuMy } from './pages/MenuMy';
import { Level1Eng } from "./pages/Level1Eng";
import { Level1My } from "./pages/Level1My"

import { Level2MenuEng } from "./leveltwo/Level2MenuEng";
import { Level2MenuMy } from "./leveltwo/Level2MenuMy";
import Quiz from "./leveltwo/Level2Eng";
import Kuiz from './leveltwo/Level2My';
import { QuizComponent } from './components/quizComponent';

import { Level3Eng } from './levelthree/Level3Eng';
import { PageNumbers } from './levelthree/page_numbers';
import { PageColours } from './levelthree/page_colours';
import { PageObjects } from './levelthree/page_objects';
import { PageClothing } from './levelthree/page_clothing';
import { PageDirection } from './levelthree/page_direction';
import { PageTransportation } from './levelthree/page_transportation';

import { LevelFourComponent } from "./components/levelFourComponent";
import { Level4MenuEng } from './levelfour/Level4MenuEng';
import { Level4MenuMy } from './levelfour/Level4MenuMy';
import Level4Quiz from "./levelfour/Level4Eng";
import Level4Kuiz from './levelfour/Level4My';

import LevelOne from "./handsign-levelone/pages/levelone";  //level one
import Mody from './handsign-levelone/pages/gesture';
import OneFinal from "./handsign-levelone/pages/level-one-final";

import Countdown from './playground/f_playground';

function App() {
  return (
    <>
    <ChakraProvider>
      <Routes>
        <Route path = "/playground" element = {<Countdown />} />
        <Route path = "/" element = {<BGcomponent />}>
          <Route index element = {<HomeEng />} />
          <Route path = "my" element = {<HomeMY />} />
        </Route>
        <Route path = "/menu" element = {<MenuComponent />}>
          <Route index element = {<MenuEng/>} />
          <Route path = "my" element = {<MenuMy />} />
        </Route>
        <Route path = "/levelone">
          {/* <Route index element = {<Level1Eng/>} /> */}
          {/* <Route index element = {<LevelOne/>} /> */}
          {/* <Route index element = {<Mody />} /> */}
          {/* <Route index element = {<OneFinal />} /> */}
          {/* <Route index element = {<LevelOneTwo />} /> */}
          <Route index element = {<LevelOne />} />
          <Route path = "my" element = {<Level1My/>} />
        </Route>
        <Route path = "*" element = {<PageNotFound />} />
        <Route path = "/leveltwo" element = {<QuizComponent />}>
          <Route index element = {<Level2MenuEng/>} />
          <Route path = "eng" element = {<Quiz/>} />
          <Route path = "my" element = {<Level2MenuMy />} />
          <Route path = "myquiz" element = {<Kuiz/>} />
        </Route>
        <Route path ="/levelthree">
          <Route index element = {<Level3Eng />} />
          <Route path = "numbers" element ={<PageNumbers />} />
          <Route path = "colours" element ={<PageColours />} />
          <Route path = "objects" element ={<PageObjects />} />
          <Route path = "clothing" element ={<PageClothing />} />
          <Route path = "direction" element ={<PageDirection />} />
          <Route path = "transportation" element ={<PageTransportation />} />
        </Route>
        <Route path = "/levelfour" element = {<LevelFourComponent />}>
          <Route index element = {<Level4MenuEng />} />
          <Route path = "my" element = {<Level4MenuMy />} />
          <Route path = "engquiz" element = {<Level4Quiz />} />
          <Route path = "myquiz" element = {<Level4Kuiz />} />
        </Route>
      </Routes>
    </ChakraProvider>
    </>
  );
}

export default App;
