import React from 'react';
import {Menubar} from './features/menubar/Menubar';
import './App.scss';
import {useAppSelector} from "./app/hooks";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import {clickMenubarEntry} from "./features/menubar/menubarSlice";
import {useDispatch} from "react-redux";

const loadWindow = (window: string): (props: any) => JSX.Element => {
  switch (window) {
    case 'Login':
      return Login;
    case 'Register':
      return Register;
    default:
      return () => <></>;
  }
}

function App() {
  const dispatch = useDispatch();
  const ActiveWindow = loadWindow(useAppSelector(state => state.menubar.activeWindow))
  return (
    <div className="App">
      <ActiveWindow onClose={() => dispatch(clickMenubarEntry(''))}/>
      <Menubar/>
    </div>
  );
}

export default App;
