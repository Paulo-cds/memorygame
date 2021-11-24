import "./style.css"

const Card = ({image, selected, setSelected}) => {
    return(
        <div 
            onClick={() => {setSelected(!selected)}} 
            className="ContainerCard" 
            style={{backgroundImage:`url(${image})`}}
        >
            <div className="CardContent"></div>
        </div>
    )
}

export default Card