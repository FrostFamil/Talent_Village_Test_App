import React, { useState } from 'react';
import axios from 'axios';

export default function FetchData() {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetch = async(url, body, httpRequestType, options) => {

        let defaultOptions = {
            headers: {
            'Accept': 'application/json',
            'Accept-Language': 'en',
            'Accept-Charset': 'utf-8'
          }
        };
    
        const setNewHeaders = () => {
            defaultOptions.headers = { ...defaultOptions.headers, ...options };
        };
        let data = null;
        setLoading(true);
        try {
            setNewHeaders()
            data = await axios({
                method: httpRequestType,
                url: BASE_URL + url,
                defaultOptions,
                data: body
            });
            setResponse(data);
            setLoading(false);
        }
        catch (err) {
            setError(err);
            setLoading(false);
        } 
        return data;
    }
    
    return {fetch, response, loading, error};
}