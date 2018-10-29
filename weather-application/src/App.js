import React from "react";
import Titles from "./component/Titles";
import Form  from "./component/Form";
import Weather from "./component/Weather"

const API_KEY = "15d169a904fcf64fcc04b736182ee385";
class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
  }
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
};

export default App;