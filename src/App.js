import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.getQuote = this.getQuote.bind(this)
  }
  componentWillMount() {
    this.getQuote()
  }
  getQuote() {
    // Generates a random string seed
    const r = Math.random().toString(36).substring(7)
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      const quote_item = xhr.response['results'][0] 
      this.setState({
        quote: quote_item['quote'],
        author: quote_item['author']
      })
    })
    xhr.open('GET', 'https://api.paperquotes.com/apiv1/quotes/?tags=happiness&random=' + r + '&order=?')
    xhr.responseType = 'json'
    xhr.setRequestHeader('Authorization', 'Token 5c8bd899d875c677afd103ea58e56c1a38a86f74')
    xhr.send()
  }
  render() {
    return (
      <div>
        <p id='quote'>{this.state.quote}</p>
        <p id='author'>{this.state.author}</p>
        <button id='new-quote' onClick={this.getQuote}>New quote</button>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
