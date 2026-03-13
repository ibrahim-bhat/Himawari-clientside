import type { Referral, ReferralType, ReferralStatus } from "@/types";

const mockReferrals: Referral[] = [
  { id: 1, fromUserId: 1, fromUserName: "Ayaan Khan", toProfessionalId: 1, toProfessionalName: "Dr. Adeel Rashid", type: "psychiatrist", status: "completed", followUpNotes: "Follow-up scheduled.", createdAt: "2025-01-10", updatedAt: "2025-01-15" },
  { id: 2, fromUserId: 2, fromUserName: "Zara Ahmed", toProfessionalId: 3, toProfessionalName: "Dr. Farhana Malik", type: "counselor", status: "in_progress", createdAt: "2025-02-01", updatedAt: "2025-02-05" },
  { id: 3, fromUserId: 3, fromUserName: "Hamza Malik", toProfessionalId: 1, toProfessionalName: "Dr. Adeel Rashid", type: "psychiatrist", status: "pending", createdAt: "2025-02-10", updatedAt: "2025-02-10" },
];

export function getReferrals(type?: ReferralType, status?: ReferralStatus): Referral[] {
  let list = [...mockReferrals];
  if (type) list = list.filter((r) => r.type === type);
  if (status) list = list.filter((r) => r.status === status);
  return list;
}

export function getReferralById(id: number): Referral | undefined {
  return mockReferrals.find((r) => r.id === id);
}

export function createReferral(data: Omit<Referral, "id" | "createdAt" | "updatedAt">): Referral {
  const now = new Date().toISOString().slice(0, 10);
  const newReferral: Referral = {
    ...data,
    id: Math.max(...mockReferrals.map((r) => r.id), 0) + 1,
    createdAt: now,
    updatedAt: now,
  };
  mockReferrals.push(newReferral);
  return newReferral;
}

export function updateReferralStatus(id: number, status: ReferralStatus): Referral | undefined {
  const r = mockReferrals.find((r) => r.id === id);
  if (r) {
    r.status = status;
    r.updatedAt = new Date().toISOString().slice(0, 10);
  }
  return r;
}

export function updateReferralNotes(id: number, followUpNotes: string): Referral | undefined {
  const r = mockReferrals.find((r) => r.id === id);
  if (r) {
    r.followUpNotes = followUpNotes;
    r.updatedAt = new Date().toISOString().slice(0, 10);
  }
  return r;
}
