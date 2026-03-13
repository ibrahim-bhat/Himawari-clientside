export type UserStatus = "Active" | "Blocked";

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: UserStatus;
  joiningDate: string;
  image: string;
  userId?: string;
}
