import { useState, useEffect } from 'react';
import Buttons from './Buttons';

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
        <Buttons
            handleButtonClick={handleButtonClick}
            handleResetClick={handleResetClick}
            handleFinalResetClick={handleFinalResetClick}
            buttonLabel={buttonLabel}
            endReached={endReached}
            isRunning={isRunning}
            time={time}
            initialTime={initialTime}
            semicolon={semicolon}
        />
    );
};

export default Timer;