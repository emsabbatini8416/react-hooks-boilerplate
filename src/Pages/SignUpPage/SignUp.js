import React from 'react';

import Wrapper from '../../Layouts/Wrapper';
import SignUpForm from '../../Containers/SignUpForm';

export function SignUp() {
  return <Wrapper children={<SignUpForm />} />;
}

export default SignUp;