import React, {useState} from 'react';
import Header from './Header.js'
import Nav from './Nav.js'
import Results from './Results.js'
import Movies from './request'
import './App.css';


function App() {
 
  const [selectedOption, setSelectedOption] = useState(Movies.fetchTrending)
  return (
    <div className="app">
       <Header />
       <Nav setSelectedOption = {setSelectedOption}/>
       <Results selectedOption = {selectedOption}/>
   
    </div>
  );
}

export default App;
