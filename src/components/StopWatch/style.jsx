import styled from "styled-components";

export const StyledStopWatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;

  button {
    background-color: #88bcd1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009f;
    color: #272626;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;

    &:active {
      background-color: #7ca6b7;
      box-shadow: 2px 2px 4px #0000009f inset;
      cursor: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const WatchWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    font-size: 15rem;
  }
  align-items: center;
  background-color: #7687a1;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009f;
  box-sizing: border-box;
  display: flex;
  font-size: 5rem;
  justify-content: center;
  margin-bottom: 24px;
  padding: 16px 12px;
  width: 100%;
`;
