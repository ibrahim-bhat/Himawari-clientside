export type BookingType = "chat" | "voice" | "video";
export type BookingStatus = "Completed" | "Upcoming" | "Cancelled" | "Pending";

export interface BookingProfessional {
  name: string;
  role: string;
  image: string;
}

export interface Booking {
  id: number;
  user: { id: number; name: string; image?: string };
  professional: BookingProfessional;
  type: BookingType;
  date: string;
  time: string;
  duration: string;
  status: BookingStatus;
}

export interface CallChatHistoryEntry {
  id: number;
  professional: BookingProfessional;
  date: string;
  time: string;
  mode: string;
  notes: string;
}
