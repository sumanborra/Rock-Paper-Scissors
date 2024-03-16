import {
  MainContainerResult,
  ImageContainer,
  ImageElement,
  TextContainerResult,
  Heading,
  Paragrap,
  CustomButton,
} from './styledComponent'

const GameResult = props => {
  const {choicesList, changeGameVIewButton, findobject, random, resultText} =
    props
  console.log(findobject)
  console.log(random)
  console.log(resultText)
  const playAgainClicked = () => {
    changeGameVIewButton()
  }

  return (
    <MainContainerResult>
      <ImageContainer>
        <div>
          <Paragrap>YOU</Paragrap>
          <ImageElement src={findobject.imageUrl} alt="your choice" />
        </div>
        <div>
          <Paragrap>OPPONENT</Paragrap>
          <ImageElement
            src={choicesList[random].imageUrl}
            alt="opponent choice"
          />
        </div>
      </ImageContainer>
      <TextContainerResult>
        <Heading>{resultText}</Heading>
        <CustomButton type="button" onClick={playAgainClicked}>
          PLAY AGAIN
        </CustomButton>
      </TextContainerResult>
    </MainContainerResult>
  )
}
export default GameResult
