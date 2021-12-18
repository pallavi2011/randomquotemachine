
import './style.css';
import React, {useState, useEffect} from 'react';



function getQuote(){
  var x= Math.floor(Math.random()*(15-1)+1);
  return fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData['quotes'][x]);
    return (responseData['quotes'][x]);
    })

    .catch((error) => {
      console.error(error);
    });
}


const App = () => {

  const [text, setText] = useState('');

  const [author, setAuthor] = useState('');
  
  useEffect(() => {

    getQuote().then((data) => {
      setText(data.quote);
      setAuthor(data.author);
    });
  }, []);

  const newQuote = () =>{
    getQuote().then((data) => {
      setText(data.quote);
      setAuthor(data.author);
    });
  }
  return (
    <div className="App">
      <div className='main'>
      <div id="quote-box">
        <p id="text">{'"'}{text}</p>
        <h2 id="author">-{' '}{author}</h2>
      <div className='actions'>
        <button id="new-quote" onClick={e => newQuote()}>New quote</button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${text}`}>
          <i className="fab fa-twitter"></i>
        </a>
        
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
