import React from "react";
import PropTypes from 'prop-types';

const Weather = props => (
    <div>
        <nav class="col-lg-8">
                  <ul class="list-unstyled d-flex flex-column gap-2"> 
            {
                props.longitude && props.latitude && <li className="mb-auto"> Co-oridinater: 
                <span className="weather_value"> {props.longitude}, {props.latitude}</span>
                </li>
            }
            {
                props.temperature && <li className="mb-auto" >Temperature :
                <span className="weather_value">{props.temperature}</span>
                </li>
            }
              {props.humidity && <li className="mb-auto" >Humidity :
                <span className="weather_value" > {props.humidity}?</span>
                </li>
                } 
                {props.description && <li className="mb-auto" >Description :
                <span className="weather_value">{props.description}</span>
                </li>
                }

                { props.wind && <li className="mb-auto" >Wind : 
                <span className="weather_value">{props.wind}</span>
                </li>
                }

                {
                    props.error && <li className="mb-auto">{props.error}</li>
                }
                    </ul>
                    </nav>
                </div>
            );

            Weather.propTypes = {
                longitude: PropTypes.number,
                latitude: PropTypes.number,
                temperature: PropTypes.number,
                humidity: PropTypes.number,
                description: PropTypes.string,
                wind: PropTypes.number,
                error: PropTypes.string
              };
            export default Weather;

