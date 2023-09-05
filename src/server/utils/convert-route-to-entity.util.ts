const mapping: Record<string, string> = {
  accountings: 'accounting',
  companies: 'company',
  invoices: 'invoice',
  permissions: 'permission',
  roles: 'role',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
