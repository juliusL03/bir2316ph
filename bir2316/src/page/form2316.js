
import React, { useEffect } from "react";
import FormCom2316 from '../component/formCom2316';
import SelectEmployee from '../component/selectEmployee';
import { useDispatch, useSelector } from "react-redux";


import classes from '../page/css/layout.module.css'
import { getFormTwo } from '../redux/duck/formTwo';


const Form2316 = () => {
    const dispatch = useDispatch();
    const formTwo = useSelector((state) => state.formTwo.formTwo);
    
    useEffect(() => {
        dispatch(getFormTwo())
    }, [dispatch])
    
    console.log('data', formTwo )
    return (
        <div className={classes.row}>
            <div className={classes.column} style={{width: 300}}> 
                 {/* <SelectEmployee  /> */}
                 <div className={classes.selectBox}>
            <h3>Select Employee's</h3>
            {formTwo && formTwo.map( e => <><input type="checkbox" /><label>{e.employeeName}</label><button>view</button></>)}
           
        </div>
            </div>
            
           <FormCom2316 data={ formTwo && formTwo}/>
        </div>
        
    );
}

export default Form2316;