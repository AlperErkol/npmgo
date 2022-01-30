import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import searchRepositories from '../store/action-creators';
import Header from './subComponents/Header';
import { useState } from 'react';

function Result() {

    const params = useParams();
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const {loading,data,error} = useSelector(state => state.repositories);

    const skeletonElements = [1,2,3,4];

    const addToHistory = (term) =>{
        let historyList = JSON.parse(localStorage.getItem('history')) || [];
        let index = historyList.indexOf(term);
        if(index !== -1){
            historyList.splice(index,1);
        }
        historyList.push(term);
        localStorage.setItem('history',JSON.stringify(historyList));
    };


    useEffect(() => {
        let historyList = JSON.parse(localStorage.getItem('history')) || [];
        // let index = historyList.indexOf(term);
		console.log(data);
        if(historyList[historyList.length -1] !== params.term){

            if(params.term !== term){
                dispatch(searchRepositories(params.term));
                setTerm(params.term);
                addToHistory(params.term);
            }

        }

    }, [params.term])

    return (
        <div>
            <Header/>
            <div className='pt-20 max-w-screen-xl mx-auto overflow-hidden'>
                {!error && !loading && data.map(repositories =>
                <Link className='max-w-screen-sm block' to={`/package/${repositories.package.name}`} state={{packageDetails : repositories}}>
                    <div className='group relative mb-8 last:mb-0 py-4 flex justify-between flex-col cursor-pointer w-full'>
                        <div className="flex items-center">
                            <div className="image w-5 h-5 bg-default-tertiary rounded-full mr-2"></div>
                            <span className='text-sm text-default-text'>{repositories.package.publisher.username}</span>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <p className='inline font-semibold text-lg text-default-whitely group-hover:underline group-hover:underline-offset-4 mr-4 mb-0'>{repositories.package.name} | {repositories.package.version}</p>
                                {repositories.searchScore >= 10000 ? <span className='text-sm font-semibold text-default-text'>exact match</span> : null}
                            </div>
                            <span className='text-sm text-default-muted'>{repositories.package.description}</span>
                            <ul className="keywords mt-2">
                                {repositories.package.keywords && repositories.package.keywords.map(keyword =>
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-tertiary text-default-whitely rounded'>{keyword}</li>


                                )}
                            </ul>
                        </div>
                    </div>
                </Link>
                )}

                {(!error && !loading && data.length < 1) ? 
                <div className='w-full flex flex-col items-center justify-center mt-4'>
                    <div className='p-4 bg-default-sidebarColor text-center'>
                        <p className='text-default-text text-xl'>No result for <span className='text-default-tertiary'>{params.term}</span>.</p>
                        <div>
                            <span className='emoji'>&#128531;</span>
                            <span className='emoji'>&#128534;</span>
                            <span className='emoji'>&#128529;</span>
                        </div>
                    </div>
                </div>
                : <></>}
                
                {loading && skeletonElements.map(elem => 
                    <div className='max-w-screen-sm  rounded-md p-4'>
                        <div className='group relative mb-8 last:mb-0 py-4 flex justify-between flex-col cursor-pointer w-full animate-pulse'>
                            <div className="flex items-center mb-2">
                                <div className="image w-5 h-5 bg-default-muted rounded-full mr-2"></div>
                                <span className='text-sm bg-default-muted w-48 h-2 rounded-lg'></span>
                            </div>
                            <div>
                                <div className='flex items-center mb-2'>
                                    <p className='inline font-semibold text-lg bg-default-muted w-48 h-2 rounded-lg mr-4 mb-0'></p>
                                </div>
                                <span className='text-sm block bg-default-muted w-56 h-2 rounded-lg'></span>
                                <ul className="keywords mt-2">
                                    
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-muted w-14 h-6  rounded'></li>
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-muted w-14 h-6 rounded'></li>
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-muted w-14 h-6 rounded'></li>
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-muted w-14 h-6 rounded'></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Result
