import styled, { css } from "styled-components";

export const ListItem = styled.li`
  background-color: #4d4d4d;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009f;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #d0d0d0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.8rem;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #292929;
      box-shadow: 2px 4px 4px #0000009f inset;
    `};

  ${({ completed }) =>
    completed &&
    css`
      background-color: #566f42;
      cursor: auto;
    `};
`;

export const DoneTaskIcon = styled.span`
  display: block;
  background-image: url("../../../assets/img/check-mark.svg");
  background-repeat: no-repeat;
  background-size: 38px 38px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 42px;
  height: 43px;
`;
