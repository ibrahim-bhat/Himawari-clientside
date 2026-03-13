import type { SubAdmin, Role, Permission, ActivityLog } from "@/types";

const mockSubAdmins: SubAdmin[] = [
  { id: 1, name: "Admin One", email: "admin1@himawari.com", role: "Super Admin", createdAt: "2024-06-01", isActive: true },
  { id: 2, name: "Admin Two", email: "admin2@himawari.com", role: "Content Manager", createdAt: "2024-08-15", isActive: true },
];

const defaultPermissions: Permission[] = [
  { key: "users", label: "User Management", enabled: true },
  { key: "listeners", label: "Listener Management", enabled: true },
  { key: "counselors", label: "Counselor Management", enabled: true },
  { key: "psychiatrists", label: "Psychiatrist Management", enabled: true },
  { key: "bookings", label: "Booking Management", enabled: true },
  { key: "content", label: "Content Management", enabled: true },
  { key: "reels", label: "Reels Management", enabled: true },
  { key: "payments", label: "Payment & Revenue", enabled: true },
  { key: "logs", label: "Call & Chat Logs", enabled: true },
  { key: "referrals", label: "Refer System", enabled: true },
  { key: "reports", label: "Reports", enabled: true },
  { key: "cms", label: "CMS Pages", enabled: true },
  { key: "settings", label: "Settings", enabled: false },
];

const mockActivityLogs: ActivityLog[] = [
  { id: 1, adminId: 1, adminName: "Admin One", action: "Updated", resource: "User #3", timestamp: "2025-02-10 14:30", details: "Status changed to Blocked" },
  { id: 2, adminId: 2, adminName: "Admin Two", action: "Approved", resource: "Reel #2", timestamp: "2025-02-10 12:00" },
  { id: 3, adminId: 1, adminName: "Admin One", action: "Created", resource: "Referral", timestamp: "2025-02-09 16:45" },
];

export function getSubAdmins(): SubAdmin[] {
  return [...mockSubAdmins];
}

export function getSubAdminById(id: number): SubAdmin | undefined {
  return mockSubAdmins.find((a) => a.id === id);
}

export function createSubAdmin(data: Omit<SubAdmin, "id" | "createdAt">): SubAdmin {
  const newAdmin: SubAdmin = {
    ...data,
    id: Math.max(...mockSubAdmins.map((a) => a.id), 0) + 1,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  mockSubAdmins.push(newAdmin);
  return newAdmin;
}

export function getRolePermissions(roleId?: string): Permission[] {
  return roleId ? defaultPermissions.map((p) => ({ ...p })) : [...defaultPermissions];
}

export function updateRolePermissions(_roleId: string, permissions: Permission[]): Permission[] {
  permissions.forEach((p) => {
    const existing = defaultPermissions.find((d) => d.key === p.key);
    if (existing) existing.enabled = p.enabled;
  });
  return getRolePermissions(_roleId);
}

export function getActivityLogs(limit?: number): ActivityLog[] {
  const list = [...mockActivityLogs];
  return limit ? list.slice(0, limit) : list;
}
