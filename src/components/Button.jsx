import { useState } from "react";

const Button = ({ onButtonClick }) => {
    const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
    const [isStopButtonClicked, setIsStopButtonClicked] = useState(false);
    const [isResetButtonClicked, setIsResetButtonClicked] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Start");

    const handleButtonClick = () => {
        console.log("handleButtonPress() function launched");
        
        
        if (buttonLabel === "Start") {
            setIsStartButtonClicked(true);
            setIsStopButtonClicked(false);
            setIsResetButtonClicked(false);
            setButtonLabel("Stop");
            onButtonClick(isStartButtonClicked);
        } else if (buttonLabel === "Stop") {
            setIsStartButtonClicked(false);
            setIsStopButtonClicked(true);
            setIsResetButtonClicked(false);
            setButtonLabel("Reset");
            onButtonClick(isStopButtonClicked);
        } else if (buttonLabel === "Reset") {
            setIsStartButtonClicked(false);
            setIsStopButtonClicked(false);
            setIsResetButtonClicked(true);
            onButtonClick(isResetButtonClicked);
        }
    }

    return (
        <div className="py-5">
            <button className="text-white" onClick={ handleButtonClick }>{ buttonLabel }</button>
        </div>
    )
}

export default Button;