import { useState } from "react";

const Button = ({ onButtonClick }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Start");

    const handleButtonClick = () => {
        console.log("handleButtonPress function here");
        setIsButtonClicked(true);
        setButtonLabel("Stop");
        onButtonClick(isButtonClicked);
    }

    return (
        <div className="py-5">
            <button className="text-white" onClick={ handleButtonClick }>{ buttonLabel }</button>
        </div>
    )
}

export default Button;