import React,{Component} from 'react';
import {products} from "./mockData/products"; 

import Counter from "./components/Counter"

class App extends Component{

    state = {
        productCounter :{}
    }


incrementCounter = (productName)=>()=>{
    console.log('pn',productName)
    const oldCounter = this.state.productCounter;
const oldCount = this.state.productCounter[productName] || 0;
 this.setState({
    productCounter:
    {
     ...oldCounter,
    [productName]: oldCount +1
    }
 })
}

incrementCounter = (productName)=>()=>{
    console.log('pn',productName)
    const oldCounter = this.state.productCounter;
const oldCount = this.state.productCounter[productName] || 0;
 this.setState({
    productCounter:
    {
     ...oldCounter,
    [productName]: oldCount +1
    }
 })
}

decrementCounter = (productName)=>()=>{
    const oldCounter = this.state.productCounter;
    const oldCount = this.state.productCounter[productName] || 0;
    this.setState({
        productCounter:
        {
        ...oldCounter,
       [productName]: oldCount -1
        }
    })
   }




    render(){
        console.log(this.state.productCounter);
return <div className="product-grid">
    {
products.map((product)=>{
return <div className="product-wrapper">
    <div key={product.name} className="product">
    <img src={product.image} className="product-image"></img>
    <Counter 
    
    incrementFu ={this.incrementCounter(product.name)}
    decrementFu ={this.decrementCounter(product.name)}
    count = {this.state.productCounter[product.name] || 0}
    
    
    
    />
</div>
</div>

})}
     


    </div>
    
    
  
}
}
export default App;
