import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import searchRepositories from '../store/action-creators';

function Result({}) {
    
    const params = useParams();
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector(state => state.repositories);
    console.log(params.term);
    
    useEffect(() => {
        dispatch(searchRepositories(params.term));
    }, [])
    
    
    return (
        <div>
            {!error && !loading && data.map(repositories => 
            <div className='relative bg-default-secondary mb-2 h-40 p-1 flex justify-between flex-col hover:bg-default-tertiary ease-in duration-100' >
                <div>
                    <p className='font-semibold'>{repositories.package.name} | {repositories.package.version}</p>
                    <span className='text-sm'>{repositories.package.description}</span>
                </div>
                <div className="flex">
                    <span>{repositories.package.publisher.username}</span>
                </div>
            </div>
            )}
        </div>
    )
}

export default Result
