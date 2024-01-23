import {useState, useEffect} from 'react';

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(2);
    const [semicolon, setSemicolon] = useState(' ');
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect( () => {
        const interval = setInterval( () => {
                if (seconds > 0 ) {
                    setSeconds(seconds - .5);
                    if (semicolon === ':') {
                        setSemicolon(' ');
                    } else {
                        setSemicolon(':');
                    };
                } else {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setSemicolon(':');
                        setIsTimerRunning(false);

                        // timer reached 0, now what... ???

                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59.5);
                        setSemicolon(':');
                    }
                }
            
        }, 500);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    // padStart(2, ..) is used to ensure minutes and seconds are always displayed with 2 digits
    return (
        <>
            <h1 className="font-mono font-bold text-8xl pt-12">
                {isTimerRunning ?
                    `${String(minutes).padStart(2, '0')}${semicolon}${String(Math.floor(seconds)).padStart(2, '0')}`
                    :
                    <span className="text-blue">STOP</span>
                }
            </h1>
        </>
    );
};

export default Timer;