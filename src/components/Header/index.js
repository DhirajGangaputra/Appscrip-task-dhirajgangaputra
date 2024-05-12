import './index.css'


const Header = () => {
    return(
        <div className="header-container">
            <div className="nav-container">
                <img src="C:\Users\HP\OneDrive\Desktop\AppscripProject\app-scrip\images\four-overlapping-circles-infographic-template-vector-29006012.jpg" alt="logo" className="logo-iamge"/>
                <h1 className="main-heading">Logo</h1> 
                <ul className="icons-container">
                    <li className="icon-item">
                        <button type="button"><i class="fa-sharp fa-regular fa-magnifying-glass"></i></button>
                    </li>
                    <li className="icon-item">
                        <button type="button"><i class="fa-thin fa-heart"></i></button>
                    </li>
                    <li className="icon-item">
                        <button type="button"><i class="fa-thin fa-suitcase-rolling"></i></button>
                    </li>
                    <li className="icon-item">
                        <button type="button"><i class="fa-thin fa-user"></i></button>
                    </li>
                    <li className="icon-item">
                        <select className="dropdown-container">
                            <option>ENG</option>
                            <option>French</option>
                        </select>
                    </li>
                </ul>
            </div>
            <ul className="tab-container">
                <li className="tab-item">SHOP</li>
                <li className="tab-item">SKILLS</li>
                <li className="tab-item">STORIES</li>
                <li className="tab-item">ABOUT</li>
                <li className="tab-item">CONTACT US</li>
            </ul>
            <div className="details-container">
                <h1 className="details-heading">DISCOVER OUR PRODUCTS</h1>
                <p className="details-description">Lorem Ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
    )
}
export default Header

