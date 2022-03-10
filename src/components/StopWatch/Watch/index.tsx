import React from "react";
import { WatchDivision, WatchNumber } from "./style";

interface Props {
  time: number | undefined;
}

const Watch = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTens, minutesUnits] = String(minutes).padStart(2, "0");
  const [secondsTens, secondsUnits] = String(seconds).padStart(2, "0");

  return (
    <>
      <WatchNumber>{minutesTens}</WatchNumber>
      <WatchNumber>{minutesUnits}</WatchNumber>
      <WatchDivision>:</WatchDivision>
      <WatchNumber>{secondsTens}</WatchNumber>
      <WatchNumber>{secondsUnits}</WatchNumber>
    </>
  );
};

export default Watch;
