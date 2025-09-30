import AuthForm from '@/components/auth/auth-form'
import React from 'react'

const Register = () => {
  return (

      <AuthForm
        formTitle='Register to your account'
        showProvider={true}
        footerLabel="Already have an account?"
        footerHref='/auth/login'
      >
        <div>Register</div>
      </AuthForm>
  )
}

export default Register