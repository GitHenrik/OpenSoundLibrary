import React from 'react'
import AudioCard from './AudioCard'
import PropTypes from 'prop-types'
import { VerticalWrapper } from './utils/Wrappers'
import styled from 'styled-components'

const GridView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (min-width: 768px) {
    width: 768px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 230px 230px 230px;
    grid-template-rows: 342px;
    grid-auto-flow: row;
    row-gap: 46px;
  }
`
/*
  listViewSelected toggles list / grid view
 */
const RecentMediaContent = ({ audioCards, listViewSelected }) => {
  if (listViewSelected) {
    return (
      <VerticalWrapper>
        {audioCards.map((audioData) => {
          return (
            <AudioCard
              key={audioData.id}
              audioData={audioData}
              listViewSelected={listViewSelected}
            />
          )
        })}
      </VerticalWrapper>
    )
  }
  return (
    <GridView>
      {audioCards.map((audioData) => {
        return (
          <AudioCard
            key={audioData.id}
            audioData={audioData}
            listViewSelected={listViewSelected}
          />
        )
      })}
    </GridView>
  )
}

RecentMediaContent.propTypes = {
  audioCards: PropTypes.array,
  listViewSelected: PropTypes.bool
}

export default RecentMediaContent
