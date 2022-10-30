import React from 'react'
import Card from './components/Card.js'
import Hero from './components/Hero.js'
import Navbar from './components/Navbar.js'
import Data from './Data'
import './App.css';



function App() {
  const cardData = Data.map(info => {
    return(
      <Card     
          key={info.id}
          info={info}
          // img={info.coverImg} 
          // rating={info.stats.rating}
          // reviewCount={info.stats.reviewCount}
          // location={info.location}
          // title={info.title}
          // price={info.price}
          // openSpots={info.openSpots}
      />      

    )
  })

  return(
  <div className="container">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cardData}
      </section>
  </div>
)}


export default App