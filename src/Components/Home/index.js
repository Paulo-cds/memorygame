import './style.css'
import {useState} from 'react'
import duvida from '../../Assets/duvida.jpg'
import battlefield from '../../Assets/battlefield.jpg'
import farcry from '../../Assets/farcry.jpg'
import fortnite from '../../Assets/fortnite.jpg'
import freefire from '../../Assets/freefire.jpg'
import gta from '../../Assets/gta.jpg'
import Card from '../Card'

const Home = () => {
  const [selected, setSelected] = useState(false)
  const Cards = [
      {
        name:  battlefield,
      },
      {
        name:  farcry,
      },
      {
        name:  fortnite,
      },
      {
        name:  freefire,
      },
      {
        name: gta,
      },
      {
        name: gta,
      },
      {
        name:  battlefield,
      },
      {
        name:  farcry,
      },
      {
        name:  fortnite,
      },
      {
        name:  freefire,
      }
  ]

  const shuffleCards = (Cards) => {
        // Loop em todos os elementos
        for (let i = Cards.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [Cards[i], Cards[j]] = [Cards[j], Cards[i]];
        }
        // Retornando array com aleatoriedade
        return (
            Cards.map((Cardd, i) => (
                <Card 
                    image={selected ? Cardd.name : duvida} 
                    selected={selected} 
                    setSelected={setSelected}
                    key={i}
                />
            )) 
        )
    }
  return (
    <div className="Container">
      <div className="alignCards">
        {shuffleCards(Cards)}                               
      </div>
    </div>
  );
}

export default Home;