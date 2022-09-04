import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=a8ea80f8265e4856ac1132803221807&q=${search}&aqi=no`
            const response = await fetch(url);
            const resJson = await response.json(); 
            console.log(resJson);
            setCity(resJson.current);
        };

        fetchApi();
    },[search] )

    return(
        <>  
        
            <div className="box">
            <h2 className="title">Weather Api Task</h2>
                <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={ (event) => { setSearch(event.target.value) } } />
                </div>
         
        {!city ? (
            <p className="errorMsg"> No Data Found </p>
        )  : (
            <div>
            <div className="info">
            <h3 className="location">                     
            <i className="fas fa-cloud"> </i>{search}
            </h3>
            <h1 className="temp">
            {city.temp_c}°Cel
            </h1>
            <h3 className="temp2"> Humidity : {city.humidity }   ||    Feels like : {city.feelslike_c} </h3>
            

            <p className="temp3"> <i className="fas fa-sun"> </i> Have a great day</p>
        </div>

        <div className = "wave -one"></div>
        
        <div className = "wave -two"></div>
        <div className = "wave -three"></div>
        </div>
        )}
            </div>
        </>
    )
}

export default Tempapp;