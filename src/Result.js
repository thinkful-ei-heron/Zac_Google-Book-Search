import React from 'react';
import './Result.css';

function Result(props) {
	return (
		<li>
			<img src={props.thumb} alt={`${props.title} thumbnail`} className='thumbnail' />
			<div className='titleBlock'>
				<h3>{props.title}</h3>
				{(props.subtitle) && <h4>{props.subtitle}</h4>}
				<p className='authorLine'><i>{props.author}, {props.year}</i></p>
				<p className='blurb'>{props.blurb}</p>
			</div>
		</li>
	);
}

export default Result;