import logo from './assets/logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./pages/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Projects} from "./pages/Projects";

function App() {
    return (<div className="App">
        <BrowserRouter>
            <Header logo={logo}/>

            <Routes>
                <Route path="/" element={<Profile username={"chiskien"}/>}>
                </Route>
                <Route path="/projects"
                       element={<Projects username={`chiskien`}/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
