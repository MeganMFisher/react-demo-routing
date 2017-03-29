import axios from 'axios';

export function getProducts() {
    return axios.get('https://practiceapi.devmountain.com/products')
    .then(res => res.data)
    .catch(err => {
        throw err
        return [];
    })
}

export function getOneProduct(id) {
    return axios.get('https://practiceapi.devmountain.com/products/' + id)
    .then(res => res.data)
    .catch(err => {
        throw err
        return {}
    })
}