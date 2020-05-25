const initialState = {
    mobile: {},
    isLoadingMobiles:false,
    error: {}
};

 const mobile = (state = initialState, action) => {
     
    switch (action.type) {
        case 'FETCH_MOBILE_SUCCESS':
            return Object.assign({}, ...[state], { mobile:action.payload });      
        //case FETCH_MOBILE:
          //   return Object.assign({}, ...[state], { mobiles: action.payload },{totalMobiles:action.payload.count},{isLoadingMobiles:false});
        // case FETCH_MOBILES.FAILURE:
        //     return Object.assign({}, ...[state], { error: action.payload },{isLoadingMobiles:false});
        default:
            return state;
    }
};
export default mobile;