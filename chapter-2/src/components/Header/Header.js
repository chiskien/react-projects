import "./Header.css";


export function Header({logo}) {
    return (<header className="App-header">
        <img src={logo} alt="logo" className={`App-logo`}/>
        <h1>My Portfolio</h1>
        
    </header>)
}