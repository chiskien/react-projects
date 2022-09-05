import {List} from "./components/List";

export function App() {
    return (<div className="container">
            <nav className="navbar sticky-top navbar-light bg-dark">
                <h1 className="navbar-brand text-light">
                    Rick and Morthy
                </h1>
            </nav>
            <List/>
        </div>

    )

}