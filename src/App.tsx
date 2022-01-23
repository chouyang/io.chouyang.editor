import React                 from 'react';
import { Menubar }           from './features/menubar/Menubar';
import { useAppSelector }    from "./app/hooks";
import Login                 from "./features/login/Login";
import Register              from "./features/register/Register";
import { clickMenubarEntry } from "./features/menubar/menubarSlice";
import { useDispatch }       from "react-redux";
import Dialog                from "./components/dialog";
import About                 from "./features/about/About";
import NavigationBar         from "./features/navigation-bar/NavigationBar";
import ToolWindow            from "./features/tool-window/ToolWindow";
import './App.scss';
import Editor                from "./features/editor/Editor";
import StatusBar             from "./features/status-bar/StatusBar";

const exit = (): void => {
  document.write("<h1 style='text-align: center; margin-top: 49vh'>Bye!</h1><script>setTimeout(() => location.reload(), 2000)</script>");
}

const loadWindow = (window: string): ((props: any) => JSX.Element) | null => {
  switch (window) {
    case 'About':
      return About
    case 'Login':
      return Login;
    case 'Register':
      return Register;
    case 'Quit':
      return (props: any) => (
        <Dialog
          title="Confirm Exit"
          content="Are you sure you want to exit?"
          confirmText="Quit"
          onConfirm={ exit }
          onCancel={ props.onClose }
        />
      );
    default:
      return null;
  }
}

function App() {
  const dispatch = useDispatch();
  const ActiveWindow = loadWindow(useAppSelector(state => state.menubar.activeWindow))
  return (
    <div className="App">
      { ActiveWindow ? (
        <div className="Windows">
          <ActiveWindow onClose={ () => dispatch(clickMenubarEntry('')) }/>
        </div>
      ) : '' }
      <Menubar/>
      <NavigationBar/>
      <ToolWindow/>
      <Editor/>
      <StatusBar/>
    </div>
  );
}

export default App;
