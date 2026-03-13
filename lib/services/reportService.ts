import type {
  DailyKPI,
  BookingConversion,
  TopListenerRow,
  RatingReportRow,
  RevenueReportRow,
  UserGrowthRow,
  ChartDataPoint,
} from "@/types";

const mockDailyKPI: DailyKPI[] = [
  { date: "2025-02-01", bookings: 25, revenue: "₹45,000", newUsers: 12, activeCalls: 8, activeChats: 45 },
  { date: "2025-02-02", bookings: 29, revenue: "₹52,000", newUsers: 15, activeCalls: 10, activeChats: 59 },
];

const mockBookingConversion: BookingConversion[] = [
  { period: "Feb 2025", totalSessions: 320, completed: 298, conversionRate: 93.1 },
  { period: "Jan 2025", totalSessions: 280, completed: 252, conversionRate: 90 },
];

const mockTopListeners: TopListenerRow[] = [
  { id: 5, name: "Dr. Ali Raza", role: "Listener", sessions: 2100, rating: 4.5, revenue: "₹52,000" },
  { id: 6, name: "Dr. Zoya Ahmad", role: "Listener", sessions: 1500, rating: 4.8, revenue: "₹38,000" },
];

const mockRatingReport: RatingReportRow[] = [
  { professionalId: 4, name: "Dr. Hina Shah", role: "Counselor", avgRating: 5.0, totalReviews: 92 },
  { professionalId: 8, name: "Dr. Kafeel Shah", role: "Counselor", avgRating: 5.0, totalReviews: 68 },
  { professionalId: 9, name: "Dr. Shaista Khan", role: "Psychiatrist", avgRating: 4.6, totalReviews: 99 },
];

const mockRevenueReport: RevenueReportRow[] = [
  { period: "Feb 2025", revenue: "₹82,000", bookings: 320, growthPercent: 11 },
  { period: "Jan 2025", revenue: "₹74,000", bookings: 280, growthPercent: 8 },
];

const mockUserGrowth: UserGrowthRow[] = [
  { period: "Feb 2025", newUsers: 145, totalUsers: 1000, growthPercent: 5 },
  { period: "Jan 2025", newUsers: 120, totalUsers: 855, growthPercent: 4 },
];

export function getDailyKPI(): DailyKPI[] {
  return [...mockDailyKPI];
}

export function getBookingConversion(): BookingConversion[] {
  return [...mockBookingConversion];
}

export function getTopListeners(): TopListenerRow[] {
  return [...mockTopListeners];
}

export function getRatingReport(): RatingReportRow[] {
  return [...mockRatingReport];
}

export function getRevenueReport(): RevenueReportRow[] {
  return [...mockRevenueReport];
}

export function getUserGrowth(): UserGrowthRow[] {
  return [...mockUserGrowth];
}

export function getChartData(period: "weekly" | "monthly"): ChartDataPoint[] {
  if (period === "weekly") {
    return [
      { label: "Mon", value: 2000 },
      { label: "Tue", value: 6000 },
      { label: "Wed", value: 4500 },
      { label: "Thu", value: 8000 },
      { label: "Fri", value: 5500 },
      { label: "Sat", value: 7000 },
      { label: "Sun", value: 4000 },
    ];
  }
  return [
    { label: "Week 1", value: 18000 },
    { label: "Week 2", value: 22000 },
    { label: "Week 3", value: 20000 },
    { label: "Week 4", value: 22000 },
  ];
}
