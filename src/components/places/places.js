import './places.css'
import bg from '../../images/placesbg.png'


function Places(){
    return(
        <div className="places" style={{backgroundImage:`url('${bg}')`}}>
            <p>Places</p>
        </div>
    )
}
export default Places