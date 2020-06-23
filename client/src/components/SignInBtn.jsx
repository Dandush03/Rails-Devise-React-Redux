import React from 'react';

function SignInBtn() {
  return (
    <>
      <button type="button" onClick={() => window.location.replace('/login')}>Log In</button>
    </>
  );
}


export default SignInBtn;
