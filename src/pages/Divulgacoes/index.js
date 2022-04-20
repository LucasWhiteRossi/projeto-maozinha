import axios from 'axios';
import { useState, useEffect } from 'react'

export function Divulgacoes(){
   
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/projetoMaozinha')
            setData(response.data)
        }
        fetchData()
    },[])
    console.log(data)
    
    return (
        <h1>DIVULGAÇÕES</h1>
    );
}