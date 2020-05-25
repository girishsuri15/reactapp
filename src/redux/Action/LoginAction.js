export const LOGIN = (email,password) => {
    return function(dispatch) {
     let querystring="";
     console.log("arge"+password)
     if(email){
        querystring="?name="+email+"&password="+password
     }   
    let url = "http://localhost:5000/Users"+querystring;
    console.log('url - ' + url);
   fetch(url)
    .then(response => response.json())
    .then(data => dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data
      }))
    .catch(error => dispatch({
        type: 'LOGIN_ERROR',
        payload: error
      }))
}
}