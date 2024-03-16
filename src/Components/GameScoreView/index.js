import {Component} from 'react'

import {
  MainContainerOfScoreView,
  Heading,
  TextContainer,
  ScoreContainer,
  ScorePara,
  ScoreCountPara,
} from './styledComponent'

class GameScoreView extends Component {
  render() {
    const {score} = this.props
    return (
      <MainContainerOfScoreView>
        <TextContainer>
          <Heading>
            <span>Rock </span>
            <br />
            <span>Paper </span> <br /> <span>Scissors</span>
          </Heading>
        </TextContainer>
        <ScoreContainer>
          <ScorePara>Score</ScorePara>
          <ScoreCountPara>{score}</ScoreCountPara>
        </ScoreContainer>
      </MainContainerOfScoreView>
    )
  }
}
export default GameScoreView
