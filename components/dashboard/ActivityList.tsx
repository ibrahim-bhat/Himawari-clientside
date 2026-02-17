import Card from "../ui/Card";

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
    <Card className="h-full">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
            Recent Activities
          </span>
        </div>
        <span className="rounded-full bg-[#e5f6f7] px-2 py-0.5 text-xs font-medium text-[#259a9e]">
          9
        </span>
      </div>
      <ul className="space-y-4 px-6 py-4 text-sm">
        {activities.map((activity) => (
          <li key={activity.title} className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-[#111827]">{activity.title}</p>
              <p className="mt-1 text-xs text-[#6b7280]">
                {activity.description}
              </p>
            </div>
            <span className="ml-4 shrink-0 text-xs text-[#9ca3af]">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-[#e5e7eb] px-6 py-3 text-right text-xs font-medium text-[#259a9e]">
        View All
      </div>
    </Card>
  );
}
