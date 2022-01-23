const initialState = {
    loading : false,
    error : null,
    data : []
}


const packageReducer = (state=initialState,action) =>{

    switch (action.type) {


        case 'SEARCH_PACKAGES':
            return { loading : true,error : null, data : []}


        case 'SEARCH_PACKAGES_SUCCESS':
            return { loading : false, error : null, data : action.payload}    


        case 'SEARCH_PACKAGES_ERROR':
            return { loading : false,error : action.payload, data : []}

        default:
            return state;
    }
};

export default packageReducer;