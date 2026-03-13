export type ReelStatus = "pending" | "approved";

export interface Reel {
  id: number;
  title: string;
  category: string;
  thumbnail?: string;
  viewCount: number;
  status: ReelStatus;
  commentsEnabled: boolean;
  createdAt: string;
}
