import axios from 'axios';

const donacionApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/donaciones/Donaciones/'
})

export const getAllDonaciones = () => {
    return donacionApi.get('/');
}

// export const getDonacion = (id) => donacionApi.get(`/${id}`)



export const createDonacion = (donacion) => {
    return donacionApi.post('/', donacion);
}

export const deleteDonacion = (id) => {
    return donacionApi.delete(`/${id}`);
}

export const updateDonacion = (id, donacion) => donacionApi.put(`/${id}`,
donacion)

