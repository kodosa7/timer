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
            <main className="bg-lightblue">
                <div className="main-content">
                    <h1 className="font-mono font-bold text-black">
                        {
                            !endReached
                                ?
                                    `${String(Math.floor(time / 60)).padStart(2, '0')}${semicolon}${String(Math.floor(time % 60)).padStart(2, '0')}`
                                :
                                    <span className="text-blue">STOP</span>
                        }
                    </h1>
                </div>
            </main>

            <div className="buttons py-4">
                {
                    !endReached
                        ?
                            <button className="text-white mx-2 my-8" onClick={handleButtonClick}>{buttonLabel}</button>
                        :
                            <button className="button-light text-black mx-2 my-8" onClick={handleFinalResetClick}>Reset</button>
                }
                {
                    !endReached && !isRunning && time !== initialTime
                        ?
                            <button className="button-light text-black mx-2 my-8" onClick={handleResetClick}>Reset</button>
                        :
                            <span></span>
                }
            </div>
        </>
    );
};

export default Buttons;