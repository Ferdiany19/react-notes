import firebase from '../../firebase';
import swal from 'sweetalert';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'Ferdian Yuliansyah' })
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                dispatch({ type: 'CHANGE_LOADING', value: false })
                swal("Congratulations!", "Successfully Registered", "success");
                resolve(true);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode, errorMessage);
                dispatch({ type: 'CHANGE_LOADING', value: false });
                reject(false);
        })
    });
}   

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
            firebase
                .auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then((res) => {
                    console.log("success: ", res);
                    const userData = {
                        email: res.user.email,
                        emailVerified: res.user.emailVerified,
                        uid: res.user.uid,
                        refreshToken: res.user.refreshToken
                    }
                    dispatch({ type: 'CHANGE_LOADING', value: false });
                    dispatch({ type: 'CHANGE_ISLOGIN', value: true });
                    dispatch({ type: 'CHANGE_USER', value: res.data });
                    resolve(userData);
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    console.log(errorCode, errorMessage);
                    dispatch({ type: 'CHANGE_LOADING', value: false });
                    dispatch({ type: 'CHANGE_ISLOGIN', value: false });
                    reject(false);
            })
    })
}   