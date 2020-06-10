import React from 'react';

import Wrapper from '../../Layouts/Wrapper';
import LoginForm from '../../Containers/LoginForm';

export function Login() {
  return <Wrapper children={<LoginForm />} />;
}

export default Login;