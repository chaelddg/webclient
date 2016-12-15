export default function reducer(state={
    form_data: null
}, action) {
    console.log('@@ action',action);
    switch (action.type) {
        case "FETCH_FORM_DATA": {
            return {...state, form_data: null}
        }
        case "SEND_FORM_DATA": {
            console.log('@@ action ', action)
            return {...state, form_data: null}
        }
    }

    return state
}