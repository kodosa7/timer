import {useState, useEffect} from 'react';
import Button from "./Button"

const Timer = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30.5);
    const [semicolon, setSemicolon] = useState(':');
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect( () => {
        if (isTimerRunning) {
            // countdown and flashing semicolon logic
            const interval = setInterval( () => {
                if (seconds > 0) {
                    setSeconds(seconds - .5);
                    if (semicolon === ' ') {
                        setSemicolon(':');
                    } else {
                        setSemicolon(' ');
                    };
                } else {
                        if (minutes === 0) {
                            clearInterval(interval);
                            setIsTimerRunning(false);
                            // timer reached 00:00
                            
                        } else {
                            setMinutes(minutes - 1);
                            setSeconds(59.5);
                            setSemicolon(':');
                        }
                    }
                }, 500);
                
                return () => clearInterval(interval);
            }
        }, [isTimerRunning, semicolon, minutes, seconds]);
        
    const handleTimerState = (dataFromButton) => {
        console.log("State from Button:", dataFromButton);
        if (dataFromButton === 1) {
            setIsTimerRunning(true);
        } else if (dataFromButton === 2) {
            setIsTimerRunning(false);
            setSemicolon(":");
        } else if (dataFromButton === 3) {
            setIsTimerRunning(false);
            setMinutes(1);
            setSeconds(30.5);
            setSemicolon(":");
        }
    };
    
    // padStart(2, ..) is used to ensure minutes and seconds are always displayed with 2 digits
    return (
        <>
            <h1 className="font-mono font-bold text-8xl pt-12">
                {isTimerRunning ?
                    `${String(minutes).padStart(2, '0')}${semicolon}${String(Math.floor(seconds)).padStart(2, '0')}`
                    :
                    // <span className="text-blue">STOP</span>
                    `${String(minutes).padStart(2, '0')}${semicolon}${String(Math.floor(seconds)).padStart(2, '0')}`
                }
            </h1>
            <Button onButtonClick={handleTimerState}/>
        </>
    );
};

export default Timer;