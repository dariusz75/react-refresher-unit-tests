const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

  const clearAll = () => {
    setTasklist([]);
  };

  const editTask = (id) => {
    const selectedTask = tasklist.find((task) => id === task.id);
    setTask(selectedTask);
    
  };

  const deleteTask = (id) => {
    const tasksToReplace = tasklist.filter(task => 
      id !== task.id );
      setTasklist(tasksToReplace);
  };
  

  return (
    <section className="showTask" data-testid="component-wrapper">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count" data-testid="counter">{tasklist.length}</span>
        </div>
        <button
          className={`clearAll ${!tasklist.length && ' disabled'}`} 
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      <ul>
        { tasklist.map((task) => (
          <li key={task.id} data-testid="task">
            <p>
              <span className="name" data-testid="task-name">{task.name}</span>
              <span className="time" data-testid="task-time">{task.time}</span>
            </p>
            <i 
              className="bi bi-pencil-square"
              onClick={() => editTask(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => deleteTask(task.id)}
            ></i>
          </li>
          )) 
        }            
      </ul>
    </section>
  );
}

export  default ShowTask;