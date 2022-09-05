export function Character(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{`Id: ${props.id}`}</h4>
            <img src={props.image} alt={props.name} width="300"/>
            <p>{`Origin ${props.origin.name}`}</p>
        </div>
    );
}