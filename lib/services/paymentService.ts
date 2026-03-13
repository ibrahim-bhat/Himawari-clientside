import type { Payment, Earnings, Commission, Refund } from "@/types";

const mockPayments: Payment[] = [
  { id: 1, transactionId: "TXN-9F3K2BLIQ7", date: "May 10, 2025", amount: "₹4,000", method: "Mastercard", status: "Paid", userId: 1 },
  { id: 2, transactionId: "TXN-4M9Z72P6XA", date: "May 03, 2025", amount: "₹3,560", method: "Credit card", status: "Pending", userId: 2 },
  { id: 3, transactionId: "TXN-7Q2L19V3N8", date: "May 14, 2025", amount: "₹8,304", method: "UPI", status: "Paid", userId: 3 },
  { id: 4, transactionId: "TXN-1X5R84K9TY", date: "Apr 28, 2025", amount: "₹4,620", method: "Credit card", status: "Issue", userId: 4 },
  { id: 5, transactionId: "TXN-6P0W37D2CZ", date: "Apr 14, 2025", amount: "₹10,050", method: "G-Pay", status: "Refunded", userId: 5 },
];

const mockEarnings: Earnings[] = [
  { id: 1, professionalId: 1, professionalName: "Dr. Adeel Rashid", role: "Psychiatrist", amount: "₹45,000", period: "Feb 2025", sessions: 120 },
  { id: 2, professionalId: 3, professionalName: "Dr. Farhana Malik", role: "Counselor", amount: "₹38,500", period: "Feb 2025", sessions: 95 },
  { id: 3, professionalId: 5, professionalName: "Dr. Ali Raza", role: "Listener", amount: "₹52,000", period: "Feb 2025", sessions: 180 },
];

const mockCommission: Commission = {
  listenerPercent: 20,
  counselorPercent: 25,
  psychiatristPercent: 30,
};

const mockRefunds: Refund[] = [
  { id: 1, transactionId: "TXN-6P0W37D2CZ", amount: "₹10,050", reason: "User request", date: "Apr 15, 2025", status: "Completed" },
];

export function getUserPayments(userId?: number): Payment[] {
  if (userId) return mockPayments.filter((p) => p.userId === userId);
  return [...mockPayments];
}

export function getListenerEarnings(): Earnings[] {
  return mockEarnings.filter((e) => e.role === "Listener");
}

export function getCounselorEarnings(): Earnings[] {
  return mockEarnings.filter((e) => e.role === "Counselor");
}

export function getPsychiatristEarnings(): Earnings[] {
  return mockEarnings.filter((e) => e.role === "Psychiatrist");
}

export function getPaymentCommissionSettings(): Commission {
  return { ...mockCommission };
}

export function updatePaymentCommissionSettings(settings: Partial<Commission>): Commission {
  Object.assign(mockCommission, settings);
  return getPaymentCommissionSettings();
}

export function getRefunds(): Refund[] {
  return [...mockRefunds];
}
