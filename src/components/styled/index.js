import styled from "styled-components"

export const StyledButton = styled.button`
   background: none!important;
  border: none;
  padding: 0!important;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`

export const TodoContainer  = styled.ul`
   list-style-type: none;
`

export const HeaderContainer = styled.div`
  background-color: #8533ff;
  padding: 40px 10px 10px;
  color: white;
`

export const TodoItem = styled.li`
  display: flex;
  padding: 20px;
  &:hover {
    background-color: #e6e6ff;
  }
`

export const Checkbox = styled.input`
  padding: 10px;
  zoom: 1.5;
`
