const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('event', e.target.task.value)

    if(task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((t) => {
        if(task.id === t.id) {
          return {
            id: task.id,
            name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
          }
        }
        return {
          id: t.id,
          name: t.name,
          time: t.time
        }
      });
      setTasklist(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      console.log('task is', tasklist);
      setTasklist([...tasklist, newTask]);
      setTask({});
    };

    

  }

  return (
    <section className="addTask" data-testid="component-wrapper">
      <form name="add-task" onSubmit={handleSubmit}>
        <input
          data-testid="input"
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={task.name || ''}
          onChange={(e) => setTask({...task, name: e.target.value})}
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  )
};

export default AddTask;
