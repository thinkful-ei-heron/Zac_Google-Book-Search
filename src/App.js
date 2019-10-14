import React from 'react';
import Form from './Form';
import List from './List';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class App extends React.Component {
  state = {
    books: [],
    loading: false,
    error: null
  }

  // Search function called by sumbitting search form
  search = (ev, term) => {
    ev.preventDefault();
    this.setState({loading: true}); // activate loading indicator

    fetch(`${BASE_URL}${term}`)
      .then(res => res.json())
      .then(books => this.setState({
        books: books.items,
        loading: false // deactivate loading indicator
      }));
  }
  
  render() {
    return (
      <div>
        <Form handleSearch={this.search}/>
        <List books={this.state.books} loading={this.state.loading} />
      </div>
    );
  }
}
