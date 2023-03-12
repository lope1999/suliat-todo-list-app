import React, { useState } from "react";
import Button from "./../button/Button";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
      setTask("");
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };

  const completedTasks = () => {
    setShowCompleted((prev) => !prev);
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id === id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        value={task}
        onChange={(e) => handleChange(e)}
        placeholder="What to do?..."
      />
      <Button
        type="submit"
        text="Add"
        icon="fa-regular fa-calendar-plus"
        className="add-btn"
        onClick={AddTask}
      />
      <br />
      {!showCompleted && tasklist !== [] ? (
        <ul>
          {tasklist.map((t, i) => (
            <li key={i} className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <Button
                text="Done"
                icon="fa-regular fa-calendar-check"
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              />
              <Button
                text="Delete"
                icon="fa-regular fa-calendar-xmark"
                className="delete"
                onClick={(e) => deletetask(e, t.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {tasklist
            .filter((elem) => elem.isCompleted)
            .map((t, i) => (
              <li key={i} className={t.isCompleted ? "crossText" : "listitem"}>
                {t.value}
                {/* <Button
                  text="Done"
                  icon="fa-regular fa-calendar-check"
                  className="completed"
                  onClick={(e) => taskCompleted(e, t.id)}
                /> */}
                <Button
                  text="Delete"
                  icon="fa-regular fa-calendar-xmark"
                  className="delete"
                  onClick={(e) => deletetask(e, t.id)}
                />
              </li>
            ))}
        </ul>
      )}
      {tasklist.length > 0 && !showCompleted ? (
        <Button
          type="submit"
          text="Show Completed"
          icon="fa-regular fa-rectangle-list"
          className="completed_list"
          onClick={completedTasks}
        />
      ) : (
        <Button
          type="submit"
          text=" Show All"
          icon="fa-regular fa-rectangle-list"
          className="completed_list"
          onClick={completedTasks}
        />
      )}
    </div>
  );
}

export default TodoApp;
