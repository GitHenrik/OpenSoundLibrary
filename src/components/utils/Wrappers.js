import styled from 'styled-components'

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const AlignLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`

const AudioControlButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  color: #eaf27c;
`

export {
  HorizontalWrapper,
  VerticalWrapper,
  AudioControlButtonWrapper,
  AlignLeftWrapper
}
