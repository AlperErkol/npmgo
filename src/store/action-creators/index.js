import axios from "axios";
import {getRawAbbreviatedPackument } from 'query-registry';


const searchRepositories = term =>{

    return async (dispatch) => {

        dispatch({
            type: 'SEARCH_REPOSITORIES'
        })
        
        try {

            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search?text='+term);
            
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

export const getPackageDetail = packageName => {

    return async (dispatch) => {

        dispatch({
            type: 'GET_PACKAGES'
        })
        
        try {

            
            const {data} = await axios.get("https://registry.npmjs.org/react");
            console.log(data);
            dispatch({
                type: 'GET_PACKAGES_SUCCESS',
                payload : data
            })

            
        } catch (error) {
            dispatch({
                type: 'GET_PACKAGES_ERROR',
                payload : error.message
            })
        }
    }

};

export const searchPackages = (packageName, type, startDate = null ,endDate = null) => {

    return async (dispatch) => {

        dispatch({
            type: 'SEARCH_PACKAGES'
        })
        
        try {
            
            let tempData = null;

            console.log(type);
            
            if(type === 'initial'){
                const {data} = await axios.get('https://api.npmjs.org/downloads/range/last-week/'+packageName);
                tempData = data.downloads;
            }else if(type === 'single'){
                const {data} = await axios.get(`https://api.npmjs.org/downloads/point/${startDate}/${packageName}`);
                tempData = [];
                let newObj = {};
                newObj.downloads = data.downloads;
                newObj.day = data.start;
                tempData.push(newObj);
            }else if(type === 'multiple'){
                const {data} = await axios.get(`https://api.npmjs.org/downloads/range/${startDate}:${endDate}/${packageName}`);
                tempData = data.downloads;
            }
            console.log('alpererkol');
            console.log(tempData);

            dispatch({
                type: 'SEARCH_PACKAGES_SUCCESS',
                payload : tempData
            })

            
        } catch (error) {
            dispatch({
                type: 'SEARCH_PACKAGES_ERROR',
                payload : error.message
            })
        }
    }
};



export default searchRepositories;
