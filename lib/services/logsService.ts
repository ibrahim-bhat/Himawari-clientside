import type { CallLog, ChatLog, ListenerNote, ReferLog } from "@/types";

const mockCallLogs: CallLog[] = [
  { id: 1, maskedNumber: "******7890", duration: "45m", date: "2025-05-14", type: "video", userId: 1, professionalId: 1 },
  { id: 2, maskedNumber: "******7891", duration: "60m", date: "2025-05-10", type: "voice", userId: 2, professionalId: 2 },
];

const mockChatLogs: ChatLog[] = [
  { id: 1, userId: 1, professionalId: 3, date: "2025-05-03", messageCount: 24 },
  { id: 2, userId: 3, professionalId: 5, date: "2025-04-28", messageCount: 15 },
];

const mockListenerNotes: ListenerNote[] = [
  { id: 1, sessionId: 101, listenerId: 5, note: "User expressed mild distress. Follow-up recommended.", date: "2025-05-14" },
  { id: 2, sessionId: 102, listenerId: 6, note: "Positive session. User reported improvement.", date: "2025-05-10" },
];

const mockReferLogs: ReferLog[] = [
  { id: 1, referralId: 1, action: "Referred to psychiatrist", date: "2025-01-10", userId: 1 },
  { id: 2, referralId: 2, action: "Referred to counselor", date: "2025-02-01", userId: 2 },
];

export function getCallLogs(): CallLog[] {
  return [...mockCallLogs];
}

export function getChatLogs(): ChatLog[] {
  return [...mockChatLogs];
}

export function getVCNotes(): ListenerNote[] {
  return [...mockListenerNotes];
}

export function getReferLogs(): ReferLog[] {
  return [...mockReferLogs];
}
