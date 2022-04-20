import {Link} from 'react-router-dom'
import axios from 'axios'

export function Home(){
    

    

    return (
        <div className='homePage'>
            <div className='navBar'>
                <Link to="/cadastro">CADASTRO</Link>
                <Link to="/pedidos">PEDIDOS</Link>
                <Link to="/divulgacoes">DIVULGAÇÕES</Link>
            </div>
        </div>
    );
}