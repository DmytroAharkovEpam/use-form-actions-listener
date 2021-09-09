export const RESET_FORM = 'RESET_FORM'
export const SUBMIT_FORM = 'SUBMIT_FORM'

export const reset = (form: string) => ({
  type: RESET_FORM,
  payload: {
    form,
  }
})

export const submit = (form: string) => ({
  type: SUBMIT_FORM,
  payload: {
    form,
  }
})