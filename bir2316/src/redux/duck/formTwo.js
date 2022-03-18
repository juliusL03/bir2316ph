export const GET_FORMTWO = "GET_FORMTWO";
export const ADD_FORMTWO = "ADD_FORMTWO";
export const UPDATE_FORMTWO = "UPDATE_FORMTWO";
const SET_FORMTWO = "SET_FORMTWO";


export const getFormTwo = () => ({
    type: GET_FORMTWO
});

export const setFormTwo = (formTwo) => ({
    type: SET_FORMTWO,
    formTwo
})

export const postFormTwo = (data) => ({
    type: ADD_FORMTWO,
    data
})

export const updateFormTwo = (data) => ({ 
    type: UPDATE_FORMTWO, 
    data 
});

const initialState = {
    formTwo: undefined
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FORMTWO:
            const {formTwo} = action;
            return {...state, formTwo};
        default:
            return state;
    }
};