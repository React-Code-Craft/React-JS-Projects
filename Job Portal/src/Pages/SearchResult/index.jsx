import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchJobs } from '../../Slices/Posts';

export default function SearchResult() {
    let dispatch = useDispatch();

    let AllJob = useSelector((state) => state.posts.jobs);
    console.log(AllJob)
    let location = useLocation();
    let param = new URLSearchParams(location.search);
    let country = param.get("country");
    let title = param.get("title");
    console.log(country + title);

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    let search = AllJob.filter((job) => job.title == title || job.location.toLowerCase().includes(country.toLowerCase()));
    console.log(search)

    return (
        <div className='mt-40'>SearchResult</div>
    )
}
