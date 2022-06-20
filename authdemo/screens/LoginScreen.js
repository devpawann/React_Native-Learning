import AuthContent from '../component/Auth/AuthContent';
import React, {useContext, useState} from 'react';
import {login, registerUser} from '../api/auth';
import LoadingOverlay from '../component/Ui/LoadingOverlay';
import {AuthContext} from '../store/auth-context';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  async function signupHandler(email, password) {
    setIsLoading(true);
    const response = await login(email, password);
    authContext.authenticate(response.data.idToken);
    setIsLoading(false);
  }
  if (isLoading) {
    return <LoadingOverlay message={'Registering User..'} />;
  }
  return <AuthContent isLogin onAuthenticate={signupHandler} />;
}

export default LoginScreen;
