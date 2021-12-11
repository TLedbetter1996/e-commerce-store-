import { commerce } from './lib/commerce'; //will work on backend 
import React, {useState, useEffect } from 'react'; 
// the below line imports components with one line of code 
import { Products, Navbar, Cart, Intro, Checkout, About} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Info } from '@material-ui/icons';





function App() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart ] = useState({});
    const [order, setOrder ] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
      const { data } = await commerce.products.list();

      setProducts(data); 
    }

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve()); 

    }

    // allowing us to edit the cart. As

    const handleAddToCart = async (productId, quantity) => { 
        const { cart } = await commerce.cart.add(productId, quantity); 

        setCart(cart); //cart after item is handled 
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

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

    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
  
      setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
  
        setOrder(incomingOrder);
  
        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };

    useEffect(() => { 

        fetchProducts(); //put our products into a 
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  //*next step is adding to Kart 56:50
    
  return (
          <Router >
            <div style={{ display: 'flex'}}>
                <CssBaseline /> 
                <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} /> 
                <Switch>
                    <Route exact path ="/Intro">  
                      <About exact path ="/Intro"/>
                    </Route> 
                    <Route exact path ="/"> 
                      <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
                    </Route> 
                    
                    <Route exact path = "/cart"> 
                      
                        <Cart 
                        cart={cart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                      
                      />
                    </Route> 
                    <Route exact path="/checkout" exact>
                    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>
                    
                </Switch> 
            </div>
          </Router>
    );
  }

export default App;
