import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const TodoItem = ({ id, done, text }) => {
  return (
    <StyledTodoItemBlock>
      <StyledCheckCircle>{done && <MdDone />}</StyledCheckCircle>
      <Text done={done}>{text}</Text>
      <StyledRemove>
        <MdDelete />
      </StyledRemove>
    </StyledTodoItemBlock>
  );
};

export default TodoItem;

const StyledRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const StyledTodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${StyledRemove} {
      display: initial;
    }
  }
`;

const StyledCheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;
