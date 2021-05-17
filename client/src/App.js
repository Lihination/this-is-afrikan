import React, { Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { gsap } from 'gsap';
import $ from 'jquery';
import Home from './scenes/home/index';
import Collections from './scenes/collections/index';
import Product from './scenes/product/index';
import Dashboard from './scenes/dashboard/index';
import Defy from './scenes/defy/index';
import Policy from './scenes/policy/index';
import Brand from './scenes/brand/index';
import DefyProduct from './scenes/defyproduct/index';
import { loadStripe } from '@stripe/stripe-js';
import Login from './scenes/login/Login';
// import Bid from './scenes/bid/Bid';
import Bid from './scenes/bid/index';
import Privacy from './scenes/privacy/index';
// import Policy from './scenes/policy/index';
import Landing from './scenes/landing/Landing';
import Client from 'shopify-buy';
import Cart from './scenes/_layout/Cart';
import Overlay from './scenes/_layout/Overlay';
import { Transition, TransitionGroup } from 'react-transition-group';
var nextLocation = {};

var prevLocation = {};
const client = Client.buildClient({
  storefrontAccessToken: 'cb3936bfd99f302b3dbad360ee75af47',
  domain: 'this-is-afrikan.myshopify.com/'
});
const onExit = (location, node) => {
  prevLocation = location;
  // console.log(location);
}
const onEnter = (node, location) => {
  //WorkEnter(node);
  nextLocation = location;
  // console.log(location);
  // console.log(prevLocation);
  //console.log(location);
}

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      collections: [],
      changesWarranty: false,
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentDidMount() {
    client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
      // console.log(res)
    });

    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      // console.log(collections);
      // console.log(collections[0].products);
      this.setState({
        collections: collections
      })
    });

    client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
      // console.log(res)
    });

    client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id
    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id
    var lineItems = this.state.checkout.lineItems;

    var lineItem =  lineItems.find((x,i)=> (
      x.title == "1 year warranty"
    ));

    if(lineItem.id == lineItemId)
      this.setState({
        changesWarranty: true
      })

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  } 

  removeWarranty = async (lineItemId) => {
    const checkoutId = this.state.checkout.id

    const res = await client.checkout.removeLineItems(checkoutId, [lineItemId]);
    this.setState({
      checkout: res,
    });
  }

  clearCart = ()=> {
    const checkoutId = this.state.checkout.id
    var lineItems = this.state.checkout.lineItems;
    // console.log(lineItems)

    this.setState({
      changesWarranty: true
    })
    lineItems.forEach((x,i)=>{
      client.checkout.removeLineItems(checkoutId, [x.id]).then(res => {
        this.setState({
          checkout: res,
        });
      });
    })
  }

  returnWarranty = () => {
    this.setState({
      changesWarranty: false
    })
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });

  }

  openCart = () => {
    this.setState({
      isCartOpen: true
    })
  }

  render() {
    // console.log(this.state.collections)
    return (
      <BrowserRouter>
        <Route render={({ location }) => (
          <TransitionGroup>
            <Transition
              key={location.key}
              timeout={300}
              onEnter={(node) => onEnter(node, location)}
              onExit={(node) => onExit(location, node)}
            >
              <Switch location={location}>
                <Route exact path="/home"
                  render={(history) =>
                    <ScrollToTop>
                      
                        <Home
                        products={this.state.products}
                        client={client}
                        history={history}
                        addVariantToCart={this.addVariantToCart}
                        openCart={this.openCart}
                        checkout={this.state.checkout}>
                        <Cart
                          checkout={this.state.checkout}
                          clearCart = {this.clearCart}
                          isCartOpen={this.state.isCartOpen}
                          handleCartClose={this.handleCartClose}
                          updateQuantityInCart={this.updateQuantityInCart}
                          removeLineItemInCart={this.removeLineItemInCart}
                        />
                      </Home>
                    
                    </ScrollToTop>
                  } />

                <Route exact path="/collections"
                  render={(history) => <ScrollToTop>
                    
                    <Collections
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}
                    collections={this.state.collections}
                  >
                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Collections>
                  
                  </ScrollToTop>
                  } />

                <Route exact path="/dashboard"
                  render={(history) => <ScrollToTop>
                    
                    <Dashboard
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}
                    collections={this.state.collections}
                  >
                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Dashboard>
                    
                    
                  </ScrollToTop>
                  } />

                <Route exact path="/defy"
                  render={(history) => <ScrollToTop> 
                    
                      <Defy
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>
                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Defy>
                    
                    </ScrollToTop>
                  } />

                <Route exact path="/brand"
                  render={(history) => 
                    <ScrollToTop>
                    
                  <Brand
                    products={this.state.products}
                    collections={this.state.collections}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>
                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Brand>
                  
                  </ScrollToTop>
                  } />

                <Route exact  path="/product"
                  render={(history) => <ScrollToTop>
                    
                     <Product
                    products={this.state.products}
                    collections={this.state.collections}
                    client={client}
                    location={location}
                    lineItems = {this.state.checkout.lineItems}
                    history={history}
                    changesWarranty={this.state.changesWarranty}
                    returnWarranty={this.returnWarranty}
                    removeWarranty={this.removeWarranty}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Product>
                  
                  </ScrollToTop>
                  } />

                  <Route exact  path="/defyproduct"
                    render={(history) => <ScrollToTop> 
                      
                      <DefyProduct
                      products={this.state.products}
                      collections={this.state.collections}
                      client={client}
                      location={location}
                      history={history}
                      addVariantToCart={this.addVariantToCart}
                      openCart={this.openCart}
                      checkout={this.state.checkout}>

                      <Cart
                        checkout={this.state.checkout}
                        clearCart = {this.clearCart}
                        isCartOpen={this.state.isCartOpen}
                        handleCartClose={this.handleCartClose}
                        updateQuantityInCart={this.updateQuantityInCart}
                        removeLineItemInCart={this.removeLineItemInCart}
                      />
                    </DefyProduct>
                    
                  </ScrollToTop>
                  } />

                {/* <Route exact path="/upcoming"
                  render={(history) => <ScrollToTop> <Upcoming
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Upcoming>
                  </ScrollToTop>
                  } /> */}

                <Route exact path="/login"
                  render={(history) => <ScrollToTop> 
                    
                    <Login
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Login>
                  
                  </ScrollToTop>
                  } />

                  <Route exact path="/policy"
                  render={(history) => <ScrollToTop>
                    
                     <Policy
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Policy>
                  
                  </ScrollToTop>
                  } />

                  <Route exact path="/privacy"
                  render={(history) => <ScrollToTop>
                    
                     <Privacy
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Privacy>
                  
                  </ScrollToTop>
                  } />

                  <Route exact path="/bid"
                    render={(history) => <ScrollToTop>
                      
                    <Bid
                      products={this.state.products}
                      client={client}
                      location={location}
                      history={history}
                      addVariantToCart={this.addVariantToCart}
                      openCart={this.openCart}
                      checkout={this.state.checkout}>

                      <Cart
                        checkout={this.state.checkout}
                        clearCart = {this.clearCart}
                        isCartOpen={this.state.isCartOpen}
                        handleCartClose={this.handleCartClose}
                        updateQuantityInCart={this.updateQuantityInCart}
                        removeLineItemInCart={this.removeLineItemInCart}
                      />
                    </Bid>
                    
                    </ScrollToTop>
                    } />

                  <Route exact path="/"
                  render={(history) => <ScrollToTop>
                    
                     <Landing
                    products={this.state.products}
                    client={client}
                    location={location}
                    history={history}
                    addVariantToCart={this.addVariantToCart}
                    openCart={this.openCart}
                    checkout={this.state.checkout}>

                    <Cart
                      checkout={this.state.checkout}
                      clearCart = {this.clearCart}
                      isCartOpen={this.state.isCartOpen}
                      handleCartClose={this.handleCartClose}
                      updateQuantityInCart={this.updateQuantityInCart}
                      removeLineItemInCart={this.removeLineItemInCart}
                    />
                  </Landing>
                  
                  </ScrollToTop>
                  } />
                {/* <Route exact path="/collections" component={Dashboard} /> */}
              </Switch>
            </Transition>
          </TransitionGroup>
        )} />
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
