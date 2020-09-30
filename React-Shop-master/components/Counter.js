import React,{Component} from 'react';



class Counter extends Component{

   

    render(){

  return (  <div className="counter">
    <button className="counter-btn" onClick={this.props.incrementFu} >Add</button>
    <div className="counter-text">
{this.props.count}
    </div>
    <button className="counter-btn" onClick={this.props.decrementFu}>Sub</button>
  </div> )
    }
}

export default Counter;
