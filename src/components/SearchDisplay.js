import React from 'react'

const SearchDisplay = ({ imageData }) => {

  const result = imageData.map(item => (
  <li key={item.id}>
    <img src={item.url} alt={item.alt} />
  </li>
  ))
  return (
    <ul style={{ listStyle: 'none'}}>
      {result}
    </ul>
  )
}

export default SearchDisplay