import React from 'react'
import WeatherImg from '../../img/weather.jpg'
import './Weather.css'
export default function Weather() {
    return (
        <div className="container-fluid my-3">
            <div className="row align-item-center my-5">
                <div className="col-lg-8 w-left mt-lg-5 mb-1">
                    <div className='row  w-row '>
                        <div className="col align-self-center mb-4">
                            <div className='weather-brand'>Monkey-Weather</div><br />
                            <form className='search-form-weather'>
                                <input className='search-bar' placeholder="Search" aria-label="Search" type="text" />
                                <button className='search-btn'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-8 w-right">
                    <div class="card" >
                        <img class="card-img-top" src={WeatherImg} alt="Cardcap" />
                        <div class="card-body">
                            <span class="card-title">Weather of Haryana</span>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Temperature</li>
                            <li class="list-group-item">TimeZone</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
