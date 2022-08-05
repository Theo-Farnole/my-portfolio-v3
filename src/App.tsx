import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import CandyHunt from './pages/projects/candyhunt';
import Error404 from './pages/errors/404';
import Home from './pages/home';
import GameleonXp from './pages/projects/gameleon-xp';
import RunRunBall from './pages/projects/runrunball';
import StickWars from './pages/projects/stickwars';
import Tartaros from './pages/projects/tartaros';
import Skills from './pages/skills';
import { routeNames } from './const';

function App() {
  return <>
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path={routeNames.home} element={<Home />} />
        <Route path={routeNames.gameleonExperience} element={<GameleonXp />} />
        <Route path={routeNames.stickWars} element={<StickWars />} />
        <Route path={routeNames.runRunBall} element={<RunRunBall />} />
        <Route path={routeNames.tartaros} element={<Tartaros />} />
        <Route path={routeNames.candyHunt} element={<CandyHunt />} />
        <Route path={routeNames.skills} element={<Skills />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </>;
}

export default App;
