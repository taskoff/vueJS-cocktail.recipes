
// const appKey = 'kid_r1VG51qvL';
// const appSecret = '25dbee764f6c402480aed5aaa313119d';
// const rootUrl = 'https://baas.kinvey.com';

// function createAuthorization(type) {
//     return type === 'Basic'
//     ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
//     : `Kinvey ${sessionStorage.getItem('authtoken')}`
// }

// function makeHeaders(method, data, type) {
//     const headers = {
//         method: method,
//         headers: {
//             'Authorization': createAuthorization(type),
//             'content-type': 'application/json'
//         }
//     }
//     if (method === 'POST' || method === 'PUT') {
//         headers.body = JSON.stringify(data);
//     }

//     return headers;
// }

// function handleError(e) {
//     if (!e.ok) {
//         alert(e.statusText)
//         throw new Error(e.statusText);
//     }
//     return e;
// }

// function serializeData(data) {
//     if(data.status === 204){
//         return data;
//     }
//     return data.json();
// }

// function fetchData(kinveyModul, endPoint, headers) {
//     const url = `${rootUrl}/${kinveyModul}/${appKey}/${endPoint}`;
//     return fetch(url, headers)
//         .then(handleError)
//         .then(serializeData)
// }

// export function get(kinveyModul, endPoint, type) {
//     const headers = makeHeaders('GET', type);
//     return fetchData(kinveyModul, endPoint, headers)
// }
// export function post(kinveyModul, endPoint, data, type) {
//     const headers = makeHeaders('POST', data, type);
//     return fetchData(kinveyModul, endPoint, headers)
// }
// export function put(kinveyModul, endPoint, data, type) {
//     const headers = makeHeaders('PUT', data, type);
//     return fetchData(kinveyModul, endPoint, headers)
// }
// export function del(kinveyModul, endPoint, type) {
//     const headers = makeHeaders('DELETE', type);
//     return fetchData(kinveyModul, endPoint, headers)
// }