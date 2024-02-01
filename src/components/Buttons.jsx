const Buttons = (props) => {
    const buttonLabel = props.buttonLabel;
    const handleButtonClick = props.handleButtonClick;
    const handleResetClick = props.handleResetClick;
    const handleFinalResetClick = props.handleFinalResetClick;
    const endReached = props.endReached;
    const isRunning = props.isRunning;
    const time = props.time;
    const initialTime = props.initialTime;
    const semicolon = props.semicolon;

    return (
        <>
            <h1 className="text-3xl pt-4 pb-8">
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
        </>
    );
};

export default Buttons;