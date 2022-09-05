export function Character(characterProps) {
    return (
        <div className="col-3">
            <div className="card">
                <img src={characterProps.image} alt={characterProps.name} className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">
                        {`Id: ${characterProps.id}`}
                    </h4>
                    <h3 className="card-title">
                        {characterProps.name}
                    </h3>
                    <p>
                        {`Origin: ${characterProps.origin && characterProps.origin.name}`}
                    </p>
                </div>
            </div>
        </div>
    )
        ;
}