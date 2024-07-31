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

