import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import CandyHunt from './pages/candyhunt';
import Error404 from './pages/errors/404';
import GameleonXp from './pages/gameleon-xp';
import Home from './pages/home';
import RunRunBall from './pages/runrunball';
import Skills from './pages/skills';
import StickWars from './pages/stickwars';
import Tartaros from './pages/tartaros';

function App() {
  return <>
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameleon-experience" element={<GameleonXp />} />
        <Route path="/stickwars" element={<StickWars />} />
        <Route path="/runrunball" element={<RunRunBall />} />
        <Route path="/tartaros" element={<Tartaros />} />
        <Route path="/candy-hunt" element={<CandyHunt />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
