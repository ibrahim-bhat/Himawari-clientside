export interface DashboardMetrics {
  totalUsers: number;
  totalListeners: number;
  totalCounselors: number;
  totalPsychiatrists: number;
  todayBookings: number;
  totalRevenue: string;
  activeCalls: number;
  activeChats: number;
  usersBadge: string;
  listenersBadge: string;
  counselorsBadge: string;
  psychiatristsBadge: string;
  bookingsBadge: string;
  revenueBadge: string;
  callsBadge: string;
  chatsBadge: string;
}

export interface RecentActivity {
  title: string;
  description: string;
  time: string;
}

const mockMetrics: DashboardMetrics = {
  totalUsers: 1000,
  totalListeners: 547,
  totalCounselors: 325,
  totalPsychiatrists: 128,
  todayBookings: 29,
  totalRevenue: "₹82,000",
  activeCalls: 10,
  activeChats: 59,
  usersBadge: "5%",
  listenersBadge: "12%",
  counselorsBadge: "8%",
  psychiatristsBadge: "15%",
  bookingsBadge: "10%",
  revenueBadge: "11%",
  callsBadge: "11%",
  chatsBadge: "18%",
};

const mockActivities: RecentActivity[] = [
  { title: "New Session Booked", description: "Ayesha Khan booked a counseling session with Dr. Farhan Ali.", time: "5 mins ago" },
  { title: "Psychiatrist Consultation Completed", description: "Session with Dr. Sana Mir marked as completed.", time: "20 mins ago" },
  { title: "Listener Assigned", description: "New listener Umar Sheikh assigned to Zoya Ahmed.", time: "45 mins ago" },
  { title: "Appointment Rescheduled", description: "Psychiatry appointment with Dr. Adeel Rashid rescheduled.", time: "1h ago" },
  { title: "New User Registered", description: "Maryam Noor joined the platform.", time: "2h ago" },
];

export function getDashboardMetrics(): DashboardMetrics {
  return { ...mockMetrics };
}

export function getRecentActivities(limit?: number): RecentActivity[] {
  return limit ? mockActivities.slice(0, limit) : [...mockActivities];
}
