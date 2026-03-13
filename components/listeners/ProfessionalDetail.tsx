"use client";

import { useParams, useRouter, usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import SessionDetailModal from "@/components/professionals/SessionDetailModal";
import EditProfessionalModal, { type EditProfessionalForm } from "@/components/professionals/EditProfessionalModal";
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
import { useState, useMemo } from "react";

// Mock data for all professionals
const professionals = [
    {
        id: 1,
        name: "Dr. Adeel Rashid",
        role: "Psychiatrist",
        email: "adeel.rashid@gmail.com",
        phone: "+91 1234567890",
        location: "Karan Nagar, Srinagar.",
        rating: 4.5,
        reviews: 52,
        sessions: "1,240",
        hours: "420hrs",
        joined: "Jan 2024",
        image: "/pic.png",
        license: "#PSY-112233",
        education: "MD in Psychiatry",
        specialties: ["Depression", "Anxiety"],
    },
    {
        id: 3,
        name: "Dr. Farhana Malik",
        role: "Counselor",
        email: "farhana.malik@gmail.com",
        phone: "+91 1234567890",
        location: "Karan Nagar, Srinagar.",
        rating: 4.6,
        reviews: 85,
        sessions: "1,640",
        hours: "500hrs",
        joined: "Apr 2023",
        image: "/pic.png",
        license: "#PSY-000000",
        education: "PhD in Counseling",
        specialties: ["Depression", "Anxiety", "Trauma"],
    },
    {
        id: 5,
        name: "Dr. Ali Raza",
        role: "Listener",
        email: "ali.raza@gmail.com",
        phone: "+91 1234567890",
        location: "Karan Nagar, Srinagar.",
        rating: 4.5,
        reviews: 184,
        sessions: "2,100",
        hours: "850hrs",
        joined: "Mar 2022",
        image: "/pic.png",
        license: "#LST-998877",
        education: "MA in Psychology",
        specialties: ["General Listening", "Stress Management"],
    },
];

const sessionHistory = [
    { id: 1, patient: "Ayaan Malik", date: "Feb 20, 2026", time: "09:30am", type: "Video Call", status: "Upcoming", action: "Details" },
    { id: 2, patient: "Towfeeq Bhat", date: "Feb 11, 2026", time: "10:30am", type: "Audio Call", status: "Completed", action: "View" },
    { id: 3, patient: "Sana Farooq", date: "Feb 11, 2026", time: "11:00am", type: "Video Call", status: "Cancelled", action: "Reason" },
    { id: 4, patient: "Zara Qureshi", date: "Feb 10, 2026", time: "02:00pm", type: "Chat Session", status: "Completed", action: "View" },
];

const allFeedbacks = [
    { id: 1, name: "Ayesha Noor", rating: 4.8, time: "3 Days Ago", comment: "The professional listened patiently and offered practical guidance. I felt much more at ease after the session. Highly recommended!" },
    { id: 2, name: "Imran Qazi", rating: 4.4, time: "5 Days Ago", comment: "Very professional and compassionate. Her calm and supportive approach made the session very comfortable for me." },
    { id: 3, name: "Sana Rahman", rating: 4.5, time: "7 Days Ago", comment: "She creates a safe and comfortable space to talk. The session helped me identify the root causes of my stress." },
    { id: 4, name: "Omar Hassan", rating: 4.6, time: "10 Days Ago", comment: "Very helpful session. Clear and empathetic communication." },
    { id: 5, name: "Fatima Ali", rating: 4.9, time: "2 Weeks Ago", comment: "Could not have asked for a better experience. Highly recommend." },
    { id: 6, name: "Rashid Khan", rating: 4.3, time: "3 Weeks Ago", comment: "Professional and kind. Felt heard and supported." },
];

export default function ProfessionalDetail() {
    const { id } = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(true);
    const [toast, setToast] = useState<string | null>(null);
    const [sessionModal, setSessionModal] = useState<typeof sessionHistory[0] | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const [editOverrides, setEditOverrides] = useState<EditProfessionalForm | null>(null);
    const [feedbackCount, setFeedbackCount] = useState(3);

    const baseData = useMemo(() => professionals.find(p => p.id === Number(id)) || professionals[1], [id]);
    const data = useMemo(() => editOverrides ? { ...baseData, ...editOverrides } : baseData, [baseData, editOverrides]);
    const feedbacks = useMemo(() => allFeedbacks.slice(0, feedbackCount), [feedbackCount]);

    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-[1400px] mx-auto pb-10">
                {/* Breadcrumbs & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <nav className="flex text-xs text-gray-400 mb-1 font-medium">
                            <span className="hover:text-gray-600 cursor-pointer" onClick={() => router.push('/')}>Admin</span>
                            <span className="mx-2">/</span>
                            <span
                                className="hover:text-gray-600 cursor-pointer"
                                onClick={() => {
                                    const base = pathname.split('/')[1];
                                    router.push(`/${base}`);
                                }}
                            >
                                {data.role}
                            </span>
                            <span className="mx-2">/</span>
                            <span className="text-gray-600">{data.name}</span>
                        </nav>
                        <h1 className="text-2xl font-bold text-gray-900">{data.role} Profile</h1>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="ghost"
                            className="flex-1 sm:flex-none"
                            onClick={() => {
                                setToast(`Reset password email sent to ${data.email}`);
                            }}
                        >
                            <RefreshIcon className="h-4 w-4" />
                            <span>Reset Password</span>
                        </Button>
                        <Button
                            variant="primary"
                            className="flex-1 sm:flex-none"
                            onClick={() => setEditOpen(true)}
                        >
                            <span>Edit Profile</span>
                            <EditIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Profile Card */}
                <Card className="!p-6 !border-[#259A9E]/10 !shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-gray-100 shadow-inner shrink-0">
                                <Image src={data.image} alt="Profile" fill className="object-cover" />
                            </div>
                            <div className="space-y-1.5 flex-1 min-w-0">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight">{data.name}</h2>
                                    <p className="text-sm font-bold text-[#259A9E]">{data.role}</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                                    <div className="flex items-center gap-1.5 underline underline-offset-2 cursor-pointer hover:text-[#259A9E]">
                                        <MailIcon className="h-3.5 w-3.5" />
                                        <span className="truncate">{data.email}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#259A9E]">
                                        <PhoneIcon className="h-3.5 w-3.5" />
                                        <span>{data.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPinIcon className="h-3.5 w-3.5" />
                                        <span>{data.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 p-2 px-4 rounded-xl border border-gray-100 self-start lg:self-auto">
                            <span className={`text-[11px] font-bold ${!isActive ? 'text-gray-500' : 'text-gray-300'}`}>Inactive</span>
                            <button
                                onClick={() => setIsActive(!isActive)}
                                className={`relative inline-flex h-5 w-10 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none ${isActive ? 'bg-[#259A9E]' : 'bg-gray-300'}`}
                            >
                                <span className={`${isActive ? 'translate-x-5' : 'translate-x-1'} inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200 shadow-sm`} />
                            </button>
                            <span className={`text-[11px] font-bold ${isActive ? 'text-[#259A9E]' : 'text-gray-300'}`}>Active</span>
                        </div>
                    </div>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Total Sessions", value: data.sessions, icon: BarChartIcon },
                        { label: "Hours Logged", value: data.hours, icon: ClockIcon },
                        { label: "Rating", value: data.rating.toString(), icon: StarIcon, isRating: true },
                        { label: "Joined Date", value: data.joined, icon: CalendarIcon },
                    ].map((stat, idx) => (
                        <Card key={idx} className="!p-5 !border-[#259A9E]/10 !shadow-sm flex flex-col justify-between h-[110px]">
                            <div className="flex justify-between items-start">
                                <div className="p-2 rounded-lg bg-[#E5F6F7] text-[#259A9E]">
                                    <stat.icon className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <span className="text-[13px] font-medium text-gray-500">{stat.label}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                                    {stat.isRating && <StarIcon className="h-3 w-3 text-yellow-400 fill-current" />}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Main Content & Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Session History */}
                        <Card className="!p-0 !border-[#259A9E]/10 !shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-gray-900 text-lg">Session History</h3>
                                <div className="flex items-center gap-3">
                                    <Button variant="ghost" className="!min-h-0 py-2 text-[11px]">
                                        <span>All Time</span>
                                        <ChevronDownIcon className="h-3 w-3 text-gray-400" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="!min-h-0 !p-2"
                                        onClick={() => setToast("Downloading session history...")}
                                    >
                                        <DownloadIcon className="h-4 w-4 text-gray-500" />
                                    </Button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left min-w-[700px]">
                                    <thead className="bg-[#D1EDEE]/30 text-[#259A9E] text-[11px] font-bold uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Patient</th>
                                            <th className="px-6 py-4">Date & Time</th>
                                            <th className="px-6 py-4">Type</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 text-sm">
                                        {sessionHistory.map((session, idx) => (
                                            <tr key={session.id} className={idx % 2 === 0 ? "bg-[#F3F9FA]/50" : "bg-white"}>
                                                <td className="px-6 py-4 font-bold text-gray-900 truncate max-w-[150px]">{session.patient}</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-gray-900 font-bold whitespace-nowrap">{session.date}</div>
                                                    <div className="text-[10px] text-gray-400 font-medium">{session.time}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-gray-500 font-medium whitespace-nowrap">
                                                        {session.type === "Video Call" && <VideoIcon className="h-4 w-4" />}
                                                        {session.type === "Audio Call" && <MicIcon className="h-4 w-4" />}
                                                        {session.type === "Chat Session" && <FileTextIcon className="h-4 w-4" />}
                                                        <span>{session.type}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap ${session.status === 'Upcoming' ? 'bg-[#BFDBFE] text-[#166534]' :
                                                        session.status === 'Completed' ? 'bg-[#BBF7D0] text-[#166534]' :
                                                            'bg-[#FECACA] text-[#991B1B]'
                                                        }`}>
                                                        {session.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Button
                                                        variant="ghost"
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
                            <div className="p-6 text-center border-t border-gray-50">
                                <Button
                                    variant="ghost"
                                    className="!min-h-0 text-[#259A9E] font-bold border-0 hover:bg-transparent"
                                    onClick={() => setToast("Loading all session history...")}
                                >
                                    <span className="border-b-2 border-transparent hover:border-[#259A9E]">View All Session History</span>
                                    <span className="text-lg">→</span>
                                </Button>
                            </div>
                        </Card>

                        {/* Feedbacks Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-1">
                                <h3 className="font-bold text-gray-900 text-lg">Recent Feedbacks</h3>
                                <Button
                                    variant="ghost"
                                    className="!min-h-0 !py-0 text-[11px] text-[#259A9E] font-bold hover:underline"
                                    onClick={() => setFeedbackCount((c) => Math.min(c + 3, allFeedbacks.length))}
                                >
                                    Load more reviews
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {feedbacks.map(f => (
                                    <Card key={f.id} className="!p-5 !border-[#259A9E]/10 !shadow-sm hover:!border-[#259A9E]/20 transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <Avatar name={f.name} size="sm" />
                                                <div>
                                                    <p className="text-[11px] font-bold text-gray-900 leading-none mb-1">{f.name}</p>
                                                    <p className="text-[9px] text-gray-400 font-medium">{f.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 bg-[#F9FBFC] px-1.5 py-0.5 rounded border border-gray-100">
                                                <span className="text-[10px] font-bold text-gray-900">{f.rating}</span>
                                                <StarIcon className="h-2.5 w-2.5 text-yellow-400 fill-current" />
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-gray-500 leading-relaxed italic line-clamp-4">
                                            &quot;{f.comment}&quot;
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card className="!p-6 !border-[#259A9E]/10 !shadow-sm space-y-8">
                            {/* Credentials */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
                                    <ShieldCheckIcon className="h-5 w-5 text-[#259A9E]" />
                                    <h4 className="font-bold text-[15px] text-gray-900 uppercase tracking-tight">Professional Credentials</h4>
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <p className="text-[11px] text-gray-400 font-bold mb-1 uppercase tracking-wider">License No:</p>
                                        <p className="text-sm font-bold text-gray-900">{data.license}</p>
                                        <span className="mt-1.5 inline-block text-[10px] bg-[#BBF7D0] text-[#166534] px-2 py-0.5 rounded-md font-bold">Valid until Jun 2027</span>
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-gray-400 font-bold mb-1 uppercase tracking-wider">Education:</p>
                                        <p className="text-sm font-bold text-gray-900">{data.education}</p>
                                        <p className="text-[10px] text-gray-400 font-medium">Kashmir University, 2020</p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-gray-400 font-bold mb-2 uppercase tracking-wider">Specialties:</p>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {data.specialties.map((s, idx) => (
                                                <div key={s} className="flex items-center gap-1.5">
                                                    <div className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-yellow-400' : idx === 1 ? 'bg-blue-400' : 'bg-red-400'}`} />
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
                                                { name: `CV_${data.name.split(' ').pop()}.docx..`, size: "500KB", color: "text-blue-500" }
                                            ].map((doc, i) => (
                                                <div key={i} role="button" tabIndex={0} className="flex items-center justify-between p-2.5 rounded-xl bg-[#F9FBFC] border border-gray-100 hover:border-[#259A9E]/30 transition-colors group cursor-pointer" onClick={() => setToast(`Downloading ${doc.name}`)} onKeyDown={(e) => e.key === "Enter" && setToast(`Downloading ${doc.name}`)}>
                                                    <div className="flex items-center gap-3">
                                                        <FileTextIcon className={`h-5 w-5 ${doc.color}`} />
                                                        <div>
                                                            <p className="text-[10px] font-bold text-gray-700 leading-none mb-1">{doc.name}</p>
                                                            <p className="text-[9px] text-gray-400 font-medium">{doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <DownloadIcon className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#259A9E] transition-colors" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="pt-8 border-t border-gray-100 space-y-6">
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="h-5 w-5 text-[#259A9E]" />
                                    <h4 className="font-bold text-[15px] text-gray-900 uppercase tracking-tight">Availability</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs items-center bg-gray-50/50 p-2 rounded-lg">
                                        <span className="text-gray-500 font-medium">Monday - Friday</span>
                                        <span className="font-bold text-gray-900 bg-white px-2 py-1 rounded shadow-sm">09:am - 05:00pm</span>
                                    </div>
                                    <div className="flex justify-between text-xs items-center bg-gray-50/50 p-2 rounded-lg">
                                        <span className="text-gray-500 font-medium">Saturday</span>
                                        <span className="font-bold text-gray-900 bg-white px-2 py-1 rounded shadow-sm">10:00am - 02:00pm</span>
                                    </div>
                                    <div className="flex justify-between text-xs items-center p-2">
                                        <span className="text-gray-500 font-medium">Sunday</span>
                                        <span className="font-extrabold text-red-400 uppercase tracking-tighter text-[10px]">Unavailable</span>
                                    </div>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="w-full"
                                    onClick={() => setToast("Redirecting to schedule management...")}
                                >
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
                onSave={(form) => setEditOverrides(form)}
            />
        </DashboardLayout>
    );
}

function ShieldCheckIcon(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
        </svg>
    );
}
