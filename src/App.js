import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Cadastro} from './pages/Cadastro'
import {Pedidos} from './pages/Pedidos'
import {Divulgacoes} from './pages/Divulgacoes'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path="/divulgacoes" element={<Divulgacoes/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
