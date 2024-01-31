import { useState, useEffect } from 'react';

const Timer = () => {
    const initialTime = 90.5; // 1 minute and 30 seconds in seconds
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [semicolon, setSemicolon] = useState(':');
    const [buttonLabel, setButtonLabel] = useState('Start');
    const [endReached, setEndReached] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && time > -.5) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - .5);
                if (semicolon === " ") {
                    setSemicolon(":");
                } else {
                    setSemicolon(" ");
                }
            }, 500);
        } else if (time === -.5) {
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
            <h1 className="text-3xl py-8">
                Pondělní povídání
            </h1>
            <h1 className="font-mono font-bold text-8xl py-12 text-black bg-lightblue">
                {
                    !endReached
                        ?
                            `${String(Math.floor(time / 60)).padStart(2, '0')}${semicolon}${String(Math.floor(time % 60)).padStart(2, '0')}`
                        :
                            <span className="text-blue">STOP!</span>
                }
            </h1>
            {
                !endReached
                    ?
                        <button className="text-white mx-2 my-8" onClick={handleButtonClick}>{buttonLabel}</button>
                    :
                        <button className="text-white mx-2 my-8" onClick={handleFinalResetClick}>Reset</button>
            }
            {
                !endReached && !isRunning && time !== initialTime
                    ?
                        <button className="text-white mx-2 my-8" onClick={handleResetClick}>Reset</button>
                    :
                        <span></span>
            }
        </div>
    );
};

export default Timer;