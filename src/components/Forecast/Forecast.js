import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});

        setLoading(true);

        let uriEncodedCity = encodeURIComponent(city);

        
        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${uriEncodedCity}&rapidapi-key=1f801c3222msh64f9fe6a43ed718p1cf750jsnd05a4ad3925f`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.cod !== '200') {
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true)
                setLoading(false);
                console.error(err)
            });
        setCity('');
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>

            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Search City"
                    maxLength="50"
                    className={classes.TextInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className={classes.Button} type="submit">Forecast Weather</button>
                
            </form>
            <Conditions responseObj={responseObj} error={error} loading={loading} />
        </div>
    )
}
export default Forecast;