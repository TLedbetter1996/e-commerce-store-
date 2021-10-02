import { commerce } from './lib/commerce'; //will work on backend 
import React, {useState, useEffect } from 'react'; 
// the below line imports components with one line of code 
import { Products, Navbar, Cart, Intro } from './components';
import { SliderData } from './components/Intro/SliderData';
import { set } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart ] = useState({});

    const fetchProducts = async () => {
      const { data } = await commerce.products.list();

      setProducts(data); 
    }

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve()); 

    }

    // allowing us 

    const handleAddToCart = async (productId, quantity) => { 
        const { cart } = await commerce.cart.add(productId, quantity); 

        setCart(cart); //cart after item is handled 
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity }) 

        setCart(cart)
    } 

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    } 

    const handleEmptyCart = async () => {
          const { cart } = await commerce.cart.empty();

          setCart(cart); 
    }

    useEffect(() => { 

        fetchProducts(); //put our products into a 
        fetchCart();
    }, []);

    console.log(cart); 

  //*next step is adding to Kart 56:50
    
  return (
          <Router >
            <div>
                <Navbar totalItems={cart.total_items} /> 
                <Switch>
                    <Route exact path ="/Intro"> 
                      <Intro slides={SliderData} />
                    </Route> 
                    <Route exact path ="/"> 
                      <Products products={products} onAddToCart={handleAddToCart} />
                    </Route> 
                    
                    <Route exact path = "/cart"> 
                      <Cart 
                        cart={cart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                      
                      />
                    </Route> 
                </Switch> 
            </div>
          </Router>
    );
  }

export default App;
