// import React from 'react';

// const SearchBar = () => (
//   <form role="search">
//     <label htmlFor="searchQuestions">
//       <i className="fa fa-search fa-2x" aria-hidden="true" />
//       <input type="text" id="searchQuestions" name="searchQuestions" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." maxLength="1000" />
//     </label>
//   </form>
// );

// export default SearchBar;

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });  
  }

  render() {
    return (
      <form role="search">
        <label htmlFor="searchQuestions">
          <i className="fa fa-search fa-2x" aria-hidden="true" />
          <input type="text" 
          id="searchQuestions"  
          name="searchQuestions"
          value={this.state.searchQuery}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."  
          maxLength="1000" 
          onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
