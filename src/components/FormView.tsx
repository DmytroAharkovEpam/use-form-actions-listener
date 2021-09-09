import React from 'react'
import { Field } from 'react-final-form'

import { FormNames } from '../constants'
import { useFormActionsListener } from '../form/useFormActionsListener'


export const FormView = ({ handleSubmit, name }: { handleSubmit: () => void, name: FormNames }) => {
  useFormActionsListener(name)
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Default Input</h2>
      <div>
        <label>First Name</label>
        <Field name="firstName" component="input" placeholder="First Name" />
      </div>

      <h2>Render Function</h2>
      <Field
        name="bio"
        render={({ input, meta }) => (
          <div>
            <label>Bio</label>
            <textarea {...input} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      />

      <h2>Render Function as Children</h2>
      <Field name="phone">
        {({ input, meta }) => (
          <div>
            <label>Phone(in order to submit pass should be empty)</label>
            <input type="text" {...input} placeholder="Phone" />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      </Field>

      <button type="submit">Submit</button>
    </form>
  )
}