import {Link} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from '../../components/Navbar';
import logo from "../../assets/img/Projeto_Maozinha.png"
import './style.modules.css'

export function Home(){
    
    return (

        <div className='homePage'>
            <Navbar/>
            <div className="home-body">
                <img src={logo} alt="Logo Projeto Mãozinha"/>
            </div>
        </div>
    );
}