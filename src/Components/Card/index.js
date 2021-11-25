import "./style.css"

const Card = ({image, index, id, handle}) => {   
    return(
        <div              
            className="ContainerCard" 
            //style={{backgroundImage:`url(${image})`}}
        >
            <img 
            src={image}
            onClick={() => {handle(id)}} 
            />            
        </div>
    )
}

export default Card