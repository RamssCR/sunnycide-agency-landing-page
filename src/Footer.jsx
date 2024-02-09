import "./footer.css"

function Footer() {
    return <>
        <div className="grid-gallery">
            <div className="bg-footer mb"></div>
            <div className="bg-footer orng"></div>
            <div className="bg-footer cone"></div>
            <div className="bg-footer sc"></div>
        </div>
        <div className="footer">
            <div className="brand-nav">
                <img src="public/images/logoFooter.svg" alt="Footer logo" />
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
            <div className="social-media">
                <img src="public/images/icon-facebook.svg" alt="Facebook" />
                <img src="public/images/icon-instagram.svg" alt="Instagram" />
                <img src="public/images/icon-twitter.svg" alt="Twitter" />
                <img src="public/images/icon-pinterest.svg" alt="Pinterest" />
            </div>
        </div>
    </>
}

export default Footer