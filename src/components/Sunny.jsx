import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState("Pakistan");
    const [weather, setWeather] = useState({});

    const generateWeather = async () => {
        try {
            const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
            const res = await axios.get(url, {
                headers: {
                    'X-Api-Key': 'IU/pp6XuBkAanAFQ/DWBog==iaxgGVMpHIEgMyXE',
                    'Content-Type': 'application/json'
                }
            });
            const result = res.data;
            setWeather(result);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="w-full lg:mt-34 lg:px-40 justify-center container mx-auto">
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>Weather Now</h1>
            <div className="flex flex-wrap w-full lg:w-auto">
                <div className="w-full lg:w-1/2 flex rounded-lg bg-auto" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg?t=st=1711913127~exp=1711916727~hmac=67987e2c9cfea3c7bc761aac513941b13544a2588e52c707468a9caa1009144d&w=900')" }}>
                    <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-blue-700 opacity-90 text-white">
                        <div className="mb-20">
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold', marginBottom: '10px' }}>
                                Dark clouds gathered ominously, heralding the arrival of a fierce storm with thunderous roars and blinding flashes of lightning
                            </p>
                            <p className="flex align-center opacity-75">
                                <svg className="w-4 inline mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.963 425.963">
                                    {/* SVG paths */}
                                </svg>
                            </p>
                        </div>
                        <div>
                            <svg className="w-16 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129">
                                {/* SVG paths here */}
                            </svg>
                            <strong className="leading-none text-6xl block font-weight-bolder">{weather.temp}ºC</strong>
                            <b className="text-2xl block font-bold">Sunny</b>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex ml-0">
                    <div className="lg:my-3 bg-gray-800 text-white p-8 lg:rounded-r-lg w-full">
                        <div className="flex justify-between w-64 mb-4 w-full">
                            <div className="w-auto font-bold uppercase text-90">Precipitation</div>
                            <div className="w-auto text-right">{weather.cloud_pct} %</div>
                        </div>
                        <div className="flex justify-between w-64 mb-4 w-full">
                            <div className="w-auto font-bold uppercase text-90">Humidity</div>
                            <div className="w-auto text-right">{weather.humidity} %</div>
                        </div>
                        <div className="flex justify-between w-64 mb-8 w-full">
                            <div className="w-auto font-bold uppercase text-90">Wind</div>
                            <div className="w-auto text-right">{weather.wind_speed} Mph</div>
                        </div>


                        {/* Selector and Generate Button */}
                        <div className="flex justify-between mt-4">
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                label="Countries"
                                style={{ backgroundColor: '#3A405A', color: 'white', cursor: 'pointer', width: 'calc(50% - 10px)' }}
                            >
                                <option style={{ color: 'white' }} value="United States">United States</option>
                                <option style={{ color: 'white' }} value="United Kingdom">United Kingdom</option>
                                <option style={{ color: 'white' }} value="Canada">Canada</option>
                                <option style={{ color: 'white' }} value="Japan">Japan</option>
                                <option style={{ color: 'white' }} value="India">India</option>
                                <option style={{ color: 'white' }} value="Pakistan">Pakistan</option>
                                <option style={{ color: 'white' }} value="Iran">Iran</option>
                                <option style={{ color: 'white' }} value="Afghanistan">Afghanistan</option>
                                <option style={{ color: 'white' }} value="Russia">Russia</option>
                                <option style={{ color: 'white' }} value="Iraq">Iraq</option>
                            </select>
                            <button
                                onClick={generateWeather}
                                style={{
                                    backgroundColor: 'lightblue',
                                    color: 'white',
                                    padding: '0.5em 1em',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    width: 'calc(50% - 10px)',
                                    marginLeft: '20px'
                                }}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
