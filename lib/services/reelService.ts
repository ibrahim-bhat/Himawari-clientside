import type { Reel, ReelStatus } from "@/types";

const mockReels: Reel[] = [
  { id: 1, title: "Myth: Mental health is a choice", category: "Myth Busting", viewCount: 12500, status: "approved", commentsEnabled: true, createdAt: "2025-01-15" },
  { id: 2, title: "Kashmir stories: Resilience", category: "Stories", viewCount: 8200, status: "approved", commentsEnabled: true, createdAt: "2025-01-20" },
  { id: 3, title: "Myth: Only weak people need therapy", category: "Myth Busting", viewCount: 0, status: "pending", commentsEnabled: false, createdAt: "2025-02-01" },
];

export function getReels(category?: string, status?: ReelStatus): Reel[] {
  let list = [...mockReels];
  if (category) list = list.filter((r) => r.category === category);
  if (status) list = list.filter((r) => r.status === status);
  return list;
}

export function getReelById(id: number): Reel | undefined {
  return mockReels.find((r) => r.id === id);
}

export function createReel(data: Omit<Reel, "id" | "viewCount" | "createdAt">): Reel {
  const newReel: Reel = {
    ...data,
    id: Math.max(...mockReels.map((r) => r.id), 0) + 1,
    viewCount: 0,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  mockReels.push(newReel);
  return newReel;
}

export function updateReelStatus(id: number, status: ReelStatus): Reel | undefined {
  const r = mockReels.find((r) => r.id === id);
  if (r) r.status = status;
  return r;
}

export function updateReelComments(id: number, commentsEnabled: boolean): Reel | undefined {
  const r = mockReels.find((r) => r.id === id);
  if (r) r.commentsEnabled = commentsEnabled;
  return r;
}

export function deleteReel(id: number): boolean {
  const i = mockReels.findIndex((r) => r.id === id);
  if (i >= 0) mockReels.splice(i, 1);
  return i >= 0;
}
