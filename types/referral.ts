export type ReferralType = "counselor" | "psychiatrist";
export type ReferralStatus = "pending" | "in_progress" | "completed" | "cancelled";

export interface Referral {
  id: number;
  fromUserId: number;
  fromUserName: string;
  toProfessionalId: number;
  toProfessionalName: string;
  type: ReferralType;
  status: ReferralStatus;
  followUpNotes?: string;
  createdAt: string;
  updatedAt: string;
}
