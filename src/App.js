import React, { useState, useEffect } from "react";

function App() {

  // useStates
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  // useEffect para carregar itens salvos no storage
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

  }, []);

  // useEffect para salvar no storage
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  function handleAdd(){
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
