
import './App.css';
import {Container, ProductContainer} from './components/styles/Container.styled'
import Header from './components/Header'
import { useState } from 'react'
import shirtdata from './components/shirtdata'
import ProductCard from './components/ProductCard'
import Nav from './components/Navbar'
import Footer from './components/Footer'



function App() {

  const [products, setProducts] = useState(shirtdata)
  

  const productElements = products.map(product => (
    <ProductCard
      key={product.id}
      url={product.url}
      desc={product.description}
      quantity={product.quantity}
      price={product.price}
    
    />
  ))

  const sort = () => {
    setProducts(prev => prev.price+1)
  }

  
  
  return (
    <>
    <Nav />
    <Header />
    <Container>
      
      <div className="sortFilter">
        <p className="sort">Sort By</p>
        {console.log(productElements)}
        <p className="filter"> Filter</p>
      </div>
      <ProductContainer>
        {productElements}
      </ProductContainer>
      
    </Container>
    <Footer/>
    </>
  );
}

export default App;
