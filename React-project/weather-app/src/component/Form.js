import React from 'react';


const Form = props => (
            <form onSubmit={props.getWeather}> 
                <div class="input-group mb-3"> 
                    <input type="number" name="longitude" step="any" placeholder="Longitude... (Ex-159)" class="form-control" aria-label="longitude" aria-describedby="basic-addon1" required/>
                </div>
                <div class="input-group mb-3"> 
                    <input type="number" name="latitude" step="any" placeholder="Longitude... (Ex-159)" class="form-control" aria-label="longitude" aria-describedby="basic-addon1" required/>
                </div> 
                <button type="submit" class="btn btn-success">Get Weather</button>
            </form>
    );
export default Form;