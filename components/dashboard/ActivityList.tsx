import Card from "../ui/Card";
import { FileTextIcon } from "../ui/Icons";

const activities = [
  {
    title: "New Session Booked",
    description:
      "Ayesha Khan booked a counseling session with Dr. Farhan Ali.",
    time: "5 mins ago",
  },
  {
    title: "Psychiatrist Consultation Completed",
    description: "Session with Dr. Sana Mir marked as completed.",
    time: "20 mins ago",
  },
  {
    title: "Listener Assigned",
    description: "New listener Umar Sheikh assigned to Zoya Ahmed.",
    time: "45 mins ago",
  },
  {
    title: "Appointment Rescheduled",
    description: "Psychiatry appointment with Dr. Adeel Rashid rescheduled.",
    time: "1h ago",
  },
  {
    title: "New User Registered",
    description: "Maryam Noor joined the platform.",
    time: "2h ago",
  },
];

export default function ActivityList() {
  return (
    <Card className="relative mr-15 h-full min-h-[380px] flex flex-col min-w-[350px]">
      <div className="absolute right-2 top-1 flex h-7 w-7 items-center justify-center rounded-lg bg-[#2aa7a5] text-xs font-bold text-white">
        9
      </div>
      <div className="flex items-center gap-3 border-b border-[#e5e7eb] px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f6f7] text-[#259a9e]">
          <FileTextIcon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-[#111827]">Recent Activities</h2>
      </div>
      <div className="flex-1 overflow-auto px-6 py-6">
        <ul className="space-y-6">
          {activities.map((activity, index) => (
            <li key={index} className="flex gap-3">
              <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111827]" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[#111827]">{activity.title}</p>
                  <span className="text-xs text-[#9ca3af]">{activity.time}</span>
                </div>
                <p className="text-sm text-[#6b7280]">
                  {activity.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[#e5e7eb] px-6 py-4 text-right">
        <button className="text-sm font-semibold text-[#2aa7a5] hover:underline">
          View All
        </button>
      </div>
    </Card>
  );
}
