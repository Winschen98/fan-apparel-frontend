import axios from 'axios';
import { BAG_ADD_ITEM } from '../constants/bagConstants'

export const addToBag = (id, quantity) => async(dispatch, getState) => {
    const {data} = await axios.get(`/products/${id}`)

    dispatch({
        type: BAG_ADD_ITEM,
        payload: {
            product: data._id, 
            name: data.name, 
            price: data.price,
            image: data.image, 
            inStock: data.inStock, 
            quantity
        }
    })

    // Store the data in local storage
    localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))

}