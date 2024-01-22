import {useState, useEffect} from 'react';

const Timer = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    useEffect( () => {
        const interval = setInterval( () => {
            if (seconds >0 ) {
                setSeconds(seconds - 1);
            } else {
                if (minutes === 0) {
                    clearInterval(interval);
                    // timer reached 0, now what... ???
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    // padStart(2, ..) is used to ensure minutes and seconds are always displayed with 2 digits
    return (
        <>
            <h1 className="font-bold text-8xl pt-12">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </h1>
        </>
    );
};


export default Timer;
