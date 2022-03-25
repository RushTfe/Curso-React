import React from 'react'

export const Small = React.memo(({ value = 10 }) => {

  console.log('Me volví a llamar =(')

  return (
    <small>{ value }</small>
  )
})