import React, { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";

import Button from "../Button";
import Watch from "./Watch";
import { StyledStopWatch, Title, WatchWrapper } from "./style";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

const StopWatch = ({ selected, endTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected?.time));
  }, [selected]);

  const regressive = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000);
  };

  return (
    <StyledStopWatch>
      <Title>Escolha um card e inicie o crônometro</Title>
      <WatchWrapper>
        <Watch time={time} />
      </WatchWrapper>
      <Button onClick={() => regressive(time)} text="Começar" />
    </StyledStopWatch>
  );
};

export default StopWatch;
