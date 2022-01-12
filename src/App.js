import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Sapling from './components/sapling';
import Camp from './components/camp';
import Blood from './components/bdc';
import Sem from './components/seminar';
import Report from './components/reportsmag';
import './nith-style.css';
import './mobile.css';
import './st.css';
import Advisory from './components/commit';

import Calender from './components/calender';
import Volunteer from './components/volunteer';
import Slide from './components/Home/Slide';
import Content from './components/Home/Content';

const App=()=>{
    return (
        <div>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Content/>} exact="/" />
    <Route path="/sapling" element={<Sapling/>} />
    <Route path="/activity" element={<Calender/>} />
    <Route path="/camp" element={<Camp/>} />
    <Route path="/blood" element={<Blood/>} />
    <Route path="/sem" element={<Sem/>} />
    <Route path="/report" element={<><Calender/><Report/></>} />
    <Route path="/vt" element={<Volunteer/>} />


</Routes>
</BrowserRouter>
        </div>
    )
}
export default App;