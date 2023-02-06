import './Home.css';
import React from "react";
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [urlQueries, setURLQueries] = useSearchParams()
    const params = Object.fromEntries([...urlQueries])

    // Reading the query string
    useEffect(() => {
        console.log(params)
    }, [])

    return (
        <div>

        </div>
    )
}

export default Home;