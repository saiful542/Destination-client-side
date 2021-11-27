import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services)
            })
    }, [])
    return {
        services,
        count,
        setServices
    };
};

export default useServices;