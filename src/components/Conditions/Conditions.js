import React from "react";
import classes from './Conditions.module.css';

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
                    <p><strong>{props.responseObj.city.name} on {Day0.getDate()}/{Day0.getMonth()}/{Day0.getFullYear()}</strong></p>
                    <p>
                        It is currently {Math.round(avg(props.responseObj.list, 0)) - 273}°C out with {props.responseObj.list[1].weather[0].description}.
                    </p>
                    <p>
                        It will be {Math.round(avg(props.responseObj.list, 8)) - 273}°C out with {props.responseObj.list[9].weather[0].description} tomorrow.
                    </p>
                    <p>
                        It will be {Math.round(avg(props.responseObj.list, 16)) - 273}°C out with {props.responseObj.list[17].weather[0].description} on {Day2.getDate()}/{Day2.getMonth()}/{Day2.getFullYear()}.
                    </p>
                    <p>
                        It will be {Math.round(avg(props.responseObj.list, 24)) - 273}°C out with {props.responseObj.list[25].weather[0].description} on {Day3.getDate()}/{Day3.getMonth()}/{Day3.getFullYear()}.
                    </p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;