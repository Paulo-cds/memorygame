import React from 'react';
import './style.scss'

const MyStopwatch = ({finishim, minute, setMinute, second, setSecond}) => {    

  const watch = () => {
    setTimeout(() => {
    
      if(second < 59){
        setSecond(second+1)
      } else {
        setSecond(0)
      }
      
    
    if(second === 59){
      if(minute < 59){
        setMinute(minute+1)
      } else {
        setMinute(0)
      }
    }
    },1000)
  }

  return (
    <div className={'container'}>      
      { !finishim && watch() }     
      <p>{minute} : {second}</p>      
    </div>
  )
}

export default MyStopwatch