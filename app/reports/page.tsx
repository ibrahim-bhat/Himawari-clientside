"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Chart from "@/components/ui/Chart";
import {
  getDailyKPI,
  getBookingConversion,
  getTopListeners,
  getRatingReport,
  getRevenueReport,
  getUserGrowth,
  getChartData,
} from "@/lib/services/reportService";
import { useState } from "react";

export default function ReportsPage() {
  const [chartPeriod, setChartPeriod] = useState<"weekly" | "monthly">("weekly");
  const dailyKPI = getDailyKPI();
  const bookingConversion = getBookingConversion();
  const topListeners = getTopListeners();
  const ratingReport = getRatingReport();
  const revenueReport = getRevenueReport();
  const userGrowth = getUserGrowth();
  const chartData = getChartData(chartPeriod);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Reports (KPI)</h1>
            <p className="mt-1 text-sm sm:text-base text-[#6b7280]">Daily KPI, booking conversion, top listeners, ratings, revenue, user growth.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setChartPeriod("weekly")}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold ${chartPeriod === "weekly" ? "bg-[#259A9E] text-white" : "bg-gray-100 text-gray-600"}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setChartPeriod("monthly")}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold ${chartPeriod === "monthly" ? "bg-[#259A9E] text-white" : "bg-gray-100 text-gray-600"}`}
            >
              Monthly
            </button>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Growth</h2>
          <div className="h-[320px]">
            <Chart data={chartData} />
          </div>
        </Card>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Daily KPI</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                    <th className="py-2">Date</th>
                    <th className="py-2">Bookings</th>
                    <th className="py-2">Revenue</th>
                    <th className="py-2">New users</th>
                    <th className="py-2">Calls</th>
                    <th className="py-2">Chats</th>
                  </tr>
                </thead>
                <tbody>
                  {dailyKPI.map((row) => (
                    <tr key={row.date} className="border-b border-gray-100">
                      <td className="py-3">{row.date}</td>
                      <td className="py-3">{row.bookings}</td>
                      <td className="py-3">{row.revenue}</td>
                      <td className="py-3">{row.newUsers}</td>
                      <td className="py-3">{row.activeCalls}</td>
                      <td className="py-3">{row.activeChats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Booking conversion</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                    <th className="py-2">Period</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Completed</th>
                    <th className="py-2">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingConversion.map((row) => (
                    <tr key={row.period} className="border-b border-gray-100">
                      <td className="py-3">{row.period}</td>
                      <td className="py-3">{row.totalSessions}</td>
                      <td className="py-3">{row.completed}</td>
                      <td className="py-3">{row.conversionRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Top listeners</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">Role</th>
                  <th className="py-3 px-2">Sessions</th>
                  <th className="py-3 px-2">Rating</th>
                  <th className="py-3 px-2">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topListeners.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-[#F9FDFF]">
                    <td className="py-3 px-2 font-medium text-gray-900">{row.name}</td>
                    <td className="py-3 px-2 text-gray-600">{row.role}</td>
                    <td className="py-3 px-2 text-gray-600">{row.sessions}</td>
                    <td className="py-3 px-2 text-gray-600">{row.rating}</td>
                    <td className="py-3 px-2 font-semibold text-gray-900">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Rating report</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                    <th className="py-2">Name</th>
                    <th className="py-2">Role</th>
                    <th className="py-2">Avg rating</th>
                    <th className="py-2">Reviews</th>
                  </tr>
                </thead>
                <tbody>
                  {ratingReport.map((row) => (
                    <tr key={row.professionalId} className="border-b border-gray-100">
                      <td className="py-3">{row.name}</td>
                      <td className="py-3">{row.role}</td>
                      <td className="py-3">{row.avgRating}</td>
                      <td className="py-3">{row.totalReviews}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Revenue report</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                    <th className="py-2">Period</th>
                    <th className="py-2">Revenue</th>
                    <th className="py-2">Bookings</th>
                    <th className="py-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueReport.map((row) => (
                    <tr key={row.period} className="border-b border-gray-100">
                      <td className="py-3">{row.period}</td>
                      <td className="py-3 font-semibold">{row.revenue}</td>
                      <td className="py-3">{row.bookings}</td>
                      <td className="py-3">{row.growthPercent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">User growth</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-[#259A9E] font-bold">
                  <th className="py-2">Period</th>
                  <th className="py-2">New users</th>
                  <th className="py-2">Total users</th>
                  <th className="py-2">Growth</th>
                </tr>
              </thead>
              <tbody>
                {userGrowth.map((row) => (
                  <tr key={row.period} className="border-b border-gray-100">
                    <td className="py-3">{row.period}</td>
                    <td className="py-3">{row.newUsers}</td>
                    <td className="py-3">{row.totalUsers}</td>
                    <td className="py-3">{row.growthPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
