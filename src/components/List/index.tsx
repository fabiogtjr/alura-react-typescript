import React from "react";
import { ITask } from "../../types/tasks";
import Item from "./Item/item";
import { StyledList } from "./style";

interface Props {
  tasks: ITask[];
  handleSelect: (selectedTask: ITask) => void;
}

const List = ({ tasks, handleSelect }: Props) => {
  return (
    <StyledList>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks?.map((item) => (
          <Item handleSelect={handleSelect} key={item?.id} {...item} />
        ))}
      </ul>
    </StyledList>
  );
};

export default List;
