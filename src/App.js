import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Sapling from './components/sapling';
import Camp from './components/camp';
import Blood from './components/bdc';
import Sem from './components/seminar';
import Report from './components/reportsmag';
import Calender from './components/calender';
import Volunteer from './components/volunteer';
import Content from './components/Home/Content';
import Committe from './components/commitee';
import Awards from './components/awards';
import Asset from './components/assest';
import Certificate from './components/certificate';
import National from './components/nlm';

import './nith-style.css';
import './mobile.css';
import './st.css';

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
    <Route path="/report" element={<Report/>} />
    <Route path="/vt" element={<Volunteer/>} />
    <Route path="/ac" element={<Committe/>} />
    <Route path="/awards" element={<Awards/>} />
    <Route path="/assest" element={<Asset/>} />
    <Route path="/certi" element={<Certificate/>} />
    <Route path="/nlm" element={<National/>} />



</Routes>
</BrowserRouter>
        </div>
    )
}
export default App;