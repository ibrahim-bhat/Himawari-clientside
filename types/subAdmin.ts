export interface SubAdmin {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isActive: boolean;
}

export interface Permission {
  key: string;
  label: string;
  enabled: boolean;
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface ActivityLog {
  id: number;
  adminId: number;
  adminName: string;
  action: string;
  resource: string;
  timestamp: string;
  details?: string;
}
