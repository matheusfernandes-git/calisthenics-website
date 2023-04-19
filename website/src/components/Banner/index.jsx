import img from '../../assets/banner.jpg'
import './banner.css'

export default function Banner(){
    return(
        <div className='container' style={{ backgroundImage: `url(${img})` }}>   
            Teste
            <button>Saiba mais</button>
        </div>
    )
}