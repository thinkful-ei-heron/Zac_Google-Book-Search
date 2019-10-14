import React from 'react';
import './Result.css';

function Result(props) {
	return (
		<li>
			<img src={props.thumb} alt={`${props.title} thumbnail`} className='thumbnail' />
			<h3>{props.title}{(props.subtitle) && <span>: {props.subtitle}</span>}</h3>
		</li>
	);
}

export default Result;