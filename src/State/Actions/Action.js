
export const action_function = (data) => {
    return (dispatch) => {
        dispatch({
            type:"action1",
            payload:data
        })
    }
}

export const action_function2 = (data) =>{
    return (dispatch) =>{
        dispatch({
            type: "action1",
            payload: data
        })
    }
}

export const action_function3 = (data) => {
    return (dispatch) => {
        dispatch({
            type:"action3",
            payload: data
        })
    }
}

export const action_function4 = (data) => {
    return (dispatch) => {
        dispatch({
            type: "action4",
            payload : data
        })
    }
}

export const action_function5 = (data) => {
        return (dispatch) => {
            dispatch({
                type: "action5",
                payload : data
            })
        }
}