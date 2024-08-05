export const getData = async (API) => {

    try {
        const resp = await fetch(API);

        const data = await resp.json();

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getOneData = async (API, ID) => {

    try {
        const resp = await fetch(API + "/" + ID);

        const data = await resp.json();

        console.log(data);

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getPosterData = async (API, limit) =>
{
    try {
        const apiUrl = `${API}?limit=${limit}`;
        
        const resp = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await resp.json();

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getPromise = async (API1, API2, role) => {

    try {
        const API1Promise = await fetch(API1);

        const Api2Promise = await fetch(API2,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token'),
            'role': role
        }})

        const promises = [API1Promise, Api2Promise];
        const promisesJson = promises.map(result => result.json());

        const datos = await Promise.all(promisesJson);

        console.log(datos);

        return datos;
    }
    catch (error) {
        console.log(error);
    }
}

