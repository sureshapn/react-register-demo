import callApi from '../../util/apiCaller';

export function register(user) {
  return (dispatch) => {
    return callApi('register', 'post', user);
  };
}
