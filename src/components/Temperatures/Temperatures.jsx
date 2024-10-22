import { useState } from 'react';
import Variable from '../Variable/Variable'
import './Temperatures.css'

function Temperatures() {
    const [celsius, setCelsius] = useState(25)
    const [fahrenheit, setFahrenheit] = useState(77)
    const [kelvin, setKelvin] = useState(298.15)

    //function to convert between celsius, fahrenheit and kelvin
    const convertTemperatures = (value, unit) => {
        switch (unit) {
            case 'C':
                setFahrenheit((value * 9/5) + 32);
                setKelvin(value + 273.15);
                break;
            case 'F':
                setCelsius((value - 32) * 5/9);
                setKelvin((value - 32) * 5/9 + 273.15);
                break;
            case 'K':
                setCelsius(value - 273.15);
                setFahrenheit((value - 273.15) * 9/5 + 32);
                break;
            default:
                break;
        }
    };

    // Update Celsius
    const updateCelsius = (newCelsius) => {
        setCelsius(newCelsius);
        convertTemperatures(newCelsius, 'C');
    };

    // Update Fahrenheit
    const updateFahrenheit = (newFahrenheit) => {
        setFahrenheit(newFahrenheit);
        convertTemperatures(newFahrenheit, 'F');
    };

    // Update Kelvin
    const updateKelvin = (newKelvin) => {
        setKelvin(newKelvin);
        convertTemperatures(newKelvin, 'K');
    };
    return (
    <div className='temperatures-container'>
        <h3 className='temperatures-title'>Temperatures</h3>
        <h3>
            <span className='badge bg-primary'>{celsius.toFixed(2)}°C</span> 
            <span className='badge bg-primary'>{fahrenheit.toFixed(2)}°F</span> 
            <span className='badge bg-primary'>{kelvin.toFixed(2)}K</span>
            </h3>
        <div className='temperatures-variables'>
            <Variable name={'Celsius'} value={celsius} setValue={updateCelsius} />
            <Variable name={'Fahrenheit'} value={fahrenheit} setValue={updateFahrenheit} />
            <Variable name={'Kelvin'} value={kelvin} setValue={updateKelvin} />
        </div>
    </div>)
}

export default Temperatures