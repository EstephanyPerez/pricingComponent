import React, {Component} from 'react';
import bgtop from './bg-top.svg';
import bgbottom from './bg-bottom.svg'
import './App.css';
import Card from './Components/Card'

class App extends Component{
  constructor(props){
    super(props);
    this.state={"frecuency": false, "first_price": 19.99, 
                "second_price": 24.99, "third_price":39.99};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({"frecuency": !this.state.frecuency});
    !this.state.frecuency ? this.setState({"first_price": this.state.first_price*12}) : this.setState({"first_price": 19.99});
    !this.state.frecuency ? this.setState({"second_price": this.state.second_price*12}) : this.setState({"second_price": 24.99});
    !this.state.frecuency ? this.setState({"third_price": this.state.third_price*12}) : this.setState({"third_price": 39.99});
  }

  render(){
    const basicDesc = ["500 GB Storage","2 Users Allowed","Send up to 3 GB"];
    const professionalDesc = ["1 TB Storage","5 Users Allowed","Send up to 10 GB"];
    const masterDesc = ["2 TB Storage","10 Users Allowed","Send up to 20 GB"];
    return (
      <div className="App"> 
        <p className="text-align-top title">Our pricing</p>
        <div className="container">
          <span className = "text-muted">Monthly &nbsp;</span>
          <label className="switch">
            <input type="checkbox" onChange={this.handleChange}></input>
            <span className="slider round"></span>
          </label>
          <span className="text-muted">&nbsp; Annually</span>
        </div>
        <div className="container-fluid">
          <div className = "row justify-content-center">
            <Card title="Basic"
                  price={this.state.first_price}
                  center={false}
                  description={basicDesc}/> 
            <Card title="Professional"
                  price={this.state.second_price}
                  center={true}
                  description={professionalDesc}/>
            <Card title="Master"
                  price={this.state.third_price}
                  center={false}
                  description={masterDesc}/>
          </div>
        </div>   
      </div>
      );
  }
}

export default App;
