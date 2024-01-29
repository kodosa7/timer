import { useState } from "react";

const Button = ({ onButtonClick, isEndReached }) => {
    const [isStartButtonVisible, setIsStartButtonVisible] = useState(true);
    const [isStopButtonVisible, setIsStopButtonVisible] = useState(false);
    const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Start");
    const [timerState, setTimerState] = useState(1);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTimerReset, setIsTimerReset] = useState(true);
    
    const handleButtonClick = () => {
        if (isStartButtonVisible) {
            setIsStartButtonVisible(false);
            setIsStopButtonVisible(true);
            setIsResetButtonVisible(false);
            // setButtonLabel("Stop");
            setTimerState((prevState) => prevState + 1);
            onButtonClick(timerState);
            setIsTimerReset(true);
            setIsTimerStarted(false);
        } else if (isStopButtonVisible) {
            console.log("isStopButton now")
            setIsStartButtonVisible(false);
            setIsStopButtonVisible(false);
            setIsResetButtonVisible(true);
            // setButtonLabel("Reset");
            setTimerState((prevState) => prevState + 1);
            onButtonClick(timerState);
            setIsTimerReset(false);
            setIsTimerStarted(true);
        } else if (isEndReached) {
            console.log("isEndReached now");
            setIsStartButtonVisible(false);
            setIsStopButtonVisible(false);
            setIsResetButtonVisible(true);
            // setButtonLabel("Reset2");
            setTimerState((prevState) => prevState + 1);
            onButtonClick(timerState);
            setIsTimerReset(false);
            setIsTimerStarted(false);
        } else if (isResetButtonVisible) {
            setIsStartButtonVisible(true);
            setIsStopButtonVisible(false);
            setIsResetButtonVisible(false);
            // setButtonLabel("Start");
            setTimerState((prevState) => prevState - 2);
            onButtonClick(timerState);
            setIsTimerReset(true);
            setIsTimerStarted(false);
        }
    };

    return (
        <div className="py-5">
            {isTimerStarted ?
                <button className="text-white" onClick={ handleButtonClick }>Stop</button>
                     : {!isTimerReset ?
                        <button className="text-white" onClick={ handleButtonClick }>Start</button>
                    }
            }
        </div>
    )
}

export default Button;