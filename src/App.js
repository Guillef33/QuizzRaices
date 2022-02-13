import React, { useState, useContext } from "react";


import Quizz from "./components/Quizz/Quizz";
// import Audio from './components/audio/Audio';
import questions from "./components/questions/questions";

import Play from "./components/audio/Play";
import Player from "./components/audio/Player";
import Counter from "./components/Counter/Counter";
import AppProvider, { AppContext } from "./context/AppContext";
import Home from './Home';
import NewCounter from "./components/Counter/NewCounter";

export default function App() {

  return (
    <AppProvider value={{AppContext}}>
        <Home />
        {/* <NewCounter /> */}
    </AppProvider>
  );
}
