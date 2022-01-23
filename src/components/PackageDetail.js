import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {searchPackages, getPackageDetail} from '../store/action-creators';
import {useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import {BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line, LineChart} from 'recharts';
import { useState } from 'react';
import { GoLinkExternal } from "react-icons/go";

function PackageDetail() {

    const location = useLocation();
    const packageDetail = location.state.packageDetails;
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector(state => state.packages);
    const {loadingDetail, dataDetail, errorDetail} = useSelector(state => state.details);
    const params = useParams();
    const [scores,setScores] = useState(null);
    const [downloadCount, setDownloadCount] = useState([]);

    const [searchType, setSearchType] = useState('initial');



    const scoresTemp = [];

    useEffect(() => {
        
        // dispatch(getPackageDetail(params.packageName,searchType));
        dispatch(searchPackages(params.packageName,searchType));
        

        let scoreItem = {};
        Object.keys(packageDetail.score.detail).map(key =>{
            scoreItem.name = key;
            scoreItem.value = packageDetail.score.detail[key];
            scoresTemp.push(scoreItem);
            scoreItem = {};
        });

        setScores(scoresTemp);
        getDate();

        setDownloadCount(data);
        
        
    }, [])


    const getContent = label =>{

        if(label === "maintenance"){
            return 'Maintenance is about ...';
        }
        if(label === "quality"){
            return "Quality is about ...";
        }
        if(label === "popularity"){
            return "Popularity is about ...";
        }

    };

    const getDate = _ =>{

        let currentDate = new Date();
        let date = new Date(packageDetail.package.date);
        let dateDifference = currentDate.getTime() - date.getTime();
        let dateDifferenceInDays = Math.ceil(dateDifference / (1000 * 3600 * 24));

        if(dateDifferenceInDays < 30){
            return "a month ago";
        }

        if(dateDifferenceInDays < 365){
            return `${Math.floor(dateDifferenceInDays/30)} months ago`;
        }

        if(dateDifferenceInDays > 365){
            return `${Math.floor(dateDifferenceInDays/365)} years ago`;
        }


    };

    const onChangeHandler = e =>{

        if(e.target.value === ""){
            document.querySelector('#endDate').value = "";
        }else{

            let chosenDate = e.target.value;
            let threshold = new Date(chosenDate);
            threshold.setDate(threshold.getDate() + 1);
            let minDate = threshold.toISOString().split('T')[0];
            document.querySelector('#endDate').setAttribute('min',minDate);
            document.querySelector('#endDate').value = "";
        }
    };

    const onClickHandler = _ =>{

        let startDate = document.querySelector('#startDate').value;
        setSearchType('single');
        dispatch(searchPackages(params.packageName,searchType,startDate));


    };
    

    

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
            <div className="custom-tooltip bg-default-sidebarColor p-4">
                <p className="label text-default-whitely">{`${label} : ${payload[0].value.toFixed(2)} (${payload[0].value.toFixed(2)*100}%)`}</p>
                <p className="desc text-default-whitely">{getContent(label)}</p>
            </div>
            );
        }
        return null;
    };


    return (
        <div className='pl-20 py-12 pr-36'>
            <div className='mb-3 flex justify-between border-b-2 border-default-muted h-20'>
                <div>
                    <h1 className='inline text-5xl text-default-text mr-2'>{packageDetail.package.name}</h1>
                    <span className='text-default-text'>by {packageDetail.package.publisher.username}</span>
                </div>
                <div className='flex h-full'>
                    <div className='mr-8 flex h-full flex-col'>
                        <span className='text-default-muted text-sm'>Weekly Downloads</span>
                        <p className='text-default-text'>1.234.567</p>
                    </div>
                    <div className='mr-8 flex h-full flex-col '>
                        <span className='text-default-muted text-sm'>Current Version</span>
                        <p className='text-default-text'>{packageDetail.package.version}</p>
                    </div>
                    <div className='mr-8 flex h-full flex-col '>
                        <span className='text-default-muted text-sm'>Version</span>
                        <p className='text-default-text'>{dataDetail && dataDetail.license}</p>
                    </div>
                    <div className='mr-8 flex h-full flex-col '>
                        <span className='text-default-muted text-sm'>Published Date</span>
                        <p className='text-default-text'>{getDate()}</p>
                    </div>
                    
                </div>
            </div>
            
            <div className="body flex">
                <div className="left flex-1 w-full h-full py-4">
                    <div className='mb-4'>
                        <div className='border-l-8 pl-2 border-default-secondary'>
                            <h3 className='text-lg font-bold text-default-whitely'>Description</h3>
                        </div>
                        <p className='text-sm font-semibold p-1 text-default-text'>{packageDetail.package.description}</p>
                    </div>
                    <div className='mb-4'>
                        <div className='border-l-8 pl-2 border-default-secondary'>
                            <h3 className='text-lg font-bold text-default-whitely'>Keywords</h3>
                        </div>
                        <ul className="keywords mt-2">
                                {packageDetail.package.keywords && packageDetail.package.keywords.map(keyword => 
                                    <li className='text-sm inline-block py-1 px-2 mr-2 mb-2 bg-default-tertiary text-default-whitely rounded'>{keyword}</li>
                                )}
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <div className='border-l-8 pl-2 border-default-secondary'>
                            <h3 className='text-lg font-bold text-default-whitely'>Scoring</h3>
                        </div>
                        {scores && scores.length === 3 && <BarChart
                            width={500}
                            height={200}
                            data={scores}
                            margin={{
                                top: 5,
                                bottom: 5
                            }}
                            >
                            <Tooltip content={<CustomTooltip />}  />
                            <XAxis dataKey="name" />
                            <Bar dataKey="value" fill="#FD2155" />
                        </BarChart>}
                    </div>
                    <div className='mb-4'>
                        <div className='border-l-8 pl-2 border-default-secondary'>
                            <h3 className='text-lg font-bold text-default-whitely'>Links</h3>
                        </div>
                        {Object.keys(packageDetail.package.links).map(key => {
                            return(
                                <div className='py-1'>
                                    <a className='text-sm font-semibold text-default-text inline-flex items-center' href={packageDetail.package.links[key]} target="_blank">
                                        {key}
                                        <GoLinkExternal className='ml-1'/>
                                    </a>
                                </div>
                            );
                        })}
                        
                    </div>
                </div>
                <div className="right flex-1 w-full h-full py-4">
                    <div className='mb-4'>
                        <div className='border-l-8 pl-2 border-default-secondary'>
                            <h3 className='text-lg font-bold text-default-whitely'>Download Count</h3>
                        </div>
                        <p className='text-sm font-semibold p-1 text-default-text'>You can see download count of <b className='text-default-tertiary'>{params.packageName}</b> by adjusting settings. Default, download count of yesterday shown below.</p>
                        
                    </div>
                    <div className="search-type mb-4">
                        <label className='flex mb-2' htmlFor="single">
                            <input className='mr-2' type="radio" name="type" id="single" />
                            <p className='text-default-text text-sm font-semibold'>Single Day</p>
                        </label>
                        <label className='flex' htmlFor="multiple">
                            <input className='mr-2' type="radio" name="type" id="multiple" />
                            <p className='text-default-text text-sm font-semibold'>Day Interval</p>
                        </label>
                    </div>
                    <div className="right-header flex justify-between mb-8">
                        <div className='flex flex-col w-2/5 mr-2'>
                            <span className='text-default-text mb-1'>from 🕒</span>
                            <input className='w-full h-8' type="date" id="startDate" onChange={(e)=>onChangeHandler(e)} />
                        </div>
                        <div className='flex flex-col w-2/5 mr-2'>
                            <span className='text-default-text mb-1'>to 🕕</span>
                            <input className='w-full h-8' type="date" id="endDate" />
                        </div>
                        <button onClick={()=>onClickHandler()} className='w-1/5 bg-default-secondary text-sm font-semibold p-3 rounded-3xl hover:bg-default-buttonHover hover:text-default-text ease-in duration-100'>SEARCH</button>
                    </div>
                    <div className="chart w-full h-96">
                        { data && downloadCount && <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={400}
                                height={400}
                                data={data}
                                >
                                <XAxis dataKey="day" />
                                <YAxis dataKey="downloads" />
                                <Tooltip />
                                <Legend />
                                <Line  dataKey="downloads" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PackageDetail
