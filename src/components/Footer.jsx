import logoInverted from "/src/assets/jglogo-i.svg";

export default function Footer() {
    return (
        <>
            <div className="footer py-4">
                <img src={logoInverted} target="_blank" className="footer-logo"></img>
                <div className="footer-text">
                    by <a href="https://senovska.eu/" target="_blank">ELS</a> 2024
                </div>
                <div className="footer-icons">
                    1 2 3
                </div>
                <div className="empty-space"></div>
            </div>
        </>
    );
};