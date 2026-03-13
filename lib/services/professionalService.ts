import type { Professional, ProfessionalRole, SessionHistoryItem, FeedbackItem } from "@/types";

const roleMap: Record<string, ProfessionalRole> = {
  Listener: "listener",
  Counselor: "counselor",
  Psychiatrist: "psychiatrist",
};

const mockProfessionals: Professional[] = [
  { id: 1, name: "Dr. Adeel Rashid", role: "psychiatrist", email: "adeel.rashid@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.5, reviews: 52, sessions: "1,240", hours: "420hrs", joined: "Jan 2024", image: "/pic.png", license: "#PSY-112233", education: "MD in Psychiatry", specialties: ["Depression", "Anxiety"], isActive: true, certificates: ["Board Certified"] },
  { id: 2, name: "Dr. Sana Mir", role: "psychiatrist", email: "sana.mir@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.3, reviews: 47, sessions: "980", hours: "320hrs", joined: "Feb 2024", image: "/pic.png", license: "#PSY-112234", education: "MD in Psychiatry", specialties: ["Anxiety"], isActive: false, lastSeen: "2 hrs ago", certificates: [] },
  { id: 3, name: "Dr. Farhana Malik", role: "counselor", email: "farhana.malik@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.6, reviews: 85, sessions: "1,640", hours: "500hrs", joined: "Apr 2023", image: "/pic.png", license: "#PSY-000000", education: "PhD in Counseling", specialties: ["Depression", "Anxiety", "Trauma"], isActive: true, certificates: ["Licensed Counselor"] },
  { id: 4, name: "Dr. Hina Shah", role: "counselor", email: "hina.shah@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 5.0, reviews: 92, sessions: "1,200", hours: "400hrs", joined: "Jun 2023", image: "/pic.png", education: "MA in Counseling", specialties: ["Stress", "Trauma"], isActive: true, certificates: [] },
  { id: 5, name: "Dr. Ali Raza", role: "listener", email: "ali.raza@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.5, reviews: 184, sessions: "2,100", hours: "850hrs", joined: "Mar 2022", image: "/pic.png", license: "#LST-998877", education: "MA in Psychology", specialties: ["General Listening", "Stress Management"], isActive: true, certificates: ["Listener Certified"] },
  { id: 6, name: "Dr. Zoya Ahmad", role: "listener", email: "zoya.ahmad@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.8, reviews: 98, sessions: "1,500", hours: "600hrs", joined: "Aug 2023", image: "/pic.png", specialties: ["General Listening"], isActive: true, certificates: [] },
  { id: 7, name: "Dr. Numan Khalid", role: "psychiatrist", email: "numan.khalid@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.5, reviews: 52, sessions: "1,100", hours: "380hrs", joined: "Sep 2024", image: "/pic.png", education: "MD in Psychiatry", specialties: ["Depression"], isActive: false, lastSeen: "30 min ago", certificates: [] },
  { id: 8, name: "Dr. Kafeel Shah", role: "counselor", email: "kafeel.shah@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 5.0, reviews: 68, sessions: "900", hours: "300hrs", joined: "Nov 2023", image: "/pic.png", specialties: ["Anxiety", "Trauma"], isActive: false, lastSeen: "17 min ago", certificates: [] },
  { id: 9, name: "Dr. Shaista Khan", role: "psychiatrist", email: "shaista.khan@gmail.com", phone: "+91 1234567890", location: "Karan Nagar, Srinagar.", rating: 4.6, reviews: 99, sessions: "1,350", hours: "450hrs", joined: "Jan 2024", image: "/pic.png", education: "MD in Psychiatry", specialties: ["Depression", "Anxiety"], isActive: true, certificates: [] },
];

const sessionHistory: SessionHistoryItem[] = [
  { id: 1, patient: "Ayaan Malik", date: "Feb 20, 2026", time: "09:30am", type: "Video Call", status: "Upcoming", action: "Details" },
  { id: 2, patient: "Towfeeq Bhat", date: "Feb 11, 2026", time: "10:30am", type: "Audio Call", status: "Completed", action: "View" },
  { id: 3, patient: "Sana Farooq", date: "Feb 11, 2026", time: "11:00am", type: "Video Call", status: "Cancelled", action: "Reason" },
  { id: 4, patient: "Zara Qureshi", date: "Feb 10, 2026", time: "02:00pm", type: "Chat Session", status: "Completed", action: "View" },
];

const feedbacks: FeedbackItem[] = [
  { id: 1, name: "Ayesha Noor", rating: 4.8, time: "3 Days Ago", comment: "The professional listened patiently and offered practical guidance. I felt much more at ease after the session. Highly recommended!" },
  { id: 2, name: "Imran Qazi", rating: 4.4, time: "5 Days Ago", comment: "Very professional and compassionate. Her calm and supportive approach made the session very comfortable for me." },
  { id: 3, name: "Sana Rahman", rating: 4.5, time: "7 Days Ago", comment: "She creates a safe and comfortable space to talk. The session helped me identify the root causes of my stress." },
];

export function getProfessionals(role?: ProfessionalRole): Professional[] {
  if (role) return mockProfessionals.filter((p) => p.role === role);
  return [...mockProfessionals];
}

export function getProfessionalById(id: number): Professional | undefined {
  return mockProfessionals.find((p) => p.id === id);
}

export function getSessionHistory(_professionalId: number): SessionHistoryItem[] {
  return [...sessionHistory];
}

export function getFeedbacks(_professionalId: number): FeedbackItem[] {
  return [...feedbacks];
}

export function updateProfessionalActive(id: number, isActive: boolean): Professional | undefined {
  const p = mockProfessionals.find((p) => p.id === id);
  if (p) p.isActive = isActive;
  return p;
}

export function updateProfessional(
  id: number,
  patch: { name?: string; email?: string; phone?: string; location?: string }
): Professional | undefined {
  const p = mockProfessionals.find((p) => p.id === id);
  if (p) {
    if (patch.name != null) p.name = patch.name;
    if (patch.email != null) p.email = patch.email;
    if (patch.phone != null) p.phone = patch.phone;
    if (patch.location != null) p.location = patch.location;
  }
  return p;
}

export function getProfessionalCounts(): { listeners: number; counselors: number; psychiatrists: number; available: number; avgRating: number } {
  const listeners = mockProfessionals.filter((p) => p.role === "listener").length;
  const counselors = mockProfessionals.filter((p) => p.role === "counselor").length;
  const psychiatrists = mockProfessionals.filter((p) => p.role === "psychiatrist").length;
  const available = mockProfessionals.filter((p) => p.isActive).length;
  const avgRating = mockProfessionals.length ? mockProfessionals.reduce((a, p) => a + p.rating, 0) / mockProfessionals.length : 0;
  return { listeners, counselors, psychiatrists, available, avgRating: Math.round(avgRating * 10) / 10 };
}
