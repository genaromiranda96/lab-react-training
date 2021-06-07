import React from 'react';
import IdCard from './components/IdCard'

import './App.css';

function App() {
  return (
    <div className="App">
            <h2>Id Card</h2>
            <IdCard 
            picture='https://randomuser.me/api/portraits/men/44.jpg'
            lastName='Doe' 
            firstName='John'
            gender='Male'
            height='1.78m'
            birth='Tue Jul 14 1992'
            />
            <IdCard 
            picture='https://randomuser.me/api/portraits/women/44.jpg'
            firstName='Obrien' 
            lastName='Delores'
            gender='Female'
            height='1.72m'
            birth='Tue May 11 1993'
            />
    </div>
  );
}

export default App;
