import './style.scss'
import {useState, useEffect} from 'react'
import cardsData from '../../cardsData'
import duvida from '../../Assets/duvida.jpg'
import Card from '../Card'
import Stopwatch from '../Stopwatch'

const Home = () => {  
  const [points, setPoints] = useState(0)
  const [qtdCliques, setQtdCliques] = useState(0)  
  const [firstCard, setFirstCard] = useState() 
  const [firstId, setFirstId]  = useState()
  const [CardAleatorio, setCardAleatorio] = useState([])
  const [finishim, setFinishim] = useState(false)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)  
  

  const handleRestart = (secondCard) => {        
    if(firstCard === secondCard){
      const newCard = CardAleatorio.map((card) => {
        if (card.name === firstCard){            
          return{
            ...card,
            blocked: true,
            selected: true,
            rotation: false 
          }
        }
        return card
      })      
      setCardAleatorio(newCard)
      setPoints(points + 1)
      setQtdCliques(0)
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
        setQtdCliques(0)
      },1000)
    }
      
    if(points === (cardsData.length/2)-1){      
      setFinishim(true)
    }
  }


  const handleFlip = (id) => {             
    setTimeout(() => {   
      
      let secondCard = ''
            
      const newCard = CardAleatorio.map((card) => {
        
        if (card.id === id){                              
            if(qtdCliques === 0){
              setFirstCard(card.name)
              setFirstId(id)
              setQtdCliques(qtdCliques + 1)
            } else {
              if(qtdCliques > 0 && firstId !== id){
                secondCard=card.name   
                setQtdCliques(qtdCliques + 1)                               
              }  
            }           
            return{
              ...card,
              selected: true
            }                          
        }        
        
        return card
      })  
    
      setCardAleatorio(newCard)  
        
      if(secondCard){
        handleRestart(secondCard)
      }    
    
    },250) 

  }

  const handleRotation = (id) => {
    if(qtdCliques <=1){
      const newCard = CardAleatorio.map((card) => {
        if (card.id === id){        
          return{
            ...card,
            rotation: true            
          }                 
        }      
        return card
      })    
      setCardAleatorio(newCard)     
      handleFlip(id)
    }
  }

     
    useEffect(() => {    
    for (let i = cardsData.length - 1; i > 0; i--) {            
        const j = Math.floor(Math.random() * (i + 1));        
        [cardsData[i], cardsData[j]] = [cardsData[j], cardsData[i]];
    }    
    setCardAleatorio(cardsData)
    }, [])  

    const finish = () => { 
      window.scrollTo({top: 0,left: 0 , behavior: 'smooth'})
      setTimeout(() => {
        window.location.reload()
      }, 5000)        
      return(        
        <div className='acertou'>
          <h3>Seu tempo foi:</h3>
          <div className='result'>
            <div className='numbers'>
              <p>Minutos</p>
              <p>{minute}</p>
            </div>
            <div className='numbers'>
              <p>Segundos</p>
              <p>{second}</p>
            </div>
          </div>
        </div>        
      )      
    }

  

  return (
    <div className="Container">
      <Stopwatch 
        finishim={finishim} 
        minute={minute}
        setMinute={setMinute}
        second={second}
        setSecond={setSecond}
      />
      <div className="alignCards">        
        {
          CardAleatorio.length > 0 && 
            CardAleatorio.map((Cardd, index) => (
              <Card 
                  image={Cardd.selected ? Cardd.name : duvida} 
                  key={index}
                  handle={handleRotation}
                  id={Cardd.id}
                  blocked={Cardd.blocked}
                  rotation={Cardd.rotation}                  
              />
            ))           
        }    
        {
          points === (cardsData.length/2) &&
            finish()
        }                      
      </div>
    </div>
  );
}

export default Home;