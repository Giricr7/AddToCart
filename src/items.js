import { Component } from "react";
import Products from "./product";



class Items extends Component{

    constructor(props) {
        super(props)
        
              }
    
   
    render() {
       
    
        const products = [
            { sale_tag: false, name: 'Fancy Product', rating: 0, price: { old: '', new: '$40.00 - $80.00' }, button: 'View Options' },
            { sale_tag: true, name: 'Special Item', rating: 5, price: { old: '$20.00', new: '$18.00' }, button: 'Add to Cart' },
            { sale_tag: true, name: 'Sale Item', rating: 2, price: { old: '$50.00', new: '$25.00' }, button: 'Add to Cart' },
            { sale_tag: false, name: 'Popular Item', rating: 4, price: { old: '', new: '$40.00' }, button: 'Add to Cart' },
            { sale_tag: true, name: 'Sale Item', rating: 3, price: { old: '$50.00', new: '$25.00' }, button: 'Add to Cart' },
            { sale_tag: false, name: 'Fancy Product', rating: 0, price: { old: '', new: '$120.00 - $280.00' }, button: 'Add to Cart' },
            { sale_tag: true, name: 'Special Item', rating: 5, price: { old: '$20.00', new: '$18.00' }, button: 'Add to Cart' },
            { sale_tag: false, name: 'Popular Item', rating: 5, price: { old: '', new: '$40.00' }, button: 'Add to Cart' }
        ]


        products.sort((a,b)=>{return b.rating-a.rating})

        return (
            

                <>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
             
                            {
    
                                products.map(function (prod_details,i)
                                {
                                    return <Products {...prod_details} key={i + 1} cart_item={this.props.cart_item}/>
                                },this
                                )
                           
                            }

                                    
           
                        </div>
                    </div>
                 </section>






                </>



        )
    }



}

export default Items;