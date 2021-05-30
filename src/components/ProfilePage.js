import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getUserProfile } from '../actions/userActions';

function ProfilePage({history}) {
	return (
        <Row>
            <Col md={3}>
                <h1>Profile</h1>
            </Col>

            <Col md={9}>
                <h1>Orders</h1>
            </Col>

        </Row>
    )
}

export default ProfilePage;
