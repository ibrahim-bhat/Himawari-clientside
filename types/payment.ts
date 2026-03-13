export type PaymentStatus = "Paid" | "Pending" | "Refunded" | "Issue";

export interface Payment {
  id: number;
  transactionId: string;
  date: string;
  amount: string;
  method: string;
  status: PaymentStatus;
  userId?: number;
}

export interface Earnings {
  id: number;
  professionalId: number;
  professionalName: string;
  role: string;
  amount: string;
  period: string;
  sessions: number;
}

export interface Commission {
  listenerPercent: number;
  counselorPercent: number;
  psychiatristPercent: number;
}

export interface Refund {
  id: number;
  transactionId: string;
  amount: string;
  reason: string;
  date: string;
  status: "Completed" | "Pending";
}
