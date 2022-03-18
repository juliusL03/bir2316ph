import React from "react";
import classes from '../page/css/layout.module.css'

const SelectEmployee = () => {
    return(
        <div className={classes.selectBox}>
            <h3>Select Employee's</h3>
            <input type="checkbox" /> <label>julius legaspi</label>
        </div>
    )
}

export default SelectEmployee;