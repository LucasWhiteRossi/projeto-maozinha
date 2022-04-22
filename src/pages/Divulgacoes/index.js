import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function Divulgacoes(){
   
    const [data, setData] = useState([]);
    const [divulgacao, setDivulgacao] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/projetoMaozinha')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
         let filtrado = data.filter((obj) => {
             return obj.tipo === "divulgacao" 
         });
         setDivulgacao(filtrado);
    },[data]);


    async function handleDelete(id) {
        await axios.delete(
        `https://ironrest.herokuapp.com/projetoMaozinha/${id}`
        );
        let deletado = divulgacao.filter((obj) => {
            return obj._id !== id 
        });
        setDivulgacao(deletado);
    }
    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1>DIVULGAÇÕES</h1>
        {divulgacao.map((currentDivulgacao) => {
           return (
               <>
                <div class="card" style={{width: "36rem"}} >
                    <div class="card-body">
                      <h5 class="card-title">{currentDivulgacao.titulo}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{currentDivulgacao.nome_instituicao}</h6>
                        <p class="card-text">{currentDivulgacao.descricao}</p>
                        <Link to={`/divulgacoes/${currentDivulgacao._id}`} class="card-link">Editar</Link>
                        <button class="btn" onClick={()=>handleDelete(currentDivulgacao._id)}>Apagar</button>
                    </div>
            </div>
               </>
           ) 
        })}
        </div>
        </>
    );
}