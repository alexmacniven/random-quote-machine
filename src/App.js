import React, { useEffect, useState } from 'react'
import './index.css'

const App = () => {
	const [quote, setQuote] = useState('Random quotes are like a box of chocolates...');
	const [author, setAuthor] = useState('Alex');

	const newQuote = () => {
		const randInt = Math.random().toString(36).substring(7);
		const url = 'https://api.paperquotes.com/apiv1/quotes/?tags=happiness&random=' + randInt + '&order=?';
		const headers = { headers : { 'Authorization': 'Token 5c8bd899d875c677afd103ea58e56c1a38a86f74' } }

		fetch(url, headers)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setAuthor(data['results'][0]['author']);
				setQuote(data['results'][0]['quote']);
			}); 
	};

	useEffect(newQuote, []);

	return (
		<div id='quote-box'>
			<p id='text'>{quote}</p>
			<p id='author'>{author}</p>
			<button id='new-quote' onClick={newQuote}>New quote</button>
			<a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet</a>
		</div>
	);
}

export default App;
