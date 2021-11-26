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
  const [points, setPoints] = useState(0)
  const [qtdCliques, setQtdCliques] = useState(0)  
  const [firstCard, setFirstCard] = useState()  
  const [CardAleatorio, setCardAleatorio] = useState([])
  const Cards = [
      {
        name:  battlefield,
        id: 1,
        selected: false,
        blocked: false
      },
      {
        name:  farcry,
        id: 2,
        selected: false,
        blocked: false
      },
      {
        name:  fortnite,
        id: 3,
        selected: false,
        blocked: false
      },
      {
        name:  freefire,
        id: 4,
        selected: false,
        blocked: false
      },
      {
        name: gta,
        id: 5,
        selected: false,
        blocked: false
      },
      {
        name:  battlefield,
        id: 6,
        selected: false,
        blocked: false
      },
      {
        name:  farcry,
        id: 7,
        selected: false,
        blocked: false
      },
      {
        name:  fortnite,
        id: 8,
        selected: false,
        blocked: false
      },
      {
        name:  freefire,
        id: 9,
        selected: false,
        blocked: false
      },
      {
        name: gta,
        id: 10,
        selected: false,
        blocked: false
      }      
  ]

  const handleRestart = (secondCard) => {    
    if(firstCard === secondCard){
      const newCard = CardAleatorio.map((card) => {
        if (card.name === firstCard){            
          return{
            ...card,
            blocked: true,
            selected: true
          }
        }
        return card
      })      
      setCardAleatorio(newCard)
      setPoints(points + 1) 
      console.log('pontos = ',points)     
    } else {
    setTimeout(() => {
      setQtdCliques(0)
      if(firstCard !== secondCard){       
        const newCard = CardAleatorio.map((card) => {
          if (card.selected === true && card.blocked === false){            
            return{
              ...card,
              selected: false
            }
          }
          return card
        })      
        setCardAleatorio(newCard)         
      }     
    },1000)
    }
    setQtdCliques(0)
  }

  const handleFlip = (id) => {          
    setQtdCliques(qtdCliques + 1)   
    let secondCard = ''
     
    const newCard = CardAleatorio.map((card) => {
      if (card.id === id){        
        if(card.selected === true && card.blocked === false){          
          return{
            ...card,
            selected: false            
          }
        } else {             
          if(qtdCliques === 0){
            setFirstCard(card.name)
          } else {
            if(qtdCliques === 1){
              secondCard=card.name                      
            }  
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
       
    if(qtdCliques===1){
      handleRestart(secondCard)
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

    const finish = () => {
      reload()
      return(        
        <div className="acertou">
          <iframe title='winner' src="https://giphy.com/embed/xULW8CPwOHXPua8NTa" frameBorder="0" class="giphy-embed" allowFullScreen />
        </div>        
      )      
    }

    const reload = () => {
      setTimeout(() => {
        window.location.reload()
      }, 10000)
    }
  

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
                  blocked={Cardd.blocked}
              />
            ))           
        }    
        {
          points === (Cards.length/2) &&
            finish()
        }                         
      </div>
    </div>
  );
}

export default Home;