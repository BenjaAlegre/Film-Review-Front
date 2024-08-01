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

export const getPromise = async (API1, API2) =>
{
    try {
        const API1Promise = await fetch(API1)
        const Api2Promise = await fetch(API2);

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

