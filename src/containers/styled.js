import styled from "styled-components"

export const StyledButton = styled.button`
   background: none!important;
  border: none;
  padding: 0!important;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`

export const AppContainer = styled.div`
`

export const LeftDiv = styled.div`
  border: 1px solid;
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`

export const RightDiv = styled.div`
  border: 1px solid;
  margin-left: 200px;
  font-size: 28px; 
`

export const Image = styled.img`
  border-radius: 50%;
  height: 40px;
`

export const ProfileContainer = styled.div`
  display: flex;
`

export const Name = styled.div`
  padding: 10px;
`

export const ListContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #e6e6ff;
`

export const ListName = styled.div`
  padding-left: 10px;
`
