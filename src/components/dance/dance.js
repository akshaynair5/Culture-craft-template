import './dance.css'
import bg from '../../images/dancebg.png'


function Dance(){
    return(
        <div className="dance" style={{backgroundImage:`url('${bg}')`}}>
            <p>Dance</p>
        </div>
    )
}
export default Dance