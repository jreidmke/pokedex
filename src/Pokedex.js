import Pokecard from './Pokecard';
import {shuffleArray, xpCalc} from './helper';
import "./Pokedex.css";

const Pokedex = ({pokemon}) => {
    const shuffledPoke = shuffleArray(pokemon);
    const pokeTeamOne = shuffledPoke.slice(0, 4);
    const teamOneXp = xpCalc(pokeTeamOne);
    const pokeTeamTwo = shuffledPoke.slice(4, 8);
    const teamTwoXp = xpCalc(pokeTeamTwo);
    const isTeamOneWinner = teamOneXp > teamTwoXp;

    return(
        <div>  

        {alert(isTeamOneWinner ? "Team One Wins" : "Team Two Wins")}

            <div id="deck-one">
                <h1>XP: {teamOneXp}</h1>
                {pokeTeamOne.map(p => (
                    <Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience} className='card'/>
                    ))}
            </div>

            <hr></hr>

            <div id="deck-two">
            <h1>XP: {teamTwoXp}</h1>
            {pokeTeamTwo.map(p => (
                <Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience}/>
                ))}
            </div>

        </div>
    )
}

Pokedex.defaultProps = {
    pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]}

export default Pokedex;