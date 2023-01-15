import { useState } from "react";
import Calendar from "./Calendar";

function App() {
  const defaultColor = "rgb(155, 155, 155)";
  const colors = [
    "rgb(241, 126, 25)",
    "rgb(240, 196, 18)",
    "rgb(77, 194, 164)",
    "rgb(42, 106, 42)",
    "rgb(28, 72, 176)",
  ];

  const [mood, setMood] = useState("");
  const [circleColor, setCircleColor] = useState(defaultColor);
  const chooseMood1 = () => {
    setMood("m1");
  };
  const chooseMood2 = () => {
    setMood("m2");
  };
  const chooseMood3 = () => {
    setMood("m3");
  };
  const chooseMood4 = () => {
    setMood("m4");
  };
  const chooseMood5 = () => {
    setMood("m5");
  };

  const colorMood = (e) => {
    console.log(e.target);
    // if (mood === "") {
    //   setCircleColor("rgb(155, 155, 155)");
    // }
    if (mood === "m1") {
      e.target.style.backgroundColor = colors[0];
    }
    if (mood === "m2") {
      e.target.style.backgroundColor = colors[1];
    }
    if (mood === "m3") {
      e.target.style.backgroundColor = colors[2];
    }
    if (mood === "m4") {
      e.target.style.backgroundColor = colors[3];
    }
    if (mood === "m5") {
      e.target.style.backgroundColor = colors[4];
    }
  };

  const reset = () => {
    document
      .querySelectorAll(".day")
      .forEach((el) => (el.style.backgroundColor = defaultColor));
  };

  function randomColor() {
    return colors[Math.floor(Math.random() * 5)];
  }

  console.log(randomColor());
  const random = () => {
    document
      .querySelectorAll(".day")
      .forEach((el) => (el.style.backgroundColor = randomColor()));
  };

  return (
    <div className="App">
      <h1>{new Date().getFullYear()} Mood Calendar</h1>
      <h2>Summary your day with how you feel.</h2>
      <p>Select mood first:</p>
      <div className="moods flex-r">
        <button
          id="m-1"
          className={mood === "m1" ? `mood m-1 selected` : `mood m-1`}
          onClick={chooseMood1}
        >
          <i className="fa-regular fa-face-laugh-squint"></i>
        </button>
        <button
          id="m-2"
          className={mood === "m2" ? `mood m-2 selected` : `mood m-2`}
          onClick={chooseMood2}
        >
          <i className="fa-regular fa-face-smile"></i>
        </button>
        <button
          id="m-3"
          className={mood === "m3" ? `mood m-3 selected` : `mood m-3`}
          onClick={chooseMood3}
        >
          <i className="fa-regular fa-face-meh"></i>
        </button>
        <button
          id="m-4"
          className={mood === "m4" ? `mood m-4 selected` : `mood m-4`}
          onClick={chooseMood4}
        >
          <i className="fa-regular fa-face-frown"></i>
        </button>
        <button
          id="m-5"
          className={mood === "m5" ? `mood m-5 selected` : `mood m-5`}
          onClick={chooseMood5}
        >
          <i className="fa-regular fa-face-sad-tear"></i>
        </button>
      </div>
      <p>Then click on the circles below:</p>
      <Calendar color={circleColor} handleClick={colorMood} />
      <button className="random" onClick={random}>
        <i className="fa-solid fa-shuffle"></i>
      </button>
      <button className="reset" onClick={reset}>
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  );
}

export default App;
