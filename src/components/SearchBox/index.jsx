import React from 'react'
import { Container } from './style'

export const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <Container className='col col-sm-4' >
      <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} className='form control' placeholder='Type to Search'  />
    </Container>
  )
}
