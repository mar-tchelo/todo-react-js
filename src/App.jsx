import { useState } from "react";
import './App.css';

function App() {

  const [lista, setLista] = useState(['Nova Tarefa 1', 'Mais nova tarefa', 'Fazer Pipoca', 'Ir na farmacia', 'Ligar para padrão', 'Mais uma nova tarefa'])
  const [novoItem, setNovoItem] = useState()
  

  return (
    <>
    <div className="container">

      <header>
        <h1>Lista de Tarefas!</h1>
      </header>

         <div className="input-add">
            <input 
              type="text" 
              value={novoItem}
              onChange={(e) => setNovoItem(e.target.value)}
              placeholder="Insira uma nova tarefa"
              />

              <button 
                className="btn-add"
                onClick={() => AdicionarNovoItem()} 
                >Adicionar
              </button>

          </div>
          <ul>
            {lista.map((item, index)  => (
              
              <li>
                {item}
                <button onClick={()=> deletarItem(index)} >Deletar</button>
              </li>
              
              ))}
          </ul>
    </div>
    </>
  );

  function AdicionarNovoItem ()  {
    setLista([...lista, novoItem])
    setNovoItem("")
  }

  function deletarItem (index) {
    let tempArray = [...lista];
    tempArray.splice(index, 1);

    setLista(tempArray);
  }

}

export default App;
