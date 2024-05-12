import './index.css'
import Header from '../Header'
import ProductGrid from '../ProductGrid'
import Footer from '../Footer'

const Home =() =>{
    return(
        <div className="app-container">
            <Header/>
            <ProductGrid/> 
            <Footer/>
        </div>
    )
}
export default Home