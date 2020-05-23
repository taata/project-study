import React, { Fragment, useEffect, useState } from "react";

import { BASE_API, THE_CAT_API } from "../Utils/constants";

import "./home.css";

const Home = () => {
  const [animals, setAnimals] = useState([]);
  // const [images, setImages] = useState([]);
  const catImage =
    "https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg";

  useEffect(() => {
    fetch(`${BASE_API}/facts/random?amount=12`, {
      headers: { Authorization: process.env.REACT_APP_SECRET_KEY },
    })
      .then((res) => res.json())
      .then((res) => setAnimals(res));
  }, []);

  // useEffect(() => {
  //   fetch(`${THE_CAT_API}/v1/images/search?limit=12`)
  //     .then((res) => res.json())
  //     .then((res) => setImages(res));
  // }, []);

  const renderText = () => {
    const animal = animals.map((animal) => (
      <Fragment>
        <div className="animals__content">
          <img src={catImage} alt={animal.type} />
          <p>{animal.text}</p>
        </div>
      </Fragment>
    ));
    return <div className="animals"> {animal} </div>;
  };

  const render = () => {
    return (
      <Fragment>
        <h1 className="title"> Random facts cats! </h1>
        {renderText()}
      </Fragment>
    );
  };
  return animals.length > 0 ? render() : "Loading";
};

export default Home;
