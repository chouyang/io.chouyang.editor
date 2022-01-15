import React from 'react';
import {Menubar} from './features/menubar/Menubar';
import './App.scss';
import {useAppSelector} from "./app/hooks";
import {loadWindow} from "./utils";

function App() {
  const activeWindow = useAppSelector(state => state.menubar.activeWindow)

  const ActiveWindow = loadWindow(activeWindow)
  return (
    <div className="App">
      <ActiveWindow/>
      <Menubar/>
    </div>
  );
}

export default App;
