export interface CallLog {
  id: number;
  maskedNumber: string;
  duration: string;
  date: string;
  type: "voice" | "video";
  userId: number;
  professionalId: number;
}

export interface ChatLog {
  id: number;
  userId: number;
  professionalId: number;
  date: string;
  messageCount: number;
}

export interface ListenerNote {
  id: number;
  sessionId: number;
  listenerId: number;
  note: string;
  date: string;
}

export interface ReferLog {
  id: number;
  referralId: number;
  action: string;
  date: string;
  userId: number;
}
