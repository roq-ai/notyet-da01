import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountingInterface {
  id?: string;
  debit: number;
  credit: number;
  transaction_date: any;
  description: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AccountingGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  company_id?: string;
  user_id?: string;
}
