import {
  MainContainerGameView,
  ButtonsContainer,
  ButtonCutom,
  Image,
} from './styledComponent'

const GameView = props => {
  const {choicesList, changeCurrentId, scoreDisplayState} = props
  let findobject
  const random = Math.floor(Math.random() * choicesList.length)
  // console.log(currentClickedId)
  console.log(`random ${random}`)
  let resultText
  const clickedId = event => {
    findobject = choicesList.find(each => each.id === event.currentTarget.id)
    
    if (event.currentTarget.id === choicesList[random].id) {
      resultText = 'IT IS DRAW'
      console.log("Itis")
    } else if (
      event.currentTarget.id === 'PAPER' &&
      choicesList[random].id === 'ROCK'
    ) {
      resultText = 'YOU WON'
    } else if (
      event.currentTarget.id === 'SCISSORS' &&
      choicesList[random].id === 'ROCK'
    ) {
      resultText = 'YOU LOSE'
    } else if (
      event.currentTarget.id === 'ROCK' &&
      choicesList[random].id === 'PAPER'
    ) {
      resultText = 'YOU LOSE'
    } else if (
      event.currentTarget.id === 'SCISSORS' &&
      choicesList[random].id === 'PAPER'
    ) {
      resultText = 'YOU WON'
    } else if (
      event.currentTarget.id === 'ROCK' &&
      choicesList[random].id === 'SCISSORS'
    ) {
      resultText = 'YOU WON'
    } else if (
      event.currentTarget.id === 'PAPER' &&
      choicesList[random].id === 'SCISSORS'
    ) {
      resultText = 'YOU LOSE'
    }
    changeCurrentId(event.currentTarget.id, findobject, random, resultText)
    scoreDisplayState(resultText)
  }
  return (
    <MainContainerGameView>
      <ButtonsContainer>
        <ButtonCutom
          type="button"
          onClick={clickedId}
          id={choicesList[0].id}
          data-testid="rockButton"
        >
          <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </ButtonCutom>
        <ButtonCutom
          type="button"
          onClick={clickedId}
          id={choicesList[1].id}
          data-testid="scissorsButton"
        >
          <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </ButtonCutom>
      </ButtonsContainer>
      <ButtonCutom
        type="button"
        onClick={clickedId}
        id={choicesList[2].id}
        data-testid="paperButton"
      >
        <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </ButtonCutom>
    </MainContainerGameView>
  )
}
export default GameView
