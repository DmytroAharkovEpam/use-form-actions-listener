export const SUBMIT_MY_FORM = "SUBMIT_MY_FORM";

export interface MyForm {
  firstName?: string;
  bio?: string;
  phone?: string;
}

export const submitMyForm = (form: MyForm) => ({
  type: SUBMIT_MY_FORM,
  payload: { form },
});
