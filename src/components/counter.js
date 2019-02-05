import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, reset}) => {
    return (
        <div className="content">
            <h1 className="counter">{counter}</h1>
            <div className="inc" onClick={inc}><img src="img/plus.png" alt="plus"/></div>
            <div className="dec" onClick={dec}><img src="img/minus.png" alt="minus"/></div>
            <div className="reset" onClick={reset}><img src="img/reset.png" alt="reset"/></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);