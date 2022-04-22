import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function Pedidos(){
   
    const [data, setData] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/projetoMaozinha')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
         let filtrado = data.filter((obj) => {
             return obj.tipo === "pedido" 
         });
         setPedidos(filtrado);
    },[data]);

    async function handleDelete(id) {
        await axios.delete(
        `https://ironrest.herokuapp.com/projetoMaozinha/${id}`
        );
        let deletado = pedidos.filter((obj) => {
            return obj._id !== id 
        });
        setPedidos(deletado);
    }
    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1>PEDIDOS</h1>
        {pedidos.map((currentPedidos) => {
           return (
               <>
                <div class="card" style={{width: "36rem"}} >
                    <div class="card-body">
                      <h5 class="card-title">{currentPedidos.titulo}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{currentPedidos.nome_instituicao}</h6>
                        <p class="card-text">{currentPedidos.descricao}</p>
                        <Link to={`/pedidos/${currentPedidos._id}`} class="card-link">Editar</Link>
                        <button class="btn" onClick={()=>handleDelete(currentPedidos._id)}>Apagar</button>
                    </div>
            </div>
               </>
           ) 
        })}
        </div>
        </>
    );
}