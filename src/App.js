//Root component


import { Component } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Items from "./items";
import Footer from "./footer";
import './style.css'



class App extends Component{


    constructor(props) {
        super(props)
        this.state = {
            cart_value:0
        }

        
       
    }

    //getting the total cart value
    cart_prods = (new_products) => {
        let current_value = this.state.cart_value + new_products;
            this.setState({ cart_value: current_value })
                        
    }

    render() {
      return (

            <>
                <Navbar cart_val={ this.state.cart_value }/>
                <Header />
                <Items cart_item={this.cart_prods}/>
                <Footer/>
            </>
            )
    }

}



export default App