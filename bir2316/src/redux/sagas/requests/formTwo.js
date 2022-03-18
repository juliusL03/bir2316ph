import axios from "axios";

// var host = '192.168.0.107';
var host =  process.env.REACT_APP_HOST;
var port =  process.env.REACT_APP_PORT;

export function requestGetFormTwo() {
    
    return axios.request({
        method: "GET",
        url: `http://${host}:${port}/formTwo`
    });
}

export const addPostFormTwo = async data => await axios.post(`http://${host}:${port}/formTwo`, data);

export const editFormTwo = async data => await axios.put(`http://${host}:${port}/formTwo/${data.formTwoID}`, data);