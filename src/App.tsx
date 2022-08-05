import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import CandyHunt from './pages/candyhunt';
import GameleonXp from './pages/gameleon-xp';
import Home from './pages/home';
import RunRunBall from './pages/runrunball';
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
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
