import React, {Component} from 'react'; 
import Title from './component/Title'; 
import Weather from './component/Weather';
import Form from './component/Form';

class App extends Component {


  state = {
    longitude: undefined,
    latitude: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault(); // It is use to remove the whole page load when we press
    const longitude = e.target.elements.longitude.value;
    const latitude = e.target.elements.latitude.value;
    const api_call = await fetch(`https://freetestapi.com/api/v1/weathers?longitude=${longitude}&latitude=${latitude}`, {method: 'get'});
    const data = await api_call.json(); // Converting the data into readable with
    // console.log(data);
    console.log("Searching for:", longitude, latitude); // Log the values being searched for

    // Use a tolerance for floating-point precision issues if needed
    const tolerance = 0.0001; // Adjust as needed
  
    // Find the location with matching longitude and latitude
    const location = data.find(loc =>
      Math.abs(loc.longitude - longitude) < tolerance &&
      Math.abs(loc.latitude - latitude) < tolerance
    );
  
    console.log("Found location:", location); // Log the found location 


    if (location) {
        this.setState({
            longitude: location.longitude,
            latitude: location.latitude,
            temperature: location.temperature,
            humidity: location.humidity,
            description: location.weather_description,
            wind: location.wind_speed,
            error:""
          });
    } else {
      this.setState({
        longitude: undefined,
        latitude: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Please Enter the value"
      })
    }
  }

 
  render() {
    return(
        <div className='container'>  
            
            <div className="dropdown-menu position-static d-flex flex-column flex-lg-row align-items-stretch justify-content-start p-3 rounded-3 shadow-lg" data-bs-theme="dark">
            <div className="col-lg-auto pe-3">
                    <Title /> 
            </div>
            <div className="d-none d-lg-block vr mx-4 opacity-10">&nbsp;</div>
              <hr className="d-lg-none" />
                <Form getWeather={this.getWeather} />  
                <Weather
                          longitude={this.state.longitude}
                          latitude={this.state.latitude}
                          temperature={this.state.temperature}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          wind = {this.state.wind}
                          error={this.state.error}
                  />
              </div> 
                               
 </div>
  )}
}

export default App;
