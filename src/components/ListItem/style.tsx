import styled from "styled-components";
type ContainerProps = {
  done: boolean;
}
export const Container = styled.div(({done}: ContainerProps) =>
  `
  display: flex;
  background-color: #20212C;
  border-radius: 10px;
  margin: 10px 0;
  align-items: center;
  padding: 10px;

  input{
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label{
    color: #CCC;
    text-decoration: ${done ? 'line-through' : 'initel'};
  }
  `
);