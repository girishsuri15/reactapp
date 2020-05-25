import { combineReducers } from "redux";
import mobileList from './MobileListReducer';
import Login from './LoginReducer';
import Cart from './CartReducer';


const reducer = combineReducers({
    mobiles:mobileList,
    Login:Login,
    Cart:Cart
});

export default reducer;