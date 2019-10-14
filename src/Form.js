import React from 'react';

function Form(props) {
	return(
		<form onSubmit={(ev) => {props.handleSearch(ev, 'rome')}}>
			<label for='search'>Search:</label>
			<input type='text' id='search' name='search' />
			<input type='submit' value='Submit' />
		</form>
	);
}

export default Form;