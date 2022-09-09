import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header logo={logo}/>
        </div>
    );
}

export default App;
