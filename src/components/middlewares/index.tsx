// import userSaga from './user'
// import productSaga from './product'
// import { all } from 'redux-saga/effects'

// export default function* rootSaga() {
//     yield all([
//         userSaga,
//         productSaga
//     ])
// }

// import { put, takeLatest, all } from 'redux-saga/effects';
// import axios from 'axios'

// function* fetchNews() {
//     try {
//         const json = yield axios.get('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//             .then(response => response.data);
//             alert(json)
//         yield put({ type: "NEWS_RECEIVED", json: json.articles, });
//     }
//     catch (error) {
//         alert(error)
//     }
// }
// function* actionWatcher() {
//     yield takeLatest('GET_NEWS', fetchNews)
// }
// export default function* rootSaga() {
//     yield all([
//         actionWatcher(),
//     ]);
// }




// import { put, takeEvery, takeLatest , delay, fork} from 'redux-saga/effects'
// import axios from 'axios'

// async function fetchAsync() {
//     alert("hiii")
//    const response = await axios.get('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//             //    .then(response => response.data);
//                alert(JSON.stringify(response))
//    if (response) {
//        return await response.data;
//    }
//    throw new Error("Unexpected error!!!");
// }
// function* fetchUser() {
//    try {
//     // setTimeout(function() {
//     //     //your code to be executed after 1 second
//     //     alert("hiii")
//     //   }, 3000);
//         const users = yield fork(fetchAsync);
//         //yield delay(5000)

//        yield put({type: 'NEWS_RECEIVED', data: {"name": "Abhishek"}});
//    } catch (e) {
//        alert(e)
//        yield put({type: 'LOAD_USERS_ERROR', error: e.message});
//    }
// }
// export function* rootSaga() {
//    // Allows concurrent fetches of users
//    yield takeLatest('GET_NEWS', fetchUser);
//    // Does not allow concurrent fetches of users
//    // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
// }
// export default rootSaga;




import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../api/api'
async function fetchAsync(func: any) {
    const response = await func();
    if (response) {
        return await response;
    }
    throw new Error("Unexpected error!!!");
}
function* fetchUser() {
    try {
        const users = yield fetchAsync(Api.getUsers);
        yield put({ type: 'PRODUCT_RECEIVED', data: users });
    } catch (e) {
        yield put({ type: 'ERROR', error: e.message });
    }
}
export function* usersSaga() {
    // Allows concurrent fetches of users
    yield takeLatest('GET_PRODUCTS', fetchUser);
}
export default usersSaga;