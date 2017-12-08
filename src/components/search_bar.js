import React, { Component } from 'react';

class SearchBar extends Component {
constructor(props){
  super(props);

  this.state ={ term :''}
}

  render() {
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
         onChange ={event => this.onInputChange(event.target.value)}/>
      </div>            //{this.OnInputchange}
    );                   //{event => this.setState({term:event.target.value})}
  }
  //OnInputchange(event){console.log(event.target.value);} is change to es6 arrow function above onChange
onInputChange(term) {
  this.setState({term});
   this.props.onSearchTermChange(term);

}
}
export default SearchBar;
