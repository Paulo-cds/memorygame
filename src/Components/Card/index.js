import "./style.css"

const Card = ({image, id, handle, blocked}) => {   
    return(
        <div              
            className="ContainerCard"             
        >
            <img 
            src={image}
            onClick={() => {handle(id)}} 
            alt="card"
            />
            {
                blocked && 
                <div className="cardBlocked"></div>
            }
        </div>
    )
}

export default Card