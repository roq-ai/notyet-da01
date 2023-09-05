import axios from 'axios';
import queryString from 'query-string';
import { AccountingInterface, AccountingGetQueryInterface } from 'interfaces/accounting';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccountings = async (
  query?: AccountingGetQueryInterface,
): Promise<PaginatedInterface<AccountingInterface>> => {
  const response = await axios.get('/api/accountings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAccounting = async (accounting: AccountingInterface) => {
  const response = await axios.post('/api/accountings', accounting);
  return response.data;
};

export const updateAccountingById = async (id: string, accounting: AccountingInterface) => {
  const response = await axios.put(`/api/accountings/${id}`, accounting);
  return response.data;
};

export const getAccountingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/accountings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccountingById = async (id: string) => {
  const response = await axios.delete(`/api/accountings/${id}`);
  return response.data;
};
