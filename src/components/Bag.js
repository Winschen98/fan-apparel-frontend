import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap'
import { addToBag } from '../actions/bagActions'


function Bag({match, location, history}) {
    const productId = match.params.id
    // if the quantity exist, extract just the number from the attribute
    const quantity = location.search ? location.search.split('=')[1] : 1
    
    const dispatch = useDispatch()

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    // trigger action to update state/local storage
    useEffect(() => {
        if (productId){
            dispatch(addToBag(productId, quantity))
        }
    }, [dispatch, productId, quantity])
    


    return (
        <div>
            bag
        </div>
    )
}

export default Bag
