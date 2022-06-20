import axios from 'axios';

const APIKEY = 'AIzaSyDJWEuim4YyWgT4EJYAJTeHIG39iERso_s';

/**
 *
 * @param email
 * @param password
 */
export function registerUser({email, password}) {
  return axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + APIKEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}

/**
 *
 * @param email
 * @param password
 * @returns {Promise<void>}
 */
export function login({email, password}) {
  return axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      APIKEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
