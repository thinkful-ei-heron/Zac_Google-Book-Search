import React from 'react';

function Form(props) {
		return(
			<form onSubmit={e => {props.handleSearch(e)}}>
				<div className='form-row1'>
					<label htmlFor='search'>Search:</label>
					<input type='text' id='search' name='search' required
						value={props.query}
						onChange={e => {props.searchChanged(e.target.value)}}
					/>
					<input type='submit' value='Submit' />
				</div>
				<div className='form-row2'>
					<label htmlFor='printType'>Print Type:</label>
					<select id='printType'
						value={props.printType}
						onChange={e => {props.printChanged(e.target.value)}}>
							<option value='all'>All</option>
							<option value='books'>Books</option>
							<option value='magazines'>Magazines</option>
					</select>
				</div>
			</form>
		);
}

export default Form;