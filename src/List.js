import React from 'react';
import Result from './Result';

function List(props) {
	const results = props.books.map((item, index) => {
		return( <Result
			key={`res-${index}`}
			title={item.volumeInfo.title}
			subtitle={item.volumeInfo.subtitle}
			thumb={item.volumeInfo.imageLinks.smallThumbnail}
		/>);
	});

	return (
		<ul>
			{results}
		</ul>
	);
}

export default List;