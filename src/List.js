import React from 'react';
import Result from './Result';

// Generates list of results
function List(props) {
	if (props.loading) return (<h2>Loading...</h2>); // Display loading indicator

	// TODO: generate proper author string

	// TODO: edit text as it passes through to fix apostrophe codes

	const results = props.books.map((item, index) => {
		return( <Result
			key={`res-${index}`}
			title={item.volumeInfo.title}
			subtitle={item.volumeInfo.subtitle}
			thumb={item.volumeInfo.imageLinks.smallThumbnail}
			author={item.volumeInfo.authors}
			year={item.volumeInfo.publishedDate}
			// blurb={item.searchInfo.textSnippet}
		/>);
	});

	return (
		<ul>
			{results}
		</ul>
	);
}

export default List;