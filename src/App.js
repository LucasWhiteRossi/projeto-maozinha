import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {CadastroDivulgacoes} from './pages/CadastroDivulgacoes';
import {CadastroPedido} from './pages/CadastroPedido';
import {Pedidos} from './pages/Pedidos';
import {Divulgacoes} from './pages/Divulgacoes';
import {EditDivulgacoes} from './pages/EditDivulgacao';
import {EditPedidos} from './pages/EditPedidos';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastrodivulgacoes" element={<CadastroDivulgacoes/>}/>
        <Route path="/cadastropedido" element={<CadastroPedido/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path="/pedidos/:id" element={<EditPedidos/>}/>
        <Route path="/divulgacoes" element={<Divulgacoes/>}/>
        <Route path="/divulgacoes/:id" element={<EditDivulgacoes />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
