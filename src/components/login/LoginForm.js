import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'components/shared/form/BwmInput';
import { BwmError } from 'components/shared/form/BwmError';
import { required, minLength4 } from 'components/shared/form/Validators'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
  return (
    <form onSubmit={handleSubmit((submitCb))}>
          <Field
            name="email"
            type="email"
            label='Email'
            className='form-control'
            component={BwmInput}
            validate={[required, minLength4]}
          />
          <Field
            name="password"
            type="password"
            label='Password'
            className='form-control'
            component={BwmInput}
            validate={[required]}
          />
        <button className="btn btn-bwm btn-form" type="submit" disabled={! valid || pristine || submitting}>
          Login
        </button>
        <BwmError errors= {errors} />

    </form>
  )
}


export default reduxForm({
  form: 'loginForm',
})(LoginForm)
