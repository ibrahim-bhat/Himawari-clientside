export type ProfessionalRole = "listener" | "counselor" | "psychiatrist";

export interface Professional {
  id: number;
  name: string;
  role: ProfessionalRole;
  email: string;
  phone: string;
  location: string;
  rating: number;
  reviews: number;
  sessions: string;
  hours: string;
  joined: string;
  image: string;
  license?: string;
  education?: string;
  specialties: string[];
  isActive: boolean;
  lastSeen?: string;
  specialty?: string;
  certificates?: string[];
}

export interface SessionHistoryItem {
  id: number;
  patient: string;
  date: string;
  time: string;
  type: string;
  status: string;
  action: string;
}

export interface FeedbackItem {
  id: number;
  name: string;
  rating: number;
  time: string;
  comment: string;
}
