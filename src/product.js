import Rating from "./rating"
import { Component } from 'react'

class Products extends Component{
    

    constructor(props) {
        super(props)

        this.state = {
            btn_name: props.button,
            click: true,
            btn_color: 'green',
            items:0
        }
       
}

    
    alter = () => {

    if (this.state.click && this.state.btn_name!=='View Options')
    {
        this.setState({ btn_name: "Remove from Cart", btn_color: 'red' })
        this.props.cart_item(1)
        this.state.click=false
    } else {
        this.setState({ btn_name: this.props.button, btn_color: 'green' })
        this.props.cart_item(-1)
        this.state.click=true
    }
    
    
}
   

    render() {
        
        

        return (
    
       
         
            <div class="col mb-5">
            <div class="card h-100">
            
                {
                   this.props.sale_tag &&
                            <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                }
                           

                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                
                        <h5 class="fw-bolder">{ this.props.name}</h5>
                                  
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        
                            {(() => {
                                let stars=[]
                                for (let i = 1; i <= this.props.rating; i++) {
                                  stars.push(<Rating />)   
                                 }
                                return stars 
                            })()
                                
                            }
                           
                                    </div>
                                  
                        <span class="text-muted text-decoration-line-through">{ this.props.price.old} </span>
                        { this.props.price.new}
                                </div>
                            </div>
                        
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center" onClick={this.alter} ><a class="btn btn-outline-dark mt-auto" href="#" style={{ 'text-transform': 'none','background':`${this.state.btn_color}`, 'color': 'white'}}>{ this.state.btn_name}</a></div>
                            </div>
                        </div>
                    </div>

       
        


    )
   }



}


export default Products