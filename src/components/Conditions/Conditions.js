import React from "react";
import classes from './Conditions.module.css';
import cold from "./cold_weather.jpg"
import hot from "./warm_weather.jpg"

const Conditions = (props) => {

    const avg = (list, start) => {
        let s = 0;
        list.slice(start, start + 8).forEach(element => {
            s += element.main.temp;
        });
        return s/8;
    }

    const Day0 = new Date();

    const Day1 = new Date();
    Day1.setDate(Day0.getDate() + 1)

    const Day2 = new Date();
    Day2.setDate(Day0.getDate() + 2)

    const Day3 = new Date();
    Day3.setDate(Day0.getDate() + 3)

    return (
        <div className={classes.Wrapper}>
            
            { props.error && <small className={classes.Small}>Please enter a valid city.</small> }

            { props.loading && <div className={classes.Loader}>Loading...</div> }

            { props.responseObj.cod === '200' ?
                <div>
                    <h2><strong>{props.responseObj.city.name} on {Day0.getDate()}/{Day0.getMonth()}/{Day0.getFullYear()}</strong></h2>

                    <div className = {classes.card_wrapper} style={{
                        backgroundImage: (avg(props.responseObj.list, 8) > 293) ? `url(${hot})` : `url(${cold})`,
                        backgroundPositionY: (avg(props.responseObj.list, 8) > 293) ? "45%" : "48%"
                        }}>
                        <div className = {classes.temp_band} style={{backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FFB288" : "#5D93E1"}}></div>
                        <div className = {classes.card_data}>
                            <span className = {classes.date} style={{
                                backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FDC1C1" : "#E0FFFF" ,
                                borderRadius: "7px"
                                }}>Today</span>
                            <p>
                                Temp: {Math.round(avg(props.responseObj.list, 0)) - 273}°C <br/>
                                Weather: {props.responseObj.list[1].weather[0].description}
                            </p>
                        </div>
                    </div>
                    
                    <div className={classes.later_wrapper}>
                        <div className = {classes.card_wrapper} style={{
                            backgroundImage: (avg(props.responseObj.list, 8) > 293) ? `url(${hot})` : `url(${cold})`,
                            backgroundPositionY: (avg(props.responseObj.list, 8) > 293) ? "45%" : "48%"
                        }}>
                            <div className = {classes.temp_band} style={{backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FFB288" : "#5D93E1"}}></div>
                            <div className = {classes.card_data}>
                                <span className = {classes.date} style={{
                                    backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FDC1C1" : "#E0FFFF" , 
                                    borderRadius: "7px"
                            }}>Tomorrow</span>
                                <p>
                                    Temp: {Math.round(avg(props.responseObj.list, 8)) - 273}°C <br/>
                                    Weather: {props.responseObj.list[9].weather[0].description}
                                </p>
                            </div>
                        </div>
                        <div className = {classes.card_wrapper} style={{
                            backgroundImage: (avg(props.responseObj.list, 8) > 293) ? `url(${hot})` : `url(${cold})`,
                            backgroundPositionY: (avg(props.responseObj.list, 8) > 293) ? "45%" : "48%"
                        }}>
                            <div className = {classes.temp_band} style={{backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FFB288" : "#5D93E1"}}></div>
                            <div className = {classes.card_data}>
                                <span className = {classes.date} style={{
                                    backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FDC1C1" : "#E0FFFF" , 
                                    borderRadius: "7px"
                            }}>{Day2.getDate()}/{Day2.getMonth()}/{Day2.getFullYear()}</span>
                                <p>
                                    Temp: {Math.round(avg(props.responseObj.list, 16)) - 273}°C <br/>
                                    Weather: {props.responseObj.list[17].weather[0].description}
                                </p>
                            </div>
                        </div>
                        <div className = {classes.card_wrapper}  style={{
                            backgroundImage: (avg(props.responseObj.list, 8) > 293) ? `url(${hot})` : `url(${cold})`,
                            backgroundPositionY: (avg(props.responseObj.list, 8) > 293) ? "45%" : "48%"
                        }}>
                            <div className = {classes.temp_band} style={{backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FFB288" : "#5D93E1"}}></div>
                            <div className = {classes.card_data}>
                                <span className = {classes.date} style={{
                                    backgroundColor: (avg(props.responseObj.list, 8) > 293) ? "#FDC1C1" : "#E0FFFF",
                                    borderRadius: "7px"
                            }}>{Day3.getDate()}/{Day3.getMonth()}/{Day3.getFullYear()}</span>
                                <p>
                                    Temp: {Math.round(avg(props.responseObj.list, 24)) - 273}°C <br/>
                                    Weather: {props.responseObj.list[25].weather[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;

/* 
(avg(props.responseObj.list, 8) > 293) ? `url(${hot})` : `url(${cold})`
*/