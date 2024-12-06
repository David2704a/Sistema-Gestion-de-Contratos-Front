function getSuspender(promise) {
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

    return { read };
}

export function fetchData(url, method = 'GET', data = null) {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (method === 'POST' && data) {
      options.body = JSON.stringify(data);
    }
  
    const promise = fetch(`http://localhost:8000/api/${url}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;  
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error);
        throw error;
      });
  
    return getSuspender(promise);
}
