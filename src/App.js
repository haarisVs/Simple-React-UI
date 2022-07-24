import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
// import PlayerImg from "./images/player.png"
import Data from "./data"



/*
  "id": 1,
        "title": "Player of Month",
        "description": "Lorem text is the seeding data for genreally, However anybody can add any data.",
        "price": 125,
        "coverImg": "pictures/player.png",
        "stats": {
            "rating": 5.0,
            "reviewCount": 30
        },
        "location": "online",
        "openSpots": 27
*/



function App() {
console.log(Data)

  const cards = Data.map(item => {
    return (
      <Card
          img={item.coverImg}
          rating={item['stats'].rating}
          reviewCount={item['stats'].reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
          status={item.openSpots}
         />
    )
  })

  return (
      <div>
        <Navbar/>
        <Hero/>
        <section className="card-list">
        {cards}
        </section>
        
        {/* <Card
            img={PlayerImg}
            rating="5.0"
            reviewCount=" (6) * "
            country="USA"
            title="Life is Lesson"
            price={136}


        /> */}

      </div>
  );
}

export default App;
