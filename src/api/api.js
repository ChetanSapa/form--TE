import {setData} from "../store/form-reducer";

const url = 'https://fedamian.blob.core.windows.net/damian/assets/options.json'

const headers = new Headers({
    'Content-Type': 'application/json'
});
const options = {
    headers,
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',

};
export const getData = () => {
    return  dispatch => {
        fetch(url, options).then((response)=>{
            console.log(response.json());
            dispatch(setData(response.json()))
        })
    }
}
