import './food.css'
import bg from '../../images/foodbg.png'


function Food(){
    return(
        <div className="food" style={{backgroundImage:`url('${bg}')`}}>
            <p>Food</p>
        </div>
    )
}
export default Food