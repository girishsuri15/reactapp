import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

const mapStateToProps= state =>{
  console.log(state.Cart.Cart)
return {
      Cartdata: state.Cart.Cart,
      isLogin: state.Login.isLogin
  };
}

const mapDispatchToProps = dispatch => ({
  onEmpty: () =>dispatch({ type: "EMPTY"})
})

class cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {route:false};
  }
 placeOrder(){
   console.log("hello")
   if(!this.props.isLogin){
     console.log(this.props.isLogin)
     console.log(this.state.route)
     this.setState({route: true})
    console.log(this.state.route)
   }
   else{
     alert("Order IS Placed ")
     this.props.onEmpty()
   }

 }
          render() {
            if (this.state.route) {
              return <Redirect to='/login' />
            }
            return (
              <div className="auth-page">
              <div className="container page">
                <div className="row">
      
                  <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">CART</h1>
                    <div>
                      <div className=" row">
                        <div className="col-2 h4 ">Name</div>
                        <div className="col-2 h4 ">Quantity</div>
                        <div className="col-2 h4 ">Price</div>
                        <div className="col-2 h4 ">SubTotal</div>
                      </div>
                    {this.props.Cartdata.map(item=>(
                    <div key={item.id} className="row">
                     <div className="col-2 h5 text-muted">{item.name}</div>
                     <div className="col-2 h5 text-muted">{item.value}</div>
                     <div className="col-2 h5 text-muted">{item.price}</div>
                     <div className="col-2 h5 text-muted">{item.subTotal}</div>
                     <div className="col-2 h5 "  className="btn-sm btnspca btn-danger">DELETE</div>
                  </div>
                    ))} 
            </div>
            <div className="col-2 h5 " onClick={() => this.placeOrder()} className="btn btnspca btn-info">PlaceOrder</div>
            </div>
            </div>
            </div>
            </div>
            ); 
          }
      
    }

export default connect(mapStateToProps,mapDispatchToProps)(cart);
