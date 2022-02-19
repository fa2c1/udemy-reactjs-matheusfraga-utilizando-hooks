import React, { useState, useEffect, useMemo } from "react";

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

  // useMemo
  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br /><strong>Voce tem {totalTarefas} tarefas!</strong><br />
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
