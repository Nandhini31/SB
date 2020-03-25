import styled from "styled-components"

export const StyledButton = styled.button`
   background: none!important;
  border: none;
  padding: 0!important;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`

export const TodoContainer = styled.ul`
   list-style-type: none;
    margin: 0;
    padding: 0;
`

export const HeaderContainer = styled.div`
  background-color: #8533ff;
  padding: 40px 10px 10px;
  color: white;
`

export const TodoItem = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  ${({completed}) => completed && `
    textDecoration: "line-through";
  `}

  &:hover {
    background-color: #e6e6ff;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

export const Checkbox = styled.input`
  padding: 10px;
`

export const Item = styled.div`
  font-size: 16px;
`

export const IconContainer = styled.div`
  font-size: 14px;
`
