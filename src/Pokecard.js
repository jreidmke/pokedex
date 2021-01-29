const Pokecard = ({name, id, type, base_experience}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
            <h4>{type}</h4>
            <p>XP: {base_experience}</p>
        </div>
    )
}

export default Pokecard