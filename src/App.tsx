import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Intro from "./Pages/Intro/Intro";
import Resume from './Pages/Resume/Resume';
import Tirage from "./Pages/Tirage/Tirage";
import Prestations from "./Pages/Prestations/Prestations";
import RecupInfo from "./Pages/RecupInfo/RecupInfo";
import Thanks from "./Pages/Thanks/Thanks";
import {InfoProvider} from "./Context/InfoContext";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <InfoProvider>
                    <Routes>
                        <Route path="/" element={<Intro/>}/>
                        <Route path="/Tirage" element={<Tirage/>}/>
                        <Route path="/Resume" element={<Resume/>}/>
                        <Route path="/Prestations" element={<Prestations/>}/>
                        <Route path="/info" element={<RecupInfo/>}/>
                        <Route path="/Thanks" element={<Thanks/>}/>
                    </Routes>
                </InfoProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;