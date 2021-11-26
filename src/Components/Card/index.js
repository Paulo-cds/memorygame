import "./style.css"

const Card = ({image, id, handle, blocked}) => {   
    return(
        <div              
            className="ContainerCard" 
            //style={{backgroundImage:`url(${image})`}}
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