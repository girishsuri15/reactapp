const initialState = {
    Username:'',
    isLogin:false,
    error: false
};

 const Login = (state = initialState, action) => {
     
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, ...[state], { Username:action.payload[0].name },{isLogin:true});      
        case 'LOGOUT_SUCCESS':
          return Object.assign({}, ...[state], { Username: '' },{isLogin:false});
        case 'LOGIN_ERROR':
           return Object.assign({}, ...[state], { error: true });
        default:
            return state;
    }
};
export default Login;