import React, { useState, useEffect } from 'react';

import './Animation.css';

const fieldWidth = 700;
const fieldHeight = 400;
const diameter = 150;

const App = () => {
    const [running, setRunning] = useState(false);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotationAngle, setRotationAngle] = useState(0);
    const [ballImage, setBallImage] = useState('');

    const vx = 5;
    const vy = 5;

    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;

    const runClick = () => {
        setRunning(!running);
    };

    const calculate = () => {
        setPosition(prev => {
            let newX = prev.x;
            let newY = prev.y;
            let newRotationAngle = rotationAngle;

            if (goRight) {
                newX += vx;
                newRotationAngle += 5;
                if (newX >= maxLeft) {
                    setGoRight(false);
                    newRotationAngle += 90;
                }
            } else {
                newX -= vx;
                newRotationAngle -= 5;
                if (newX <= 0) {
                    setGoRight(true);
                    newRotationAngle += 90;
                }
            }

            if (goDown) {
                newY += vy;
                if (newY >= maxTop) {
                    setGoDown(false);
                    newRotationAngle += 90;
                }
            } else {
                newY -= vy;
                if (newY <= 0) {
                    setGoDown(true);
                    newRotationAngle += 90;
                }
            }

            newRotationAngle = newRotationAngle % 360;
            setRotationAngle(newRotationAngle);
            return { x: newX, y: newY };
        });
    };

    const renderBall = () => {
        const ballStyle = {
            left: position.x + 'px',
            top: position.y + 'px',
            transform: `rotate(${rotationAngle}deg)`,
            backgroundImage: ballImage,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: diameter + 'px',
            height: diameter + 'px',
            position: 'absolute',
            transition: 'transform 0.5s',
        };

        return <div id="ball" style={ballStyle}></div>;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                calculate();
            }
        }, 30);

        return () => clearInterval(interval);
    }, [running, position, goRight, goDown, rotationAngle]);

    return (
        <div id="container">
            <div id="field" style={{ width: fieldWidth, height: fieldHeight, position: 'relative', overflow: 'hidden' }}>
                {renderBall()}
            </div>
            <div id="control">
                <button className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={runClick}>
                    {running ? 'PAUSE' : 'RUN'}
                </button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('none')}>NONE</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/basketball.png)')}>BASKETBALL</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/football.png)')}>Football</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/volleyball.jpg)')}>Volleyball</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/human.jpg)')}>Human</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/cartoon.png)')}>Cartoon</button>
                <button className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/logo.png)')}>Logo</button>
            </div>
        </div>
    );
};

export default App;
