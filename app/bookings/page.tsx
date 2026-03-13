"use client";

import { useState, useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/layout/PageHeader";
import BookingFilters from "@/components/bookings/BookingFilters";
import BookingTable from "@/components/bookings/BookingTable";
import RescheduleModal from "@/components/bookings/RescheduleModal";
import CancelModal from "@/components/bookings/CancelModal";
import { getBookings, rescheduleBooking, cancelBooking } from "@/lib/services/bookingService";
import type { Booking, BookingType, BookingStatus } from "@/types";

export default function BookingsPage() {
  const [typeFilter, setTypeFilter] = useState<BookingType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "all">("all");
  const [rescheduleBookingItem, setRescheduleBookingItem] = useState<Booking | null>(null);
  const [cancelBookingItem, setCancelBookingItem] = useState<Booking | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const filters = useMemo(
    () => ({
      type: typeFilter === "all" ? undefined : typeFilter,
      status: statusFilter === "all" ? undefined : statusFilter,
    }),
    [typeFilter, statusFilter]
  );

  const bookings = useMemo(() => getBookings(filters), [filters.type, filters.status, refreshKey]);

  const handleRescheduleConfirm = (bookingId: number, date: string, time: string) => {
    rescheduleBooking(bookingId, date, time);
    setRescheduleBookingItem(null);
    setRefreshKey((k) => k + 1);
  };

  const handleCancelConfirm = (bookingId: number) => {
    cancelBooking(bookingId);
    setCancelBookingItem(null);
    setRefreshKey((k) => k + 1);
  };

  return (
    <DashboardLayout>
      <PageHeader />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Booking Management</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">View and manage all bookings. Reschedule or cancel as needed.</p>
        </div>

        <BookingFilters
          type={typeFilter}
          status={statusFilter}
          onTypeChange={setTypeFilter}
          onStatusChange={setStatusFilter}
        />

        <BookingTable
          bookings={bookings}
          onReschedule={setRescheduleBookingItem}
          onCancel={setCancelBookingItem}
        />
      </div>

      <RescheduleModal
        isOpen={!!rescheduleBookingItem}
        onClose={() => setRescheduleBookingItem(null)}
        booking={rescheduleBookingItem}
        onConfirm={handleRescheduleConfirm}
      />
      <CancelModal
        isOpen={!!cancelBookingItem}
        onClose={() => setCancelBookingItem(null)}
        booking={cancelBookingItem}
        onConfirm={handleCancelConfirm}
      />
    </DashboardLayout>
  );
}
