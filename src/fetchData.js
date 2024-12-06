export async function fetchData(url, method = 'GET', data = null) {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
    };

    if (method === 'POST' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${url}`, options);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        throw error;
    }
}
