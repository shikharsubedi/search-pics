import React from 'react'

class SearchBar extends React.Component {
  state = { term: ''}
  
  onInputChange (event) {
    this.setState({ term: event.target.value })
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input 
              type='text'
              onChange={this.onInputChange.bind(this)}
              value={this.state.term}
              /> 
          </div>
        </form>
      </div>
    )
  } 
}

export default SearchBar