import React from 'react'
import RecentMediaHeader from './RecentMediaHeader'
import RecentMediaContent from './RecentMediaContent'
const RecentMedia = props => {
  return (
    <>
    <RecentMediaHeader/>
    <RecentMediaContent audioCards={props.audioCards}/>
    </>
  )
}

export default RecentMedia