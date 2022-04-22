import {setNewData} from "../store/form-reducer.ts";

const url = 'https://fedamian.blob.core.windows.net/damian/assets/options.json'
export const getFormData = () => {
    return dispatch => {
        fetch(url, {
            headers: {
                'Authorization': '80ee579c-b01e-0001-1db0-55695d000000',
                'x-ms-date': '2022-04-21T18:47:45.0259453Z',
                'x-ms-version': '2009-09-19',
                'Content-type': 'application/json; charset=UTF-8',

            },
            mode: 'no-cors', // no-cors, *cors, same-origin
        })
            .then(response => response.json())
            .then(json => dispatch(setNewData(json.parse())))
    }
}

export const sendFormData = (data) => {
    return dispatch => {
        fetch(url + 'someAPI', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setNewData(data),
                )
            })
    }
}
