import React from "react";
import { ITask } from "../../../types/tasks";
import { DoneTaskIcon, ListItem } from "./style";

interface Props extends ITask {
  handleSelect: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, completed, id, handleSelect }: Props) => {
  return (
    <ListItem
      selected={selected ? 1 : 0}
      completed={completed ? 1 : 0}
      onClick={() =>
        !completed &&
        handleSelect({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <DoneTaskIcon aria-Label="Task Done" />}
    </ListItem>
  );
};

export default Item;
