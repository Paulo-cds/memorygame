import './style.css'
import battlefield from '../../Assets/battlefield.jpg'
import farcry from '../../Assets/farcry.jpg'
import fortnite from '../../Assets/fortnite.jpg'
import freefire from '../../Assets/freefire.jpg'
import Card from '../Card'

const Home = () => {
  return (
    <div className="Container">
      <div className="alignCards">
        <Card image={battlefield} />    
        <Card image={farcry} />
        <Card image={fortnite} />
        <Card image={freefire} /> 
      </div>
    </div>
  );
}

export default Home;