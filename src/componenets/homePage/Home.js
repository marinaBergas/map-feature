import React from 'react'
import Header from '../header/Header';
import CardsSection  from '../cards section/CardsSection';
import SliderDate from '../slider/SliderDate';

const Home = () => {
    return (
        <div className="App py-5">
        <header className="App__header">
          <div className="container App__header__header-container">
            <div className="row App__header__header-container__header-row">
              <Header />
            </div>
          </div>
        </header>
        <section className="App__cardSection py-5">
          <div className=" container App__cardSection__card-container  ">
            <div className="row App__cardSection__card-container__card-row">
              <CardsSection />
            </div>
          </div>
        </section>
        <section className="App__schoolSection ">
          <div className="container App__schoolSection__card-container">
            <SliderDate/>
          </div>
        </section>
      </div>
    )
}

export default Home
