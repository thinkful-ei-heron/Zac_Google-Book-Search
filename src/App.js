import React from 'react';
import Form from './Form';
import List from './List';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class App extends React.Component {
  state = {
    books: [],
    search: {
      value: ''
    },
    loading: false,
    error: null
  }

  searchChanged = query => {
		this.setState({
			search: {
        value: query
      }
		});
	}

  // Search function called by sumbitting search form
  handleSearch = e => {
    e.preventDefault();
    this.setState({loading: true}); // activate loading indicator

    const query = this.state.search.value;

    fetch(`${BASE_URL}${query}`)
      .then(res => res.json())
      .then(books => this.setState({
        books: books.items,
        loading: false // deactivate loading indicator
      }));
  }
  
  render() {
    return (
      <div>
        <Form
          search={this.state.search.value}
          handleSearch={this.handleSearch}
          searchChanged={this.searchChanged}
        />
        <List
          books={this.state.books}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
