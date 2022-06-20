import AuthContent from '../component/Auth/AuthContent';
import React, {useState} from 'react';
import {registerUser} from '../api/auth';
import LoadingOverlay from '../component/Ui/LoadingOverlay';

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  async function signupHandler(email, password) {
    setIsLoading(true);
    await registerUser(email, password);
    setIsLoading(false);
  }
  if (isLoading) {
    return <LoadingOverlay message={'Registering User..'} />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
