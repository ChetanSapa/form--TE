import {sendData, setNewData} from "../store/form-reducer";

const url = 'https://fedamian.blob.core.windows.net/damian/assets/options.json'
export const getData = () => {
    return dispatch => {
        fetch(url,{
            headers:{
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true
            },
            mode: 'no-cors', // no-cors, *cors, same-origin
            })
            .then(response => response.json())
            .then(json => dispatch(setNewData(json)))
    }
}

export const sendFormData = (data) => {
    return dispatch => {
        fetch(url + 'posts', {
            method: 'POST',
            body: JSON.stringify({
                // title: data.firsName,
                // body: data.secondName,
                // userId: data.occupation,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch(sendData(data),
                    console.log(response)
                )
            })
    }
}






//
// const headers = new Headers({
//     'Content-Type': 'application/json'
// });
// const options = {
//     headers,
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'include', // include, *same-origin, omit
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer',
//
// };
// export const getData = () => {
//     return  dispatch => {
//         fetch(url, options).then((response)=>{
//             console.log(response.json());
//             dispatch(setData(response.json()))
//         })
//     }
// }
