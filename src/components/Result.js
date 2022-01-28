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
                            <div className="image w-5 h-5 bg-default-tertiary mr-2"></div>
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
                { loading &&
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                    </div>
                </div>
                }

            </div>
        </div>
    )
}

export default Result
