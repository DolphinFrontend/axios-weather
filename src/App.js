import React from 'react';
import './App.css';
import DateToday from './components/DateToday';
import Quote from './components/Quote';
import Time from './components/Time';
import Weather from './components/Weather';


function App() {
  return (
    <div>
       <Weather/>
       <Time/>
       <DateToday/>
       <Quote/>
    </div>
  );
}

export default App;
