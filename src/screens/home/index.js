import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Home from './components';

const HomeScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <Home
            {...props}
        />
    );
};

export default HomeScreen;
