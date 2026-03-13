import type { Booking, BookingType, BookingStatus, CallChatHistoryEntry } from "@/types";

const mockBookings: Booking[] = [
  { id: 1, user: { id: 1, name: "Ayaan Khan", image: "/pic.png" }, professional: { name: "Dr. Adeel Rashid", role: "Psychiatrist", image: "/pic.png" }, type: "video", date: "May 14, 2025", time: "10:30AM - 11:15AM", duration: "45 min", status: "Completed" },
  { id: 2, user: { id: 2, name: "Zara Ahmed", image: "/pic.png" }, professional: { name: "Dr. Sana Mir", role: "Psychiatrist", image: "/pic.png" }, type: "voice", date: "May 10, 2025", time: "02:00PM - 03:00PM", duration: "1 hr", status: "Cancelled" },
  { id: 3, user: { id: 3, name: "Hamza Malik", image: "/pic.png" }, professional: { name: "Dr. Farhan Malik", role: "Counselor", image: "/pic.png" }, type: "chat", date: "May 03, 2025", time: "09:00PM - 09:45AM", duration: "45 min", status: "Completed" },
  { id: 4, user: { id: 4, name: "Noor Fatima", image: "/pic.png" }, professional: { name: "Dr. Hina Shah", role: "Counselor", image: "/pic.png" }, type: "voice", date: "May 14, 2025", time: "10:30AM - 11:15AM", duration: "45 min", status: "Completed" },
  { id: 5, user: { id: 5, name: "Ali Raza", image: "/pic.png" }, professional: { name: "Dr. Ali Raza", role: "Listener", image: "/pic.png" }, type: "chat", date: "Apr 28, 2025", time: "11:00AM - 11:30AM", duration: "30 min", status: "Completed" },
  { id: 6, user: { id: 6, name: "Mustafa Sheikh", image: "/pic.png" }, professional: { name: "Dr. Zoya Ahmed", role: "Listener", image: "/pic.png" }, type: "video", date: "Apr 14, 2025", time: "12:00AM - 12:30AM", duration: "30 min", status: "Upcoming" },
];

export interface BookingFilters {
  type?: BookingType;
  status?: BookingStatus;
  dateFrom?: string;
  dateTo?: string;
}

export function getBookings(filters?: BookingFilters): Booking[] {
  let list = [...mockBookings];
  if (filters?.type) list = list.filter((b) => b.type === filters.type);
  if (filters?.status) list = list.filter((b) => b.status === filters.status);
  if (filters?.dateFrom) list = list.filter((b) => b.date >= filters.dateFrom!);
  if (filters?.dateTo) list = list.filter((b) => b.date <= filters.dateTo!);
  return list;
}

export function getBookingById(id: number): Booking | undefined {
  return mockBookings.find((b) => b.id === id);
}

export function getBookingsByUserId(userId: number): Booking[] {
  return mockBookings.filter((b) => b.user.id === userId);
}

export function rescheduleBooking(_id: number, _date: string, _time: string): Booking | undefined {
  return getBookingById(_id);
}

export function cancelBooking(id: number): Booking | undefined {
  const b = mockBookings.find((b) => b.id === id);
  if (b) b.status = "Cancelled";
  return b;
}

const mockCallChatHistory: CallChatHistoryEntry[] = [
  { id: 1, professional: { name: "Dr. Adeel Rashid", role: "Psychiatrist", image: "/pic.png" }, date: "May 14, 2025", time: "10:30AM - 11:15AM", mode: "Video Call", notes: "User requested to continue sessions with the same counselor for better" },
  { id: 2, professional: { name: "Dr. Sana Mir", role: "Psychiatrist", image: "/pic.png" }, date: "May 10, 2025", time: "02:00PM - 03:00PM", mode: "Audio Call", notes: "Follow-up session required within 7 days for medication review" },
  { id: 3, professional: { name: "Dr. Farhan Malik", role: "Counselor", image: "/pic.png" }, date: "May 03, 2025", time: "09:00PM - 09:45AM", mode: "Chat Session", notes: "User expressed mild distress during chat, no escalation required. Monitor" },
  { id: 4, professional: { name: "Dr. Hina Shah", role: "Counselor", image: "/pic.png" }, date: "May 14, 2025", time: "10:30AM - 11:15AM", mode: "Audio Call", notes: "User requested evening time slots for future counseling sessions due to work" },
  { id: 5, professional: { name: "Dr. Ali Raza", role: "Listener", image: "/pic.png" }, date: "Apr 28, 2025", time: "11:00AM - 11:30AM", mode: "Chat Session", notes: "Prescription update pending. Follow-up consultation required before" },
  { id: 6, professional: { name: "Dr. Zoya Ahmed", role: "Listener", image: "/pic.png" }, date: "Apr 14, 2025", time: "12:00AM - 12:30AM", mode: "Chat Session", notes: "User considering therapist change, requested profile details of alternate" },
];

export function getCallChatHistoryByUserId(_userId: number): CallChatHistoryEntry[] {
  return [...mockCallChatHistory];
}
