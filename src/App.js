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

  search = (ev, term) => {
    ev.preventDefault();
    fetch(`BASE_URL${term}`)
      .then(res => res.json())
      .then(books => this.setState({books}));
    console.log(this.state.books);
  }
  
  render() {
    return (
      <div>
        <Form handleSearch={this.search}/>
        <List />
      </div>
    );
  }
}
