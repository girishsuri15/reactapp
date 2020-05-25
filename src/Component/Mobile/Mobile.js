import React from 'react';
import {FETCH_MOBILE_DATA }from '../../redux/Action/MobileAction'
import {ADD_TO_CART }from '../../redux/Action/CartAction'
import { connect } from 'react-redux';
import './Mobile.css';

const mapStateToProps= state =>{
  console.log(state.mobiles.mobilesList)
  return {
    mobiledata: state.mobiles.mobilesList
    };
  }

const mapDispatchToProps = dispatch => ({
  onLoad: (key) =>dispatch(FETCH_MOBILE_DATA(key)),
  OnAddCart:(id,value)=>dispatch(ADD_TO_CART(id,value))
})

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:1};
    this.changeQuantity = this.changeQuantity.bind(this);
  }
  addToCart(event) {
    //alert(event)
    alert("Product is added to cart")
    console.log(event)
    this.props.OnAddCart(event,this.state.value);
  }

  changeQuantity(event) {    
    this.setState({value: event.target.value});  
  }

  componentWillMount(){
    this.props.onLoad(this.props.match.params.id);
  }

    render() {
      return (
        <div className="container center">
          {this.props.mobiledata.map(mobile=>(
              <div className="card spacing " style={{width: 18+'rem'}}>
              <img className="card-img-top imgsize" src={mobile.imageURL}  alt="Card image cap"/>
                  <div className="card-body">
                   <h5 className="card-title">{mobile.name}</h5>
                   <h6 className="card-subtitle mb-2 ">{mobile.price}</h6>
                   <p className="card-text">{mobile.description}</p>
                   <form onSubmit={this.handleSubmit}>
             
                     <fieldset className="form-group"> <input  className="form-control form-control-sm" type="number" min="1" max="5"  value={this.state.value} onChange={this.changeQuantity} />   </fieldset>
                     </form>
                   <p onClick={() => this.addToCart(mobile.id)} className="btn btnspca btn-primary">Add to cart</p>
                 </div>
          </div>
          )
          )}
            
      </div>  
    )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Mobile);


