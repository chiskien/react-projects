import {Character} from "./Character";
import {useState, useEffect} from "react";

export function List() {
    //loading state to check that if user will known when the data is still being fetched
    const [loading, setLoading] = useState(true);
    //character state
    const [characters, setCharacters] = useState([]);

    //useEffect is React Hook which used to handle side effects,
    // params: a callback function, dependency array
    useEffect(() => {
        async function fetchData() {
            const data = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5");
            const results = await data.json();
            setCharacters(results);
            setLoading(false);
        }

        fetchData().then(r => console.log(r));
    }, [characters.length])


    return (<div>
        <h2>Characters</h2>
        <div className="row">
            {loading ? (<div>Loading...</div>) : (characters.map((character) =>
                (<Character id={character.id}
                            name={character.name}
                            origin={character.origin}
                            image={character.image}/>)))
            }
        </div>

    </div>)
}