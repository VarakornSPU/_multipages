import { useState,useEffect } from 'react';

import './Timer.css';

function Timer() {

    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(58);

    useEffect(() => {
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);}
            return () => clearInterval(interval);
    },[running,seconds])

    function runClick() {
        setRunning(!running)
    }

    function secondsToString(seconds) {
        const MINUTE_seconds = 60;
        const HOUR_seconds = 60 * MINUTE_seconds
        const DAY_seconds = 24 * HOUR_seconds
        const days = Math.floor(seconds / DAY_seconds)
        const hours = Math.floor((seconds % DAY_seconds) / HOUR_seconds)
        const minutes = Math.floor((seconds % HOUR_seconds) / MINUTE_seconds)
        const secs = seconds % MINUTE_seconds

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${secs}s`
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`
        } else {
            return `${secs}s`
        }
    }

function resetClick ()  {
    setRunning(false);
    setSeconds(0);
}

    return (
        <div className='timer-container'>
            <h3 className='timer-title'>Timer</h3>
            <p><input className='timer-display' type="text" name="" id="" value={secondsToString(seconds)}  readOnly/></p>
            <div className='timer-buttons'>
                <button className='btn btn-danger' onClick={resetClick}>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
    );
}

export default Timer