const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

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
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
      e.target.task.value = '';
    };

    

  }

  return (
    <section className="addTask" data-testid="component-wrapper">
      <form name="add-task" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={task.name}
          onChange={(e) => setTask({...task, name: e.target.value})}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
};

export default AddTask;
