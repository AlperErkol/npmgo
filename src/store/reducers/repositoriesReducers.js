
const initialState = {
    loading : false,
    error : null,
    data : []
}


const reducer = (state=initialState,action) =>{

    switch (action.type) {


        case 'SEARCH_REPOSITORIES':
            return { loading : true,error : null, data : []}


        case 'SEARCH_REPOSITORIES_SUCCESS':
            return { loading : false, error : null, data : action.payload}    


        case 'SEARCH_REPOSITORIES_ERROR':
            return { loading : false,error : action.payload, data : []}

        default:
            return state;
    }



};

export default reducer;