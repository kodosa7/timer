import { useState } from "react";

const Button = ({ onButtonClick }) => {
    const [isStartButton, setIsStartButton] = useState(true);
    const [isStopButton, setIsStopButton] = useState(false);
    const [isResetButton, setIsResetButton] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Start");
    const [timerState, setTimerState] = useState(1);

    const handleButtonClick = () => {
        if (isStartButton) {
            setIsStartButton(false);
            setIsStopButton(true);
            setIsResetButton(false);
            setButtonLabel("Stop");
            setTimerState((prevState) => prevState + 1);
            onButtonClick(timerState);
        } else if (isStopButton) {
            setIsStartButton(false);
            setIsStopButton(false);
            setIsResetButton(true);
            setButtonLabel("Reset");
            setTimerState((prevState) => prevState + 1);
            onButtonClick(timerState);
        } else if (isResetButton) {
            setIsStartButton(true);
            setIsStopButton(false);
            setIsResetButton(false);
            setButtonLabel("Start");
            setTimerState((prevState) => prevState - 2);
            onButtonClick(timerState);
        }
    };

    return (
        <div className="py-5">
            <button className="text-white" onClick={ handleButtonClick }>{ buttonLabel }</button>
        </div>
    )
}

export default Button;