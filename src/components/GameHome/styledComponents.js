import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const TopContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 10px 20px 10px 20px;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeadText = styled.h1`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
  width: 20%;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  width: 100px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 25px;
  margin-bottom: 0;
  margin-top: 0;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-top: 0;
  margin-bottom: 0;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: 'Bree Serif';
  width: 80%;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  align-self: flex-end;
  height: 30px;
  width: 100px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 80vh;
  width: 90%;
  @media (max-width: 576px) {
    height: 50vh;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 50px;
  align-self: flex-end;
`
export const RulesImage = styled.img`
  width: 95%;
  height: 90%;
`
export const ButtonList = styled.ul`
  width: 80%;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const ButtonItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 50%;
`

export const ButtonGame = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const ButtonImage = styled.img`
  width: 100px;
  height: 100px;
`
export const ResultContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const ResultTextImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 20px;
  align-self: center;
`

export const ResultButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  height: 30px;
  width: 120px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
