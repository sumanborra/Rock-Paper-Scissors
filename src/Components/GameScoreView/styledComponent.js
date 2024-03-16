import styled from 'styled-components'

export const MainContainerOfScoreView = styled.div`
    
    background-color: transparent;
    padding: 20px;
    
    border: 2px solid #ffffff;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    
    
`
export const TextContainer = styled.div``
export const Heading = styled.h1`
    font-family: "Bree Serif";
    font-size: 28px;
    font-weight: normal;
    color: #ffffff;
`
export const ScoreContainer = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    padding: 10px;
    width: 200px;
    text-align: center;
`
export const ScorePara = styled.p`
    font-family:"Bree Serif";
    font-size: 22px;
    color:#223a5f;
    font-weight: 600;
`
export const ScoreCountPara = styled(ScorePara)`
    font-family:"Roboto";
    font-size: 52px;
    font-weight: 800;
`
