import React from 'react';
import './dashboard.css';
import { connect } from 'react-redux';
import {FETCH_MOBILE_DATA } from '../../redux/Action/MobileAction'
import {ADD_TO_CART }from '../../redux/Action/CartAction'
import { Link } from 'react-router-dom';

const mapStateToProps= state =>{
  console.log(state.mobiles.mobilesList)
return {
      mobiledata: state.mobiles.mobilesList
  };
}

const mapDispatchToProps = dispatch => ({
  onLoad: () =>dispatch(FETCH_MOBILE_DATA()),
  OnAddCart:(id,value)=>dispatch(ADD_TO_CART(id,value))
})

class dashboard extends React.Component {

  componentWillMount(){
    this.props.onLoad();
  }
  addToCart(event) {
    //alert(event)
     alert("Product is added to cart")
    console.log(event)
    this.props.OnAddCart(event,1);
  }
    render() {
      if (this.props.mobiledata.length==0) {
        return <h1 className="text-center">No Data Found</h1>;
      }
      return (
          <div className="row ">
            {this.props.mobiledata.map(mobile=>(
                <div key={mobile.id} className="card spacing col" style={{width: 18+'rem'}}>
                <img className="card-img-top imgsize" src={mobile.imageURL}  alt="Card image cap"/>
                    <div className="card-body">
                     <h5 className="card-title">{mobile.name}</h5>
                     <h6 className="card-subtitle mb-2 ">{mobile.price}</h6>
                     <p className="card-text">{mobile.description}</p>
                     <Link
                      to={`/mobile/${mobile.id}`}
                      className="btn btnspca btn-primary">
                    <i className="ion-edit"></i> View
                   </Link>

                     <a onClick={() => this.addToCart(mobile.id)} className="btn btnspca btn-primary">Add to cart</a>
                   </div>
            </div>
            )
            )}
              
        </div>    
      )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(dashboard);
