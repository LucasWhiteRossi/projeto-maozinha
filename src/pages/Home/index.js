import {Link} from 'react-router-dom'
import axios from 'axios'

export function Home(){
    
    return (
        <div className='homePage'>
            <div className='navBar'>
                <Link to="/cadastrodivulgacoes" className='btn btn-primary'>CADASTRO DIVULGAÇÕES</Link>
                <Link to="/cadastropedido" className='btn btn-primary'>CADASTRO PEDIDOS</Link>
                <Link to="/pedidos" className='btn btn-primary'>PEDIDOS</Link>
                <Link to="/divulgacoes" className='btn btn-primary'>DIVULGAÇÕES</Link>
            </div>
        </div>
    );
}