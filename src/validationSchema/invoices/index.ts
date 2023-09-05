import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  vendor: yup.string().required(),
  invoice_date: yup.date().required(),
  due_date: yup.date().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
