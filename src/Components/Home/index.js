import './style.css'
import {useState, useEffect} from 'react'
import duvida from '../../Assets/duvida.jpg'
import battlefield from '../../Assets/battlefield.jpg'
import farcry from '../../Assets/farcry.jpg'
import fortnite from '../../Assets/fortnite.jpg'
import freefire from '../../Assets/freefire.jpg'
import gta from '../../Assets/gta.jpg'
import Card from '../Card'

const Home = () => {
  const [qtdCliques, setQtdCliques] = useState(1)
  const [firstCard, setFirstCard] = useState('nada')
  const [secondCard, setSecondCard] = useState('nada1')
  const [CardAleatorio, setCardAleatorio] = useState([])
  const Cards = [
      {
        name:  battlefield,
        id: 1,
        selected: false
      },
      {
        name:  farcry,
        id: 2,
        selected: false
      },
      {
        name:  fortnite,
        id: 3,
        selected: false
      },
      {
        name:  freefire,
        id: 4,
        selected: false
      },
      {
        name: gta,
        id: 5,
        selected: false
      },
      {
        name:  battlefield,
        id: 6,
        selected: false
      },
      {
        name:  farcry,
        id: 7,
        selected: false
      },
      {
        name:  fortnite,
        id: 8,
        selected: false
      },
      {
        name:  freefire,
        id: 9,
        selected: false
      },
      {
        name: gta,
        id: 10,
        selected: false
      }      
  ]

  const handleRestart = () => {
    console.log("restart")
    setQtdCliques(1)
    if(firstCard === secondCard){
      console.log("é diferente")
      const newCard = CardAleatorio.map((card) => {
        if (card.selected === true){
          return{
            ...card,
            selected: false
          }
        }
        return card
      })      
      setCardAleatorio(newCard) 
      setFirstCard('nada')
      setSecondCard('nada2')
    }     
    
  }

  const handleFlip = (id) => {
    setQtdCliques (qtdCliques + 1)  
    console.log(qtdCliques)  
    const newCard = CardAleatorio.map((card) => {
      if (card.id === id){        
        if(card.selected === true){          
          return{
            ...card,
            selected: false            
          }
        } else {   
          if(qtdCliques === 1){
            setFirstCard(card.name)            
          } else if (qtdCliques === 2){
              setSecondCard(card.name)            
            }             
          return{
            ...card,
            selected: true
          }
        }                 
      }
      return card
    })        
    setCardAleatorio(newCard)     
    if(qtdCliques===2 && firstCard !== secondCard){
      handleRestart()
    } 
  }

     
    useEffect(() => {
    // Loop em todos os elementos
    for (let i = Cards.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [Cards[i], Cards[j]] = [Cards[j], Cards[i]];
    }
    // Retornando array com aleatoriedade
    setCardAleatorio(Cards)
    }, [])  
  

  return (
    <div className="Container">
      <div className="alignCards">        
        {
          CardAleatorio.length > 0 && 
            CardAleatorio.map((Cardd, index) => (
              <Card 
                  image={Cardd.selected ? Cardd.name : duvida} 
                  key={index}
                  handle={handleFlip}
                  id={Cardd.id}
              />
            ))           
        }    
        {
          firstCard === secondCard &&
            <div className="acertou">
              <h1>Acertou!</h1>
            </div>
        }                         
      </div>
    </div>
  );
}

export default Home;