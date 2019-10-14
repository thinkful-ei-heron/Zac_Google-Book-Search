import React from 'react';
import Form from './Form';
import List from './List';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class App extends React.Component {
  state = {
    books: [],

    query: '', // search term
    printType: 'all', // all, books, or magazines

    loading: false,
    error: null
  }

  searchChanged = query => {
		this.setState({
			query
		});
	}

	printChanged = printType => {
		this.setState({
      printType
		});
	}

  // Search function called by sumbitting search form
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      loading: true // activate loading indicator
    });

    const query = this.state.query;
    const printType = this.state.printType;

    console.log(this.state);

    fetch(`${BASE_URL}${query}&printType=${printType}`)
      .then(res => res.json())
      .then(data => this.setState({
        books: data.items,
        loading: false // deactivate loading indicator
      }));
  }
  
  render() {
    return (
      <div>
        <Form
          search={this.state.query}
          printType={this.state.printType}
          handleSearch={this.handleSearch}
          searchChanged={this.searchChanged}
          printChanged={this.printChanged}
        />
        <List
          books={this.state.books}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
