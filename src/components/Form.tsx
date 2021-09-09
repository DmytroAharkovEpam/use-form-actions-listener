import React from 'react'
import { Form } from 'react-final-form'
import { useDispatch } from 'react-redux'

import { submitMyForm, MyForm } from '../redux/ui/actions'
import { FormNames } from '../constants'

import { FormView } from './FormView'

export const FormComponent = () => {
  const dispatch = useDispatch()

  const submit = (values: MyForm) => dispatch(submitMyForm(values))

  return (
    <Form
      onSubmit={submit}
    >
      {
        ({ handleSubmit }) => (
          <FormView handleSubmit={handleSubmit} name={FormNames.MyForm} />
        )
      }
    </Form>
  )
}