import React from "react";
import EventsMain from "../components/EventsMain/EventsMain";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Events = () => {
  return (
    <div>
      <Header blue />
      <EventsMain/>
      <Footer />
    </div>
  );
};

export default Events;
