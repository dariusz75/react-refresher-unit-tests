const AddTask = () => {
  return (
    <section className="addTask" data-testid="component-wrapper">
      <form name="add-task" >
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
};

export default AddTask;
