import React, {Component} from 'react'
import './Card.css'

class Card extends Component{

    constructor(props){
        super(props);
        this.state = {"hovered": false};
        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(e){
        e.preventDefault();
        this.setState({hovered:!this.state.hovered});
    }

    render(){
        console.log(this.state.hovered);
        return(
            <div className = "col-sm-4" onMouseOver={this.changeStyle} onMouseOut={this.changeStyle}>
                <div className = {this.state.hovered ? "card card-center" : "card"} > 
                    <div className ="card-body">
                        <h5 className= {this.state.hovered ? "card-title white" : "card-title"}>{this.props.title}</h5>
                        <div>
                            <span className= {this.state.hovered ? "card-text white align-middle dolar" : "card-text align-middle dolar"}>$</span>
                            <span className= {this.state.hovered ? "card-text white price" : "card-text price"}>&nbsp;{this.props.price}</span>
                        </div> 
                        <p className={this.state.hovered ? "card-text white" : "card-text text-muted "}>{this.props.description[0]}</p>
                        <p className={this.state.hovered ? "card-text white" : "card-text text-muted "}>{this.props.description[1]}</p>
                        <p className={this.state.hovered ? "card-text white" : "card-text text-muted "}>{this.props.description[2]}</p>
                        <button className={this.state.hovered ? "btn white-button" : "btn purple-button"}>LEARN MORE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
