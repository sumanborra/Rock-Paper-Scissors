import {Component} from 'react'
import GameScoreView from './Components/GameScoreView'
import PopupView from './Components/PopupView'
import GameView from './Components/GameView'
import GameResult from './Components/GameResult'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGamePage: true,
    currentClickedId: '',
    score: 0,
    findobject: {},
    random: '',
    resultText: '',
  }

  changeCurrentId = (id, findobject, random, text) => {
    
    this.setState({
      currentClickedId: id,
      isGamePage: false,
      findobject: findobject,
      random: random,
      resultText: text,
    })
  }
  changeGameVIewButton = () => {
    this.setState({isGamePage: true})
  }

  scoreDisplayState = text => {
    if (text === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (text === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  render() {
    const {
      isGamePage,
      currentClickedId,
      score,
      findobject,
      random,
      resultText,
    } = this.state
    console.log(`resulttext${resultText}`)
    return (
      <div className="background-container">
        <GameScoreView score={score} currentClickedId={currentClickedId} />
        {isGamePage ? (
          <GameView
            choicesList={choicesList}
            changeCurrentId={this.changeCurrentId}
            scoreDisplayState={this.scoreDisplayState}
            currentClickedId={currentClickedId}
          />
        ) : (
          <GameResult
            choicesList={choicesList}
            currentClickedId={currentClickedId}
            changeGameVIewButton={this.changeGameVIewButton}
            scoreDisplayState={this.scoreDisplayState}
            findobject={findobject}
            random={random}
            resultText={resultText}
          />
        )}
        <div className="button-container">
          <PopupView />
        </div>
      </div>
    )
  }
}

export default App
