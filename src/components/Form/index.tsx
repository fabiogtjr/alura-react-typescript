import React, { useState } from "react";
import { ITask } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

import Button from "../Button";
import { FormNewTask } from "./style";

const Form = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
  const [newTask, setNewTask] = useState({
    task: "",
    time: "",
  });

  const addTask = (event: React.FormEvent) => {
    event?.preventDefault();

    setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...newTask,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);

    setNewTask({
      task: "",
      time: "",
    });
  };

  return (
    <FormNewTask onSubmit={addTask}>
      <div>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          value={newTask?.task}
          required
          onChange={({ target: { value } }) =>
            setNewTask({ ...newTask, task: value })
          }
        />
      </div>
      <div>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={newTask?.time}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          onChange={({ target: { value } }) =>
            setNewTask({ ...newTask, time: value })
          }
        />
      </div>
      <Button type="submit" text="Adicionar" />
    </FormNewTask>
  );
};

export default Form;
