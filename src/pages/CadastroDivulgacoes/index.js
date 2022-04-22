import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function CadastroDivulgacoes(){

const navigate = useNavigate();

const [form, setForm] = useState({
        tipo: "divulgacao",
		titulo: "",
		descricao: "",
		nome_instituicao: "",
		contato: "",
});

function handleChange(event){
    setForm({...form,[event.target.name]: event.target.value});

}

function handleConfirm(){
   
    axios.post("https://ironrest.herokuapp.com/projetoMaozinha", form);
    navigate("/");
}

    return (
        <>
        <Navbar />
        <h1>CADASTRO DIVULGAÇÃO</h1>
        <form onSubmit={handleConfirm}>
            <div class="mb-3">
                <label for="tituloCadastro" class="form-label">Título:</label>
                <input 
                type="text" 
                class="form-control" 
                id="tituloCadastro" 
                value={form.titulo}
                name="titulo"
                onChange={handleChange} 
                aria-describedby="emailHelp"
                />
            </div>
            <div class="mb-3">
                <label for="descricaoCadastro" class="form-label">Descrição:</label>
                <input 
                type="text" 
                class="form-control" 
                id="descricaoCadastro" 
                value={form.descricao}
                name="descricao"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="nomeCadastro" class="form-label">Nome da Instituição:</label>
                <input 
                type="text" 
                class="form-control" 
                id="nomeCadastro" 
                value={form.nome_instituicao}
                name="nome_instituicao"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="contatoCadastro" class="form-label">Contato:</label>
                <input 
                type="text" 
                class="form-control" 
                id="contatoCadastro" 
                value={form.contato}
                name="contato"
                onChange={handleChange} 
                />
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </>

    );
}


	
	
	

	
	
	