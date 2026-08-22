 export function CardList({ commanders }:{ commanders: Commander[] } ) {
    return (
        < div  className="container">
        <ul>
            {commanders.map((commander) => (
                <li key={commander.id}>
                    <img src={commander.photo} alt={commander.name} className="image" />
                        <span>{commander.name}</span>
                </li>
            ))}
        </ul>
        </div>
    );
}
