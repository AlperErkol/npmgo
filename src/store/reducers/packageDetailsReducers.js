const initialState = {
    loadingDetail : false,
    errorDetail : null,
    dataDetail : {}
}


const packageDetailReducer = (state=initialState,action) =>{

    switch (action.type) {

        case 'GET_PACKAGES':
            return { loadingDetail : true,errorDetail : null, dataDetail : {}}


        case 'GET_PACKAGES_SUCCESS':
            return { loadingDetail : false, errorDetail : null, dataDetail : action.payload}    


        case 'GET_PACKAGES_ERROR':
            return { loadingDetail : false,errorDetail : action.payload, dataDetail : {}}

        default:
            return state;
    }
};

export default packageDetailReducer;