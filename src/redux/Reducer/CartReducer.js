const initialState = {
    Cart: [],
    TotalAmount:'',
    insert:''
};

 const Cart = (state = initialState, action) => {
     
    switch (action.type) {
        case 'ADD_SUCCESS_CART':
            console.log(action.payload)
             return Object.assign({}, ...[state], {insert: state.Cart.push(action.payload)}); 
        case 'EMPTY':
          return Object.assign({}, ...[state], { Cart: [] });
        // case FETCH_MOBILES.FAILURE:
        //     return Object.assign({}, ...[state], { error: action.payload },{isLoadingMobiles:false});
        default:
            return state;
    }
};
export default Cart;