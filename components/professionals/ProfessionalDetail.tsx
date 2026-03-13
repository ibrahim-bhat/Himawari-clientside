"use client";

import { useParams, useRouter, usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Image from "next/image";
import {
  EditIcon,
  RefreshIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  BarChartIcon,
  ClockIcon,
  StarIcon,
  CalendarIcon,
  ChevronDownIcon,
  DownloadIcon,
  VideoIcon,
  MicIcon,
  FileTextIcon,
} from "@/components/ui/Icons";
import { useState, useMemo, useEffect } from "react";
import {
  getProfessionalById,
  getSessionHistory,
  getFeedbacks,
  updateProfessionalActive,
  updateProfessional,
} from "@/lib/services/professionalService";
import type { ProfessionalRole } from "@/types";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import SessionDetailModal from "./SessionDetailModal";
import EditProfessionalModal, { type EditProfessionalForm } from "./EditProfessionalModal";

function ShieldCheckIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const roleLabel: Record<ProfessionalRole, string> = {
  listener: "Listener",
  counselor: "Counselor",
  psychiatrist: "Psychiatrist",
};

export default function ProfessionalDetail() {
  const { id } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const pathRole = useMemo((): ProfessionalRole => {
    if (pathname.includes("/psychiatrists/")) return "psychiatrist";
    if (pathname.includes("/counselors/")) return "counselor";
    return "listener";
  }, [pathname]);

  const [refreshKey, setRefreshKey] = useState(0);
  const data = useMemo(() => getProfessionalById(Number(id)), [id, refreshKey]);
  const sessionHistory = useMemo(() => (id ? getSessionHistory(Number(id)) : []), [id]);
  const feedbacks = useMemo(() => (id ? getFeedbacks(Number(id)) : []), [id]);

  const [isActive, setIsActive] = useState(data?.isActive ?? true);
  const [toast, setToast] = useState<string | null>(null);
  const [sessionModal, setSessionModal] = useState<typeof sessionHistory[0] | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    if (data) setIsActive(data.isActive);
  }, [data?.id, data?.isActive]);

  const handleToggleActive = () => {
    if (!data) return;
    const next = !isActive;
    setIsActive(next);
    updateProfessionalActive(data.id, next);
  };

  if (!data) {
    return (
      <DashboardLayout>
        <div className="p-8 text-center text-gray-500">Professional not found.</div>
      </DashboardLayout>
    );
  }

  const basePath = pathname.split("/")[1] || "listeners";
  const label = roleLabel[data.role];
  const isPsychiatrist = data.role === "psychiatrist";

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-[1400px] mx-auto pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav className="flex text-xs text-gray-400 mb-1 font-medium">
              <span className="hover:text-gray-600 cursor-pointer" onClick={() => router.push("/")}>Admin</span>
              <span className="mx-2">/</span>
              <span className="hover:text-gray-600 cursor-pointer" onClick={() => router.push(`/${basePath}`)}>{label}</span>
              <span className="mx-2">/</span>
              <span className="text-gray-600">{data.name}</span>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900">{label} Profile</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="ghost"
              className="flex-1 sm:flex-none"
              onClick={() => setToast(`Reset password email sent to ${data.email}`)}
            >
              <RefreshIcon className="h-4 w-4" />
              <span>Reset Password</span>
            </Button>
            <Button variant="primary" className="flex-1 sm:flex-none" onClick={() => setEditOpen(true)}>
              <span>Edit Profile</span>
              <EditIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="!p-6 border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gray-100 bg-gray-50">
                <Image src={data.image} alt="Profile" width={96} height={96} className="object-cover h-full w-full" />
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">{data.name}</h2>
                <p className="text-sm font-bold text-[#259A9E]">{label}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5 underline underline-offset-2 decoration-gray-400">
                    <MailIcon className="h-4 w-4 text-gray-400" />
                    <span className="truncate">{data.email}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PhoneIcon className="h-4 w-4 text-gray-400" />
                    <span>{data.phone}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPinIcon className="h-4 w-4 text-gray-400" />
                    <span>{data.location}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 px-5 rounded-xl border border-gray-200 self-start lg:self-center">
              <span className={`text-xs font-bold ${!isActive ? "text-gray-500" : "text-gray-400"}`}>{isPsychiatrist ? "Deactivate" : "Inactive"}</span>
              <button
                onClick={handleToggleActive}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none ${isActive ? "bg-[#259A9E]" : "bg-gray-300"}`}
              >
                <span className={`${isActive ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200`} />
              </button>
              <span className={`text-xs font-bold ${isActive ? "text-[#259A9E]" : "text-gray-400"}`}>{isPsychiatrist ? "Activate" : "Active"}</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Sessions", value: data.sessions, icon: BarChartIcon },
            { label: "Hours Logged", value: data.hours, icon: ClockIcon },
            { label: "Rating", value: data.rating.toString(), icon: StarIcon, isRating: true },
            { label: "Joined Date", value: data.joined, icon: CalendarIcon },
          ].map((stat, idx) => (
            <Card key={idx} className="!p-5 flex flex-col gap-3 min-h-[120px] border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5F6F7] text-[#259A9E]">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                  {stat.isRating && <StarIcon className="h-4 w-4 text-yellow-500 fill-current shrink-0" />}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {isPsychiatrist && (
          <>
            <Card className="!p-6 border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <h3 className="font-bold text-[#111827] text-lg mb-4">Appointment Slots</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-gray-900">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 - 14:00</span>
                </div>
              </div>
            </Card>
            <Card className="!p-6 border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <h3 className="font-bold text-[#111827] text-lg mb-4">Session Reports</h3>
              <p className="text-sm text-gray-500">Recent session reports will appear here.</p>
            </Card>
          </>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="!p-0 overflow-hidden border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="p-6 border-b border-[#259A9E] flex items-center justify-between flex-wrap gap-3">
                <h3 className="font-bold text-gray-900 text-lg">Session History</h3>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" type="button" className="!min-h-0 py-2 text-xs">
                    <span>All Time</span>
                    <ChevronDownIcon className="h-3 w-3 text-gray-400" />
                  </Button>
                  <Button variant="ghost" type="button" className="!min-h-0 !p-2.5" onClick={() => setToast("Downloading session history...")}>
                    <DownloadIcon className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead className="bg-[#D1EDEE] text-[#259A9E] text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Patient</th>
                      <th className="px-6 py-4">Date & Time</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm bg-white">
                    {sessionHistory.map((session, idx) => (
                      <tr key={session.id} className={idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                        <td className="px-6 py-4 font-bold text-gray-900 truncate max-w-[150px]">{session.patient}</td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900 font-bold whitespace-nowrap">{session.date}</div>
                          <div className="text-xs text-gray-400 font-medium">{session.time}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-600 font-medium whitespace-nowrap">
                            {session.type === "Video Call" && <VideoIcon className="h-4 w-4 text-gray-500" />}
                            {session.type === "Audio Call" && <MicIcon className="h-4 w-4 text-gray-500" />}
                            {session.type === "Chat Session" && <FileTextIcon className="h-4 w-4 text-gray-500" />}
                            <span>{session.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-md px-3 py-1.5 text-xs font-bold whitespace-nowrap ${session.status === "Upcoming" ? "bg-[#BFDBFE] text-[#1E40AF]" : session.status === "Completed" ? "bg-[#BBF7D0] text-[#166534]" : "bg-[#FECACA] text-[#991B1B]"}`}>
                            {session.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button
                            variant="ghost"
                            type="button"
                            className="!min-h-0 !py-1 !px-2 text-[#259A9E] font-bold hover:underline text-xs"
                            onClick={() => setSessionModal(session)}
                          >
                            {session.action}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 text-center border-t border-[#259A9E]">
                <Button variant="ghost" type="button" className="!min-h-0 text-[#259A9E] font-bold border-0 hover:bg-transparent" onClick={() => setToast("Loading all session history...")}>
                  <span className="border-b-2 border-transparent hover:border-[#259A9E]">View All Session History</span>
                  <span className="text-lg leading-none">→</span>
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="font-bold text-gray-900 text-lg">Ratings &amp; Reviews</h3>
                <Button variant="ghost" type="button" className="!min-h-0 !py-0 text-xs text-[#259A9E] font-bold hover:underline" onClick={() => setToast("Loading more reviews...")}>
                  Load more reviews
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {feedbacks.map((f) => (
                  <Card key={f.id} className="!p-5 border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Avatar name={f.name} size="sm" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-gray-900 leading-none mb-0.5 truncate">{f.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{f.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100 shrink-0">
                        <span className="text-xs font-bold text-gray-900">{f.rating}</span>
                        <StarIcon className="h-3 w-3 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed italic line-clamp-4">&quot;{f.comment}&quot;</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="!p-6 space-y-8 border border-[#259A9E] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-[#259A9E]">
                  <ShieldCheckIcon className="h-5 w-5 text-[#259A9E] shrink-0" />
                  <h4 className="font-bold text-[15px] text-gray-900 uppercase tracking-tight">Experience &amp; Certificates</h4>
                </div>
                <div className="space-y-5">
                  {data.license && (
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold mb-1 uppercase tracking-wider">License No:</p>
                      <p className="text-sm font-bold text-gray-900">{data.license}</p>
                      <span className="mt-1.5 inline-block text-[10px] bg-[#BBF7D0] text-[#166534] px-2 py-0.5 rounded-md font-bold">Valid until Jun 2027</span>
                    </div>
                  )}
                  {data.education && (
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Education:</p>
                      <p className="text-sm font-bold text-gray-900">{data.education}</p>
                      <p className="text-[10px] text-gray-400 font-medium">Kashmir University, 2020</p>
                    </div>
                  )}
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold mb-2 uppercase tracking-wider">Specialties:</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {(data.specialties || []).map((s, idx) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <div className={`h-2 w-2 rounded-full shrink-0 ${idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-orange-400" : "bg-red-400"}`} />
                          <span className="text-[11px] text-gray-600 font-bold">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-[11px] text-gray-400 font-bold mb-3 uppercase tracking-wider">Documents:</p>
                    <div className="space-y-3">
                      {[
                        { name: "Medical_License_2025..", size: "1.3MB", color: "text-red-500" },
                        { name: `CV_${data.name.split(" ").pop()}.docx..`, size: "500KB", color: "text-blue-500" },
                      ].map((doc, i) => (
                        <div key={i} role="button" tabIndex={0} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#259A9E]/30 transition-colors group cursor-pointer" onClick={() => setToast(`Downloading ${doc.name}`)} onKeyDown={(e) => e.key === "Enter" && setToast(`Downloading ${doc.name}`)}>
                          <div className="flex items-center gap-3 min-w-0">
                            <FileTextIcon className={`h-5 w-5 shrink-0 ${doc.color}`} />
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-gray-700 leading-none mb-1 truncate">{doc.name}</p>
                              <p className="text-[9px] text-gray-400 font-medium">{doc.size}</p>
                            </div>
                          </div>
                          <DownloadIcon className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#259A9E] transition-colors shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#259A9E] space-y-6">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-[#259A9E] shrink-0" />
                  <h4 className="font-bold text-[15px] text-gray-900 uppercase tracking-tight">Availability</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-500 font-medium">Monday - Friday</span>
                    <span className="font-bold text-gray-900 bg-white px-2 py-1 rounded shadow-sm">09:00am - 05:00pm</span>
                  </div>
                  <div className="flex justify-between text-xs items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-500 font-medium">Saturday</span>
                    <span className="font-bold text-gray-900 bg-white px-2 py-1 rounded shadow-sm">10:00am - 02:00pm</span>
                  </div>
                  <div className="flex justify-between text-xs items-center p-3">
                    <span className="text-gray-500 font-medium">Sunday</span>
                    <span className="font-extrabold text-red-400 uppercase tracking-tighter text-[10px]">Unavailable</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full" onClick={() => setToast("Redirecting to schedule management...")}>
                  Manage Schedule
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
      <SessionDetailModal session={sessionModal} onClose={() => setSessionModal(null)} />
      <EditProfessionalModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        initial={{ name: data.name, email: data.email, phone: data.phone, location: data.location }}
        onSave={(form) => {
          updateProfessional(data.id, form);
          setRefreshKey((k) => k + 1);
          setToast("Profile updated.");
        }}
      />
    </DashboardLayout>
  );
}
