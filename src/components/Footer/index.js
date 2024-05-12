import './index.css'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="contact-section">
                <div>
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Sign up for updates from metta muse.</p>
                    <div>
                        <input type="search" placeholder="Enter your Email..." className="search-box"/>
                        <button type="button" className="subscribe-btn">Subscribe</button>
                    </div>
                </div>
                <div>
                    <h1>CONTACT US</h1>
                    <p>+442211335360</p>
                    <p>customercare@mettamuse.com</p>
                    <h1>CURRENCY</h1>
                    <p>+USD</p>
                    <p>Transactions will be completed in Euros and currency reference is available on hover.</p>
                </div>
            </div>
            <hr/>
            <div className="about-us-section">
                <div className="option-section">
                    <h1>metta muse</h1>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className="option-section">
                    <h1>QUICK LINKS</h1>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className="option-section">
                    <h1>FOLLOW US</h1>
                    <ul className="social-logos">
                        <li className="logos">
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li className="logos">
                            <i class="fa-brands fa-linkedin"></i>
                        </li>
                    </ul>
                    <h1>metta muse ACCEPTS</h1>
                    <ul className="payment-container">
                        <li><i class="fa-brands fa-google-pay"></i></li>
                        <li><i class="fa-brands fa-cc-mastercard"></i></li>
                        <li><i class="fa-brands fa-paypal"></i></li>
                        <li><i class="fa-brands fa-cc-amex"></i></li>
                        <li><i class="fa-brands fa-apple-pay"></i></li>
                        <li><i class="fa-brands fa-amazon-pay"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer