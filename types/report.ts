export interface DailyKPI {
  date: string;
  bookings: number;
  revenue: string;
  newUsers: number;
  activeCalls: number;
  activeChats: number;
}

export interface BookingConversion {
  period: string;
  totalSessions: number;
  completed: number;
  conversionRate: number;
}

export interface TopListenerRow {
  id: number;
  name: string;
  role: string;
  sessions: number;
  rating: number;
  revenue: string;
}

export interface RatingReportRow {
  professionalId: number;
  name: string;
  role: string;
  avgRating: number;
  totalReviews: number;
}

export interface RevenueReportRow {
  period: string;
  revenue: string;
  bookings: number;
  growthPercent: number;
}

export interface UserGrowthRow {
  period: string;
  newUsers: number;
  totalUsers: number;
  growthPercent: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}
