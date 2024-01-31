import Logo from "/src/assets/jglogo.svg";

export default function Header() {
    return (
        <div className="header-container py-4">
            <div className="header">
                <a href="https://junior.guru/" className="logo">
                    <img src={Logo} alt="JuniorGuru Logo" className="w-28" />
                </a>
                <div className="label text-lg">
                    Timer
                </div>
                <div className="empty-space"></div>
            </div>
            <div className="eggshell"></div>
        </div>
    )
}