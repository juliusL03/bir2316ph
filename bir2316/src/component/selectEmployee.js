import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFormTwo } from "../redux/duck/formTwo";

import classes from '../page/css/layout.module.css';

const SelectEmployee = () => {
    const dispatch = useDispatch();

    const formTwo = useSelector((state) => state.formTwo.formTwo);

    useEffect(() => {
        dispatch(getFormTwo())
    }, [dispatch])
    
    console.log('data', formTwo )

    return(
        <div className={classes.selectBox}>
            <h3>Select Employee's</h3>
            {formTwo && formTwo.map( e => <><input type="checkbox" /><label>{e.employeeName}</label><button>view</button></>)}
           
        </div>
    )
}

export default SelectEmployee;