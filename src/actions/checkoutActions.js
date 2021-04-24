import axios from 'axios';
import { CHECKOUT_ADD_ITEM } from '../constants/checkoutConstants'

export const addToCheckout = (id, qty) => async(dispatch, getState) => {
    const {data} = await axois.get(`/products/${id}`)

    dispatch({
        type: CHECKOUT_ADD_ITEM,
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
    localStorage.setItem('checkoutItems', JSON.stringify(getState().checkout.checkoutItems))

}