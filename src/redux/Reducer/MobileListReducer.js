const initialState = {
    mobilesList: [],
    total:0,  
    isLoadingMobiles:false,
    error: {}
};

 const mobileList = (state = initialState, action) => {
     
    switch (action.type) {
        case 'FETCH_MOBILE_LIST_SUCCESS':
            return Object.assign({}, ...[state], { mobilesList:action.payload },{total:action.payload.count});      
        //case FETCH_MOBILE:
          //   return Object.assign({}, ...[state], { mobiles: action.payload },{totalMobiles:action.payload.count},{isLoadingMobiles:false});
        // case FETCH_MOBILES.FAILURE:
        //     return Object.assign({}, ...[state], { error: action.payload },{isLoadingMobiles:false});
        default:
            return state;
    }
};
export default mobileList;