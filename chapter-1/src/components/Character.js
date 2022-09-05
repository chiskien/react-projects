export function Character(character) {
    return (
        <div>
            <h3>{character.name}</h3>
            <h4>{`Id: ${character.id}`}</h4>
            <img src={character.image} alt={character.name} width="300"/>
            <p>{`Origin ${character.origin.name}`}</p>
        </div>
    );
}