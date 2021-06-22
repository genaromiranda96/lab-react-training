import React from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'




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
            <div> 
            <CreditCard rounder
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />


            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white" /> 
              </div> 

        </section>

        <section className="container">
            <h2>Raiting</h2>
            <Rating>0</Rating>
            <Rating>1.49</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
        </section>

        <section className="container">
            <h2>DriveCard</h2>
            <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }} />
          <DriverCard
                      name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
             model: "Audi A3",
             licensePlate: "BE33ER"
            }} />
        </section>

        <section className="container">
            <h2>Button Likes</h2>
            <LikeButton/>  <LikeButton/>
        </section>

        <section className="container">
            <h2>Clickable Picture</h2>
            <ClickablePicture
              img='/img/persons/maxence.png'
              imgClicked='/img/persons/maxence-glasses.png'
              />
        </section>

    </div>
  );
}

export default App;