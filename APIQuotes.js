import { useState, useEffect } from 'react';

//Generating randomn quote function
   
function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);
  
     //Fetching JSON data 
    useEffect(() => {
      fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
          setQuotes(json);
          setQuote(json[0]);
        });
    }, []);
  
     //Event function to render randomn quote everytime button is clicked
    function getNewQuote() {
      setQuote(getRandomQuote(quotes));
    }

  
    return (
      <main>
        <h1>Project 3: Quote Generator</h1>
        <section>
          <button onClick={getNewQuote}>New Quote</button>
          <h3>
            {quote?.text}
          </h3>
          <i>- {quote?.author}</i>
        </section>
      </main>
    );
  }
