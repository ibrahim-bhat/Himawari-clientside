import type { User } from "@/types";

const mockUsers: User[] = [
  { id: 1, name: "Ayaan Khan", email: "ayaan.khan@maildemo.com", status: "Active", joiningDate: "12 Jan 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11231" },
  { id: 2, name: "Zara Ahmed", email: "zara.ahmed@maildemo.com", status: "Blocked", joiningDate: "25 Jan 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11232" },
  { id: 3, name: "Hamza Malik", email: "hamza.malik@maildemo.com", status: "Active", joiningDate: "3 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11233" },
  { id: 4, name: "Noor Fatima", email: "noor.fatima@maildemo.com", status: "Active", joiningDate: "18 Dec 2024", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11234" },
  { id: 5, name: "Ali Raza", email: "ali.raza@maildemo.com", status: "Blocked", joiningDate: "6 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11235" },
  { id: 6, name: "Mustafa Sheikh", email: "mustafa@maildemo.com", status: "Blocked", joiningDate: "8 Feb 2025", image: "/pic.png", phone: "+91 1234567890", userId: "#USR-11236" },
];

export function getUsers(search?: string, status?: string): User[] {
  let list = [...mockUsers];
  if (search) {
    const q = search.toLowerCase();
    list = list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || (u.phone && u.phone.includes(q)));
  }
  if (status && status !== "all") list = list.filter((u) => u.status === status);
  return list;
}

export function getUserById(id: number): User | undefined {
  return mockUsers.find((u) => u.id === id);
}

export function updateUserStatus(id: number, status: "Active" | "Blocked"): User | undefined {
  const u = mockUsers.find((u) => u.id === id);
  if (u) u.status = status;
  return u;
}
