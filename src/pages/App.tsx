import React, { useState } from "react";

import Form from "../components/Form";
import List from "../components/List";
import StopWatch from "../components/StopWatch";

import { ITask } from "../types/tasks";
import { AppStyle } from "./style";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const handleSelect = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task?.id === selectedTask?.id ? true : false,
      }))
    );
  };

  const endTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks?.map((task) => {
          if (task?.id === selected?.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <AppStyle>
      <Form setTasks={setTasks} />
      <List tasks={tasks} handleSelect={handleSelect} />
      <StopWatch selected={selected} endTask={endTask} />
    </AppStyle>
  );
}

export default App;
