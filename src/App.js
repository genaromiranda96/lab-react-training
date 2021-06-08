import React from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'




import './App.css';

function App() {
  return (
    <div className="App">
        <section className="container" > 
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
        </section>

        <section className="container">
            <h2>Greetings</h2>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
        </section>

        <section className="container">
            <h2>Random</h2>
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>
        </section>

        <section className="container">
            <h2>BoxColor</h2>
            <BoxColor r={255} g={0} b={0}>rgb(255,0,0)</BoxColor>
            <BoxColor r={128} g={255} b={0}>rgb(255,0,0)</BoxColor>
        </section>

        <section className="container">
            <h2>CreditCard</h2>
            <>
            <CreditCard rounder
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />
              </>

              <>
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
              </>
              <>
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white" /> 
              </>         


        </section>
    </div>
  );
}

export default App;