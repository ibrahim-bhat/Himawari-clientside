"use client";

import { useParams } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import {
  PlusIcon,
  SearchIcon,
  SendIcon,
  ClockIcon,
  DollarIcon,
  CalendarIcon,
  VideoIcon,
  MicIcon,
  MoreVerticalIcon,
  FileTextIcon,
  ChevronDownIcon
} from "@/components/ui/Icons";
import { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Ayaan Khan", email: "ayaan.khan@maildemo.com", status: "Active", joiningDate: "12 Jan 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11231" },
  { id: 2, name: "Zara Ahmed", email: "zara.ahmed@maildemo.com", status: "Blocked", joiningDate: "25 Jan 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11232" },
  { id: 3, name: "Hamza Malik", email: "hamza.malik@maildemo.com", status: "Active", joiningDate: "3 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11233" },
  { id: 4, name: "Noor Fatima", email: "noor.fatima@maildemo.com", status: "Active", joiningDate: "18 Dec 2024", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11234" },
  { id: 5, name: "Ali Raza", email: "ali.raza@maildemo.com", status: "Blocked", joiningDate: "6 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11235" },
  { id: 6, name: "Mustafa Sheikh", email: "mustafa@maildemo.com", status: "Blocked", joiningDate: "8 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11236" },
];

const bookings = [
  {
    id: 1,
    professional: { name: "Dr. Adeel Rashid", role: "Psychiatrist", image: "/pic.png" },
    date: "May 14, 2025",
    time: "10:30AM - 11:15AM",
    type: "Video Call",
    duration: "45 min",
    status: "Completed",
  },
  {
    id: 2,
    professional: { name: "Dr. Sana Mir", role: "Psychiatrist", image: "/pic.png" },
    date: "May 10, 2025",
    time: "02:00PM - 03:00PM",
    type: "Audio Call",
    duration: "1 hr",
    status: "Cancelled",
  },
  {
    id: 3,
    professional: { name: "Dr. Farhan Malik", role: "Counselor", image: "/pic.png" },
    date: "May 03, 2025",
    time: "09:00PM - 09:45AM",
    type: "Chat Session",
    duration: "45 min",
    status: "Completed",
  },
  {
    id: 4,
    professional: { name: "Dr. Hina Shah", role: "Counselor", image: "/pic.png" },
    date: "May 14, 2025",
    time: "10:30AM - 11:15AM",
    type: "Audio Call",
    duration: "45 min",
    status: "Completed",
  },
  {
    id: 5,
    professional: { name: "Dr. Ali Raza", role: "Listener", image: "/pic.png" },
    date: "Apr 28, 2025",
    time: "11:00AM - 11:30AM",
    type: "Chat Session",
    duration: "30 min",
    status: "Completed",
  },
  {
    id: 6,
    professional: { name: "Dr. Zoya Ahmed", role: "Listener", image: "/pic.png" },
    date: "Apr 14, 2025",
    time: "12:00AM - 12:30AM",
    type: "Video Call",
    duration: "30 min",
    status: "Completed",
  },
];

const callChatHistory = [
  {
    id: 1,
    professional: { name: "Dr. Adeel Rashid", role: "Psychiatrist", image: "/pic.png" },
    date: "May 14, 2025",
    time: "10:30AM - 11:15AM",
    mode: "Video Call",
    notes: "User requested to continue sessions with the same counselor for better",
  },
  {
    id: 2,
    professional: { name: "Dr. Sana Mir", role: "Psychiatrist", image: "/pic.png" },
    date: "May 10, 2025",
    time: "02:00PM - 03:00PM",
    mode: "Audio Call",
    notes: "Follow-up session required within 7 days for medication review",
  },
  {
    id: 3,
    professional: { name: "Dr. Farhan Malik", role: "Counselor", image: "/pic.png" },
    date: "May 03, 2025",
    time: "09:00PM - 09:45AM",
    mode: "Chat Session",
    notes: "User expressed mild distress during chat, no escalation required. Monitor",
  },
  {
    id: 4,
    professional: { name: "Dr. Hina Shah", role: "Counselor", image: "/pic.png" },
    date: "May 14, 2025",
    time: "10:30AM - 11:15AM",
    mode: "Audio Call",
    notes: "User requested evening time slots for future counseling sessions due to work",
  },
  {
    id: 5,
    professional: { name: "Dr. Ali Raza", role: "Listener", image: "/pic.png" },
    date: "Apr 28, 2025",
    time: "11:00AM - 11:30AM",
    mode: "Chat Session",
    notes: "Prescription update pending. Follow-up consultation required before",
  },
  {
    id: 6,
    professional: { name: "Dr. Zoya Ahmed", role: "Listener", image: "/pic.png" },
    date: "Apr 14, 2025",
    time: "12:00AM - 12:30AM",
    mode: "Chat Session",
    notes: "User considering therapist change, requested profile details of alternate",
  },
];

const billingHistory = [
  { id: 1, transactionId: "TXN-9F3K2BLIQ7", date: "May 10, 2025", amount: "₹4,000", method: "Mastercard", status: "Paid" },
  { id: 2, transactionId: "TXN-4M9Z72P6XA", date: "May 03, 2025", amount: "₹3,560", method: "Credit card", status: "Pending" },
  { id: 3, transactionId: "TXN-7Q2L19V3N8", date: "May 14, 2025", amount: "₹8,304", method: "UPI", status: "Paid" },
  { id: 4, transactionId: "TXN-1X5R84K9TY", date: "Apr 28, 2025", amount: "₹4,620", method: "Credit card", status: "Issue" },
  { id: 5, transactionId: "TXN-6P0W37D2CZ", date: "Apr 14, 2025", amount: "₹10,050", method: "G-Pay", status: "Refunded" },
];

export default function UserDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Booking History");

  // Find user by ID
  const currentUser = useMemo(() => {
    const userId = Number(id);
    return users.find(u => u.id === userId) || users[2]; // Default to Hamza if not found
  }, [id]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Search Bar matching the mockup */}
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-[#259A9E]/30 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-[#259A9E]"
          />
        </div>

        {/* User Profile Header Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-100">
                <img src={currentUser.image} alt="Profile" className="h-full w-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{currentUser.name}</h1>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
                <p className="text-sm text-gray-500">{currentUser.phone}</p>
                <div className="mt-1 flex gap-4 text-xs font-medium text-gray-400">
                  <span>User ID: {currentUser.userId}</span>
                  <span>•</span>
                  <span>Joining: {currentUser.joiningDate}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg border border-[#259A9E] px-4 py-2 text-sm font-semibold text-[#259A9E] hover:bg-[#259A9E]/5">
                Edit Profile
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-[#259A9E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e7d80]">
                <span>Send Notification</span>
                <SendIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>

        {/* User Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="flex flex-col gap-2 p-5 h-[140px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Bookings</p>
              <p className="text-xl font-bold text-gray-900">46</p>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-5 h-[140px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
              <div className="h-5 w-5 rounded-full border-2 border-[#259A9E] flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#259A9E]" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Completed Sessions</p>
              <p className="text-xl font-bold text-gray-900">45</p>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-5 h-[140px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
              <DollarIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Spent</p>
              <p className="text-xl font-bold text-gray-900">₹1,82,000</p>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-5 h-[140px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
              <ClockIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Last Activity</p>
              <p className="text-xl font-bold text-gray-900">2hrs ago</p>
            </div>
          </Card>
        </div>

        {/* History Tabs and Table */}
        <div className="rounded-2xl border border-[#259A9E]/20 bg-white overflow-hidden">
          <div className="flex border-b border-[#259A9E]/20 px-6">
            {["Booking History", "Call/Chat History", "Billing & Invoice"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold transition-colors relative ${activeTab === tab ? "text-[#259A9E]" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#259A9E]" />
                )}
              </button>
            ))}
          </div>

          {activeTab === "Billing & Invoice" && (
            <div className="p-4 flex flex-wrap items-center gap-4 bg-[#F9FDFF]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Invoice Type:</span>
                <button className="flex items-center gap-2 rounded border border-[#259A9E]/20 bg-white px-2 py-1 text-xs text-gray-700">
                  <span>All</span>
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Payment Status:</span>
                <button className="flex items-center gap-2 rounded border border-[#259A9E]/20 bg-white px-2 py-1 text-xs text-gray-700">
                  <span>All</span>
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Invoice Status:</span>
                <button className="flex items-center gap-2 rounded border border-[#259A9E]/20 bg-white px-2 py-1 text-xs text-gray-700">
                  <span>All</span>
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Data Range:</span>
                <button className="flex items-center gap-2 rounded border border-[#259A9E]/20 bg-white px-2 py-1 text-xs text-gray-700">
                  <span>All</span>
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
              </div>
              <button className="ml-auto flex items-center gap-2 rounded-lg bg-[#259A9E] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#1e7d80]">
                <PlusIcon className="h-3 w-3" />
                <span>Create New Invoice</span>
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#D1EDEE] text-[#259A9E]">
                  {activeTab === "Billing & Invoice" ? (
                    <>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Transaction ID</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Date</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Amount</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Payment Method</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">Payment Status</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Professional</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">{activeTab === "Call/Chat History" ? "Call/Chat Mode" : "Service Type"}</th>
                      {activeTab === "Call/Chat History" ? (
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Notes</th>
                      ) : (
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Duration</th>
                      )}
                      {activeTab !== "Call/Chat History" && (
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Status</th>
                      )}
                    </>
                  )}
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5F6F7]">
                {activeTab === "Call/Chat History" ? (
                  callChatHistory.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FDFF]"} hover:bg-[#F1FAFB] transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={item.professional.image} name={item.professional.name} size="sm" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">{item.professional.name}</div>
                            <div className="text-xs text-gray-500">{item.professional.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{item.date}</div>
                        <div className="text-xs text-gray-500">{item.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          {item.mode === "Video Call" && <VideoIcon className="h-4 w-4" />}
                          {item.mode === "Audio Call" && <MicIcon className="h-4 w-4" />}
                          {item.mode === "Chat Session" && <FileTextIcon className="h-4 w-4" />}
                          <span>{item.mode}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs text-xs text-gray-500 leading-relaxed">
                          {item.notes} <button className="text-[#259A9E] font-semibold hover:underline">view more...</button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVerticalIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : activeTab === "Billing & Invoice" ? (
                  billingHistory.map((billing, index) => (
                    <tr
                      key={billing.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FDFF]"} hover:bg-[#F1FAFB] transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="text-xs font-bold text-gray-900">{billing.transactionId}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-xs font-bold text-gray-900">{billing.date}</div>
                      </td>
                      <td className="px-6 py-4 text-center text-xs font-bold text-gray-900">
                        {billing.amount}
                      </td>
                      <td className="px-6 py-4 text-center text-xs font-bold text-[#259A9E]">
                        {billing.method}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex rounded-md px-4 py-1.5 text-[10px] font-bold leading-5 ${billing.status === "Paid"
                          ? "bg-[#C6F6D5] text-[#2F855A]"
                          : billing.status === "Pending"
                            ? "bg-[#FEEBC8] text-[#744210]"
                            : billing.status === "Issue"
                              ? "bg-[#FED7D7] text-[#C53030]"
                              : "bg-[#D1EDEE] text-[#259A9E]"
                          }`}>
                          {billing.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVerticalIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  bookings.map((booking, index) => (
                    <tr
                      key={booking.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FDFF]"} hover:bg-[#F1FAFB] transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={booking.professional.image} name={booking.professional.name} size="sm" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">{booking.professional.name}</div>
                            <div className="text-xs text-gray-500">{booking.professional.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{booking.date}</div>
                        <div className="text-xs text-gray-500">{booking.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          {booking.type === "Video Call" && <VideoIcon className="h-4 w-4" />}
                          {booking.type === "Audio Call" && <MicIcon className="h-4 w-4" />}
                          {booking.type === "Chat Session" && <FileTextIcon className="h-4 w-4" />}
                          <span>{booking.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{booking.duration}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold leading-5 ${booking.status === "Completed"
                          ? "bg-[#C6F6D5] text-[#2F855A]"
                          : "bg-[#FED7D7] text-[#C53030]"
                          }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVerticalIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
