import "./mobileModal.css"

function MobileModal() {
    return <>
        <div className="modal">
            <nav className="nav-info-modal">
                <li><a href="#" className="link">About</a></li>
                <li><a href="#" className="link">Services</a></li>
                <li><a href="#" className="link">Projects</a></li>
                <li><a href="#" className="btn">Contact</a></li>
            </nav>
        </div>
    </>
}

export default MobileModal