import "./style.css"

const Card = ({image}) => {
    return(
        <div className="ContainerCard" style={{backgroundImage:`url(${image})`}}>
            <div className="CardContent"></div>
        </div>
    )
}

export default Card