import { useState, useEffect } from 'react';

const Timer = () => {
    const initialTime = 10.5; // 1 minute and 30 seconds in seconds
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [semicolon, setSemicolon] = useState(':');
    const [buttonLabel, setButtonLabel] = useState('Start');
    const [endReached, setEndReached] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - .5);
                if (semicolon === " ") {
                    setSemicolon(":");
                } else {
                    setSemicolon(" ");
                }
            }, 500);
        } else if (time === 0) {
            console.log("end reached");
            setEndReached(true);
            setSemicolon(":");
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, semicolon, time]);

    const handleButtonClick = () => {
        if (!isRunning) {
            // Start button logic
            setIsRunning(true);
            setButtonLabel('Stop');
        } else {
            // Stop button logic
            setIsRunning(false);
            setButtonLabel('Start');
        }
    };

    const handleResetClick = () => {
        // Reset button logic
        setIsRunning(false);
        setTime(initialTime);
        setButtonLabel('Start');
        setSemicolon(":");
    };

    const handleFinalResetClick = () => {
        // Final Reset button logic
        setIsRunning(false);
        setTime(initialTime);
        setButtonLabel('Start');
        setEndReached(false);
        setSemicolon(":");
    };

    return (
        <div>
            <h1 className="font-mono font-bold text-8xl pt-12">
                {Math.floor(time / 60).toString().padStart(2, '0')}{semicolon}{Math.floor((time % 60)).toString().padStart(2, '0')}
            </h1>
            {
                !endReached
                    ?
                        <button className="text-white m-2" onClick={handleButtonClick}>{buttonLabel}</button>
                    :
                        <button className="text-white m-2" onClick={handleFinalResetClick}>Reset</button>
            }
            {
                !endReached && !isRunning && time !== initialTime
                    ?
                        <button className="text-white m-2" onClick={handleResetClick}>Reset</button>
                    :
                        <span></span>
            }
        </div>
    );
};

export default Timer;