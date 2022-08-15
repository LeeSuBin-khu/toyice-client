import { useState, useEffect } from 'react';
import axios from 'axios';

export async function getApi(url) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}${url}`)
        return response.data;
    } catch(err) {
        console.log(err);
    }
    return;
}

export function useFetch(url, deps) { 
    const [data, setData] = useState(); 

    useEffect( () => { 
        async function fetch() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}${url}`);
                setData(response.data);
            } catch(err) {
                console.log(err);
            }

        }

        fetch();

    }, [deps]);

    return data; 
}