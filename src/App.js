import React from "react";
import PropTypes from "prop-types";

const koyotae = [
  {
    name: "sinji",
    img:
      "http://img.etoday.co.kr/pto_db/2015/09/20150904111731_706635_395_699.jpg",
    rating: 1
  },
  {
    name: "jongmin",
    img:
      "https://file.mk.co.kr/meet/neds/2014/01/image_readtop_2014_107902_13902783731185927.jpg",
    rating: 2
  },
  {
    name: "bbackga",
    img: "http://image.munhwa.com/gen_news/201504/20150402MW14025396706_b.jpg",
    rating: 3
  }
];

function Greeting({ name, src, rating }) {
  return (
    <div>
      <h2>my name is {name}</h2>
      <img src={src} alt={name} />
      <h2>{rating}</h2>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  console.log(
    <Greeting
      name={koyotae[0].name}
      src={koyotae[0].img}
      rating={koyotae[0].rating}
      key={1}
    />
  );
  return (
    <div className="App">
      {koyotae.map((member, index) => (
        <Greeting
          name={member.name}
          src={member.img}
          key={index}
          rating={member.rating}
        />
      ))}
    </div>
  );
}

export default App;
