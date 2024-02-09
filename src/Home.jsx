import "./home.css"
import "./mobileModal.css"
import MobileModal from "./MobileModal"

function Home() {
    function toggleShow() {
        const modal = document.querySelector(".modal")
        modal.classList.toggle("fadeIn-slideDown")
    }

    return <>
        <div className="home">
            <div className="navbar">
                <img src="../public/images/logo.svg" alt="Logo" />
                <MobileModal />
                <img src="../public/images/icon-hamburger.svg" alt="hamburgerer" className="hamg" onClick={toggleShow} />
                <nav className="nav-info">
                    <li><a href="#" className="link">About</a></li>
                    <li><a href="#" className="link">Services</a></li>
                    <li><a href="#" className="link">Projects</a></li>
                    <li><a href="#" className="btn">Contact</a></li>
                </nav>
            </div>
            <h1 className="main-title">We are creatives!</h1>
            <img src="../public/images/icon-arrow-down.svg" alt="Arrow Down" />
        </div>
    </>
}

export default Home