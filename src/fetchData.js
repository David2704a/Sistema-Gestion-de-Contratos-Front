import React from 'react';

function getSuspenders(promise) {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
        },
        (err) => {
            status = 'error';
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response
            default:
                return response
        }
    }

    return {read};
}

const FetchData = (url) => {
    const promise = fetch(`http://localhost:8000/api/${url}`)
        .then((response) => response.json())
        .then((data) => data);


    return getSuspender(promise);
}

export default FetchData;
