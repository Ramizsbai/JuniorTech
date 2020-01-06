import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Filter from './filter/Filter';
import keys from '../config';
import './jobs.css'

const { APP_ID1, API_KEY1, URL } = keys;

const Jobs = () => {
    // Jobs data
    const [data, setData] = useState({ results: [] })

    // Search Query
    const [jobQuery, setJobQuery] = useState('web')
    const [location, setLocation] = useState('munich')

    // Request state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getJobsData = () => {

        setLoading(true)
        const APP_ID = APP_ID1;
        const API_KEY = API_KEY1;

        const url = URL + `1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=20&what=junior ${jobQuery}&where=${location}&content-type=application/json`


        fetch(url)

            .then(response => response.json())
            .then(data => {

                setLoading(false)
                setData(data)

            })
            .catch((e) => {
                setLoading(false)
                setError(e)

            });

    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()

        getJobsData()
    }

    useEffect(() => {
        getJobsData()
    }, [])



    return (
        <div className='mainJobs'>
            <Header
                jobQuery={jobQuery}
                onSearchSubmit={handleSearchSubmit}
                location={location}
                setLocation={setLocation}
                setJobQuery={setJobQuery}
            />
            <Filter />
            <Body
                data={data.results}
                loading={loading}
                error={error}
                jobQuery={"junior " + jobQuery}
                location={location}
            />
        </div>
    )
}


export default Jobs;
