export const FETCH_MOBILE_DATA = (args) => {
    return function(dispatch) {
     let querystring="";
     console.log("arge"+args)
     if(args){
        querystring="?id="+args
     }   
    let url = "http://localhost:5000/Products"+querystring;
    console.log('url - ' + url);
   fetch(url)
    .then(response => response.json())
    .then((data) => { 
        if(data.length>0){
            dispatch({
            type: 'FETCH_MOBILE_LIST_SUCCESS',
         payload: data
        })}
        else{
            dispatch({
                type: 'LOGIN_ERROR',
             payload: data
            }) 
        }
    })
    .catch(error => dispatch({
        type: 'FETCH_MOBILE_LIST_ERROR',
        payload: error
      }))
}
}



 
 