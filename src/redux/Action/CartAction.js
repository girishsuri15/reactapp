export const ADD_TO_CART = (id,value) => {
    return function(dispatch) {
     let querystring="";
     if(id){
        querystring="?id="+id
     }   
    let url = "http://localhost:5000/Products"+querystring;
    console.log('url - ' + url);
   fetch(url)
    .then(response => response.json())
    .then((data) => {
        data[0].value=value 
        data[0].subTotal=value*data[0].price
        console.log("cartadding "+data)
        dispatch({
        type: 'ADD_SUCCESS_CART',
        payload: data[0],
      })})

    .catch(error => dispatch({
        type: 'FETCH_MOBILE_LIST_ERROR',
        payload: error
      }))
}
}