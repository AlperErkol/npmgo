import axios from "axios";


const searchRepositories = term =>{

    return async (dispatch) => {

        dispatch({
            type: 'SEARCH_REPOSITORIES'
        })
        
        try {

            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search?text='+term);
            console.log(data.objects)
            const names = data.objects.map((result)=>{
                return result;
            });

            dispatch({
                type: 'SEARCH_REPOSITORIES_SUCCESS',
                payload : names
            })

            
        } catch (error) {
            dispatch({
                type: 'SEARCH_REPOSITORIES_ERROR',
                payload : error.message
            })
        }
    }

};

export default searchRepositories;