import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  TopContainer,
  HeadingContainer,
  ScoreContainer,
  HeadText,
  ScoreText,
  Score,
  RulesButton,
  CloseButton,
  RulesImage,
  PopupContainer,
  ModalContainer,
  ButtonList,
  ButtonItem,
  ButtonGame,
  ButtonImage,
  ResultContainer,
  ResultTextImage,
  ResultImageContainer,
  ResultText,
  ResultButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class GameHome extends Component {
  state = {
    score: 0,
    displayResults: false,
    youImage: '',
    opponentImage: '',
    result: '',
  }

  renderScore = () => {
    const {score} = this.state
    return (
      <TopContainer>
        <HeadingContainer>
          <HeadText>Rock Paper Scissors</HeadText>
        </HeadingContainer>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreContainer>
      </TopContainer>
    )
  }

  onButtons = (youImage, youId) => {
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentImage = choicesList[randomNumber].imageUrl
    const opponentId = choicesList[randomNumber].id
    const {score} = this.state
    let sum = score
    let result
    if (opponentId === youId) {
      result = 'IT IS DRAW'
      sum += 0
    } else if (opponentId !== youId) {
      if (opponentId === 'ROCK' && youId === 'SCISSORS') {
        result = 'YOU LOSE'
        sum -= 1
      } else if (opponentId === 'PAPER' && youId === 'ROCK') {
        result = 'YOU LOSE'
        sum -= 1
      } else if (opponentId === 'SCISSORS' && youId === 'PAPER') {
        result = 'YOU LOSE'
        sum -= 1
      } else {
        result = 'YOU WON'
        sum += 1
      }
    }
    this.setState({
      youImage,
      opponentImage,
      result,
      score: sum,
      displayResults: true,
    })
  }

  playAgain = () => {
    this.setState({
      displayResults: false,
      youImage: '',
      opponentImage: '',
      result: '',
    })
  }

  renderResult = () => {
    const {opponentImage, result, youImage} = this.state
    return (
      <ResultContainer>
        <ResultTextImage>
          <ResultImageContainer>
            <ResultText>YOU</ResultText>
            <ButtonImage src={youImage} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>OPPONENT</ResultText>
            <ButtonImage src={opponentImage} alt="opponent choice" />
          </ResultImageContainer>
        </ResultTextImage>
        <ResultText>{result}</ResultText>
        <ResultButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </ResultButton>
      </ResultContainer>
    )
  }

  renderButtons = () => (
    <ButtonList>
      {choicesList.map(eachButton => (
        <ButtonItem key={eachButton.id}>
          <ButtonGame
            type="button"
            data-testid={eachButton.test}
            onClick={() => this.onButtons(eachButton.imageUrl, eachButton.id)}
          >
            <ButtonImage src={eachButton.imageUrl} alt={eachButton.id} />
          </ButtonGame>
        </ButtonItem>
      ))}
    </ButtonList>
  )

  renderRules = () => (
    <PopupContainer>
      <Popup
        modal
        trigger={
          <RulesButton type="button" className="trigger-button">
            Rules
          </RulesButton>
        }
      >
        {close => (
          <ModalContainer>
            <CloseButton
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine color="#223a5f" fontSize="25px" />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ModalContainer>
        )}
      </Popup>
    </PopupContainer>
  )

  render() {
    const {displayResults} = this.state
    return (
      <AppContainer>
        {this.renderScore()}
        {displayResults ? this.renderResult() : this.renderButtons()}
        {this.renderRules()}
      </AppContainer>
    )
  }
}
export default GameHome
