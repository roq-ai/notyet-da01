import * as yup from 'yup';

export const accountingValidationSchema = yup.object().shape({
  debit: yup.number().integer().required(),
  credit: yup.number().integer().required(),
  transaction_date: yup.date().required(),
  description: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
