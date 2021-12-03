import "./style.scss"

const Card = ({image, id, handle, blocked, rotation}) => {          
    return(
        <div              
            className="ContainerCard"             
        >
            <img 
            src={image}
            onClick={() => {handle(id)}} 
            alt="card"            
            className={rotation ? 'rotate' : 'image'}
            />
            {
                blocked && 
                <div className="cardBlocked"></div>
            }
        </div>
    )
}

export default Card