import { useForm } from 'react-final-form'
import { useReduxEffect } from 'use-redux-effect'

import { RESET_FORM, SUBMIT_FORM } from './actions'

export const useFormActionsListener = (name: string)  => {
  const api = useForm()

  useReduxEffect((effect) => {
    if (effect.payload.form === name) {
      api.reset()
    }
  }, [RESET_FORM])

  useReduxEffect((effect) => {
    if (effect.payload.form === name) {
      api.submit()
    }
  }, [SUBMIT_FORM])
}