import React from 'react';

function Form(props) {
	return(
		<form onSubmit={e => {props.handleSearch(e)}}>
			<label htmlFor='search'>Search:</label>
			<input type='text' id='search' name='search' required
				value={props.search}
				onChange={e => {props.searchChanged(e.target.value)}}
			/>
			<input type='submit' value='Submit' />
		</form>
	);
}

export default Form;