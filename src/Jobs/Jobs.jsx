import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Filter from './filter/Filter';
import keys from '../config';

const { APP_ID, API_KEY, URL } = keys;

const Jobs = () => {
    // Jobs data
    const [data, setData] = useState({ results: [] })

    // Search Query
    const [jobQuery, setJobQuery] = useState('javaScript')
    const [location, setLocation] = useState('berlin')

    // Request state
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getJobsData = () => {
        setLoading(true)
        const APP_ID1 = APP_ID;
        const API_KEY1 = API_KEY;

        const url = URL + `1?app_id=${APP_ID1}&app_key=${API_KEY1}&results_per_page=20&what=${jobQuery}&where=${location}&content-type=application/json`


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
        <div>
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
                jobQuery={jobQuery}
                location={location}
            />
        </div>
    )
}


export default Jobs;
