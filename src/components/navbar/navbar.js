import './navbar.css'
import history from '../../images/history.png'
import dance from '../../images/dance.png'
import food from '../../images/food.png'
import places from '../../images/places.png'

function Navbar({historyRef,danceRef,foodRef,cultureRef}){
    const ScrollFunction = (ref) => {
        // Use smooth scrolling to scroll to the referenced element
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
    
    return(
        <div className="navbar">
            <div className='btn' onClick={()=>ScrollFunction(historyRef)}>
                <img src={history}></img>
            </div>
            <div className='btn' onClick={()=>ScrollFunction(danceRef)}>
                <img src={dance}></img>
            </div>
            <div className='btn' onClick={()=>ScrollFunction(foodRef)}>
                <img src={food}></img>
            </div>
            <div className='btn' onClick={()=>ScrollFunction(cultureRef)}>
                <img src={places}></img>
            </div>
        </div>
    )
}
export default Navbar