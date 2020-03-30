import  React from 'react'
import Info from "./components/info"
import Weather from "./components/weather"
import Form from "./components/form"




const API_KEY = "ac116b1ae299972d9c597f192212f951";
class App extends React.Component {

state = {
  temp: undefined,
  city: undefined,
  countty: undefined,
  sunrise: undefined,
  sunset:undefined,
  error:undefined


}




gettingWeather = async (e) => {
e.preventDefault()
const city = e.target.elements.city.value;




  if (city) {
    const api_url = await

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const data = await api_url.json();

this.setState({
temp:data.main.temp,
city: data.name,
country:data.sys.country,
sunrise:data.sys.sunrise,
sunset:data.sys.sunset,
error: ''

  });
  }
else {
  this.setState({
    temp: undefined,
    city: undefined,
    countty: undefined,
    sunrise: undefined,
    sunset:undefined,
    error:"Введите город"
});

}}
 render () {
   return(
<div className="grid-container">
<div className="top">
<Info/>
</div>

<div className= "left">
<Form weatherMethod = {this.gettingWeather}/>
</div>

<div className = "right">
<Weather
temp={this.state.temp}
city={this.state.city}
country={this.state.country}
sunrise={this.state.sunrise}
sunset={this.state.sunset}
error={this.state.error}

/>
</div>

</div>   )
 }
}


export default App