import logo from "/src/assets/jglogo.svg";
import stopwatch from "/src/assets/stopwatch.svg";

export default function Header() {
    return (
        <>
            <div className="header-container py-4">
                <div className="header">
                    <a href="https://junior.guru/" className="logo">
                        <img src={logo} alt="JuniorGuru Logo" className="w-28" />
                    </a>
                    <div className="label text-lg">
                        Timer
                    </div>
                    <div className="empty-space"></div>
                    <img className="stopwatch w-14" src={stopwatch} alt="Stopwatch picture"></img>
                </div>
            </div>
            <div className="eggshell"></div>
            <div className="title-container">
            <div className="title">
                <h1 className="title-text text-3xl pt-4 pb-8">
                    Pondělní povídání
                </h1>
                <div className="empty-space"></div>
            </div>
            </div>
        </>
    )
}