---
name: Admin Dashboard Full Design
overview: Design and implement all 15 admin sections with proper MVC-style architecture, a unified Listener/Counselor/Psychiatrist pattern, mobile-first responsive pages, and optimized shared code across the existing Next.js + Tailwind Himawari codebase.
todos:
  - id: todo-1771839463884-eyykrz2uc
    content: ""
    status: pending
isProject: false
---

# Admin Dashboard – Full Design & Implementation Plan

## Current state

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4. No backend/API; data is mocked in components.
- **Existing:** Dashboard (home), Users (list + detail with booking/call-chat/billing tabs), Listeners/Counselors/Psychiatrists (list + shared `ProfessionalDetail`), auth. **Missing:** Bookings, Settings, Reels, Content/CMS, Payments, Call & Chat Logs, Refer, Reports, Sub-admin. Sidebar has 7 items; BottomNav has 4 (Dashboard, Users, Bookings, Settings).
- **Ref:** [components/layout/Sidebar.tsx](himawari/components/layout/Sidebar.tsx), [components/listeners/ProfessionalDetail.tsx](himawari/components/listeners/ProfessionalDetail.tsx), [app/users/[id]/page.tsx](himawari/app/users/[id]/page.tsx).

---

## 1. MVC-style architecture

Next.js App Router does not enforce MVC; we map it as follows for clear separation and future API integration:


| Layer                 | Location                          | Purpose                                                                                                                                                                                                                                                                                                            |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Models**            | `types/`                          | Single source of truth: `User`, `Professional` (listener/counselor/psychiatrist), `Booking`, `Payment`, `Reel`, `CMSPage`, `Referral`, `Report`, `SubAdmin`, etc. Replace current `Record<string, unknown>` stubs and inline interfaces.                                                                           |
| **Services**          | `lib/services/` or `services/`    | Data access and business logic: e.g. `userService`, `professionalService`, `bookingService`, `paymentService`, `reelService`, `cmsService`, `referService`, `reportService`, `settingsService`. Each exports getList, getById, create, update, delete (or mock equivalents). Pages and API routes call these only. |
| **API (controllers)** | `app/api/`                        | When backend exists: route handlers that call services and return JSON. Optional for current mock-only phase; add when wiring to DB/backend.                                                                                                                                                                       |
| **Views**             | `app/**/page.tsx` + `components/` | Pages are thin: fetch via services (or hooks that use services), pass data to view components. No mock arrays inside page files.                                                                                                                                                                                   |


**Conventions:**

- No mock data in `page.tsx` or feature components; move to `lib/services/*.ts` (or `lib/data/` for static mocks) and access via services.
- Shared UI in `components/ui/`; domain-specific in `components/users/`, `components/professionals/`, `components/bookings/`, etc.
- Reuse one table component (e.g. `DataTable`) with columns config; reuse one card grid for professionals and one for reels.

---

## 2. Unified Listener / Counselor / Psychiatrist (same structure)

All three roles use the **same** list and detail flow; only copy and role-specific fields differ.

- **List page (same for all three):**  
Route: `/listeners`, `/counselors`, `/psychiatrists`.  
One shared component: e.g. `ProfessionalListPage` (or three thin pages that render it with `role="listener" | "counselor" | "psychiatrist"`).  
Content: page title + “Add new &lt;role&gt;”, metrics (total, available, avg rating), search/filters, and a single **ProfessionalGrid** (current `ListenerGrid` generalized) showing cards with avatar, name, role, rating, status (enable/disable), quick actions.
- **Detail page (same for all three):**  
Route: `/listeners/[id]`, `/counselors/[id]`, `/psychiatrists/[id]`.  
One shared component: **ProfessionalDetail** (extend current [ProfessionalDetail.tsx](himawari/components/listeners/ProfessionalDetail.tsx)) that:
  - Takes `role` from route (e.g. `usePathname()` or segment) and adjusts labels and optional sections.
  - **Common sections:** Profile header (avatar, name, contact, location), Experience & certificates, Ratings & reviews, Enable/disable toggle, Session history (or “Sessions”).
  - **Role-specific (same component, show by role):**  
    - Counselor: “View sessions”, “Ratings & feedback” (same as common ratings/reviews).  
    - Psychiatrist: “Appointment slots”, “Session reports”, “Ratings”, “Activate / deactivate” (same as enable/disable).
- **Data:** One `Professional` type with `role: 'listener' | 'counselor' | 'psychiatrist'`. One `professionalService.getList(role)`, `professionalService.getById(id)` (optionally filter by role in UI). One set of list/detail components; no duplicate list/detail pages per role.

This keeps Counselor and Psychiatrist pages **the same** as Listener in layout and component tree, with only role-driven copy and optional blocks.

---

## 3. Route and navigation map

- **Sidebar + BottomNav:** Expand to include all 15 sections. Use grouped/collapsible sidebar groups (e.g. “Management”, “Content”, “Finance”, “System”) so the list stays scannable. BottomNav: keep 4–5 main items (e.g. Dashboard, Users, Bookings, More) with “More” opening a sheet that lists Reels, Content, Payments, Logs, Refer, Reports, CMS, Settings, Sub-admin.
- **Routes to add (all under DashboardLayout except auth):**


| #   | Section                 | Routes                                             | Notes                                                                              |
| --- | ----------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1   | Dashboard               | `/` (existing)                                     | Enhance with all requested metrics and graphs.                                     |
| 2   | User Management         | `/users`, `/users/[id]` (existing)                 | Add search, block/unblock, profile, booking history, chat/call history.            |
| 3   | Listener Management     | `/listeners`, `/listeners/[id]` (existing)         | Use unified professional list/detail.                                              |
| 4   | Counselor Management    | `/counselors`, `/counselors/[id]` (existing)       | Same as listener.                                                                  |
| 5   | Psychiatrist Management | `/psychiatrists`, `/psychiatrists/[id]` (existing) | Same as listener + slots, reports, activate/deactivate.                            |
| 6   | Booking Management      | `/bookings`, `/bookings/[id]?`                     | List + filters (chat/voice/video), reschedule/cancel.                              |
| 7   | Content Management      | `/content` or `/cms`                               | Landing: Reels (myth busting), Stories (Kashir).                                   |
| 8   | Reels Management        | `/reels`, `/reels/[id]?`                           | Upload, category, approve/delete, view count, comments control.                    |
| 9   | Payment & Revenue       | `/payments` (or `/revenue`)                        | User payments, earnings by role, commission, refunds.                              |
| 10  | Call & Chat Logs        | `/logs`                                            | App call logs (masked), chat history, VC history, notes, refer logs.               |
| 11  | Refer System            | `/refer` or `/referrals`                           | Refer to counselor/psychiatrist, status, follow-up notes.                          |
| 12  | Reports (KPI)           | `/reports`                                         | Daily KPI, booking conversion, top listeners, rating report, revenue, user growth. |
| 13  | CMS Pages               | `/cms` or `/cms-pages`                             | Privacy, Terms, Onboarding screens, FAQ, About us.                                 |
| 14  | Settings                | `/settings`                                        | App settings, commission %, notification, mask call, banner.                       |
| 15  | Sub-admin Roles         | `/sub-admin` or `/admins`                          | Create admin, role permissions, activity logs.                                     |


---

## 4. Section-by-section page and component design

### 1) Dashboard (`/`)

- **Content:** Total users count; total listeners / counselors / psychiatrists; today’s bookings; total revenue; active calls / active chats; recent activities list; graphs (weekly / monthly).
- **Components:** Reuse/expand `MetricCard`, `ActivityList`, `DashboardChartCard`. Add time-range toggle (weekly/monthly) for charts. Data from `dashboardService` or `reportService` (mock).
- **Files:** [app/page.tsx](himawari/app/page.tsx), `components/dashboard/` (existing + chart filters).

### 2) User Management

- **List:** View all users, search (by name/email/phone), block/unblock action, link to profile. Use shared `DataTable` + `userService.getList()`.
- **Detail:** View user profile; user booking history (table); user chat/call history (table or tabs). Block/unblock in header. Data from `userService.getById(id)` and `bookingService.getByUser(id)`, etc.
- **Files:** [app/users/page.tsx](himawari/app/users/page.tsx), [app/users/[id]/page.tsx](himawari/app/users/[id]/page.tsx), [components/users/UserTable.tsx](himawari/components/users/UserTable.tsx), UserProfileHeader, BookingHistoryTable, CallChatHistory (or reuse from existing tabs).

### 3–5) Listener / Counselor / Psychiatrist Management

- **List (all three):** Add new &lt;role&gt;, view list (grid or table), search/filter. Metrics: total, available, avg rating. Use `ProfessionalGrid` + `professionalService.getList(role)`.
- **Detail (all three):** View details; experience & certificates; ratings & reviews; enable/disable (and “activate/deactivate” for psychiatrist); counselor: view sessions, ratings & feedback; psychiatrist: appointment slots, session reports, ratings, activate/deactivate.
- **Files:** One `ProfessionalListPage` (or three thin pages), one [ProfessionalDetail](himawari/components/listeners/ProfessionalDetail.tsx) with role-based sections. Optional: `AppointmentSlots`, `SessionReports` subcomponents.

### 6) Booking Management

- **Pages:** `/bookings` list; optional `/bookings/[id]` for detail.
- **List:** Filters: type (chat / voice / video); status; date range. Columns: user, professional, type, date/time, status, actions (reschedule, cancel). Data: `bookingService.getList(filters)`.
- **Components:** `BookingFilters`, `BookingTable`, `RescheduleModal`, `CancelModal`.

### 7) Content Management

- **Page:** `/content` or `/cms` (landing). Two blocks: “Reels (myth busting videos)” → link to `/reels`, “Stories (Kashir stories)” → link to `/content/stories` (or separate route). Can be cards or list.

### 8) Reels Management

- **List:** Upload reel button; category filter; table or grid: thumbnail, title, category, view count, status (pending/approved), actions (approve, delete); comments control (enable/disable or link to comment moderation).
- **Components:** `ReelUploadModal`, `ReelTable` or `ReelGrid`, `ReelFilters`. Data: `reelService`.

### 9) Payment & Revenue

- **Page:** Tabs or sections: User payments; Listener earnings; Counselor earnings; Psychiatrist earnings; Commission settings; Refunds. Tables with filters and export. Data: `paymentService`, `revenueService`.

### 10) Call & Chat Logs

- **Page:** Tabs: App call logs (masked number); Chat history; VC history; Notes by listener; Refer logs. Read-only tables; masking applied in service or display. Data: `logsService`.

### 11) Refer System

- **Page:** Refer to counselor; refer to psychiatrist; track referral status; follow-up notes. List of referrals with status and notes; form or modal to create referral. Data: `referService`.

### 12) Reports (KPI)

- **Page:** Sections or tabs: Daily KPI; Booking conversion; Top listeners; Rating report; Revenue report; User growth. Use shared chart component and tables. Data: `reportService`.

### 13) CMS Pages

- **Page:** List of editable pages: Privacy policy, Terms & conditions, Onboarding screens, FAQ, About us. Each row: name, last updated, edit link. Edit: form or rich-text editor (simple text/markdown first). Data: `cmsService`.

### 14) Settings

- **Page:** Form sections: App settings; Commission %; Notification; Mask call settings; Banner control. Save per section or global save. Data: `settingsService`.

### 15) Sub-admin Roles

- **Page:** List of admins; “Create admin”; role permission matrix (checkboxes per feature); activity logs table (who did what, when). Data: `subAdminService`, `activityLogService`.

---

## 5. Types (models) to add in `types/`

- `user.ts`: User (id, name, email, phone, status, joiningDate, image, userId, etc.)
- `professional.ts`: Professional (id, name, role, email, phone, location, rating, reviews, sessions, hours, joined, image, license, education, specialties, isActive, certificates, etc.)
- `booking.ts`: Booking (id, user, professional, type: chat|voice|video, date, time, duration, status, etc.)
- `payment.ts`: Payment, Earnings, Commission, Refund
- `reel.ts`: Reel (id, title, category, viewCount, status, commentsEnabled, etc.)
- `cms.ts`: CMSPage (slug, title, content, updatedAt)
- `referral.ts`: Referral (id, from, to, type, status, followUpNotes)
- `report.ts`: KPI, BookingConversion, TopListener, RatingReport, RevenueReport, UserGrowth
- `settings.ts`: AppSettings, Commission, Notification, MaskCall, Banner
- `subAdmin.ts`: SubAdmin, Role, Permission, ActivityLog

Use these in services and components; remove duplicate inline interfaces.

---

## 6. Services in `lib/services/` (or `services/`)

- One file per domain: `userService`, `professionalService`, `bookingService`, `paymentService`, `reelService`, `cmsService`, `referService`, `reportService`, `settingsService`, `subAdminService`, `logsService`. Each exports functions that return mock data (or later call `fetch` to `app/api/...`). Pages and API routes import only from these.

---

## 7. Mobile optimization (every page)

- **Layout:** Keep [DashboardLayout](himawari/components/layout/DashboardLayout.tsx): sidebar hidden on small screens, bottom nav visible (`lg:hidden`). Main content: `px-4`, `pb-20` for nav clearance.
- **Tables:** Use responsive pattern: on mobile, switch to card list (one card per row) or horizontal scroll with min-width table; avoid tiny fonts (min 14px). Reuse one `ResponsiveTable` wrapper that renders either table or cards based on breakpoint.
- **Touch:** Buttons and links min 44px height; spacing between actions adequate. Modals/drawers full-screen on mobile if needed.
- **Navigation:** BottomNav shows 4–5 items; “More” opens drawer with remaining sections. Sidebar (desktop) uses groups to avoid long single list.
- **Charts:** Stack or simplify for small screens; same data, different layout (e.g. `DashboardChartCard` responsive).
- Apply consistently to Dashboard, Users, all Professional pages, Bookings, Reels, Payments, Logs, Refer, Reports, CMS, Settings, Sub-admin.

---

## 8. Code optimization

- **Single DataTable component:** Accept columns and data; use for users, bookings, payments, logs, referrals, activity logs, CMS list, reels (or separate ReelGrid if card layout preferred).
- **Single MetricCard:** Already present; reuse on Dashboard and list pages.
- **Professional grid and detail:** One ListenerGrid/ProfessionalGrid and one ProfessionalDetail for all three roles (parameterized by role).
- **Charts:** One configurable chart component (e.g. line/bar) for Dashboard and Reports.
- **Forms:** Reuse input, select, checkbox components; one `FormSection` for Settings and CMS edit.
- **No duplicate mock data:** All mocks in services (or `lib/data/`), not in page or component files.

---

## 9. Implementation order (suggested)

1. **Types + services:** Add all types and service files with mock data; refactor existing pages to use them.
2. **Unified professionals:** Refactor Listener/Counselor/Psychiatrist to one list + one detail component and role-based data; ensure psychiatrist-specific sections (slots, reports, activate/deactivate) in same detail view.
3. **Dashboard:** Enrich with all metrics, recent activities, weekly/monthly graphs.
4. **User management:** Add search, block/unblock, booking and chat/call history in detail.
5. **Bookings:** New list page with filters and reschedule/cancel.
6. **Content + Reels:** Content landing + Reels list/upload/approve/delete/view count/comments.
7. **Payments, Logs, Refer, Reports:** New pages and tables/charts using shared components.
8. **CMS, Settings, Sub-admin:** New pages and forms.
9. **Navigation:** Update Sidebar (grouped) and BottomNav (with “More” drawer).
10. **Mobile pass:** Responsive tables, touch targets, and layout check on every new and updated page.

---

## 10. Summary

- **MVC:** Types in `types/`, data and logic in `lib/services/`, thin pages and reusable components as views; API routes later as controllers.
- **Listener/Counselor/Psychiatrist:** Same list and same detail component; role from route; only labels and optional sections (slots, reports, activate/deactivate) differ.
- **All 15 sections** get dedicated routes and pages as above, with shared DataTable, MetricCard, charts, and forms.
- **Mobile:** Responsive layout, bottom nav + “More” drawer, card fallback for tables, 44px touch targets, applied across all pages.
- **Optimization:** No duplicated mocks, single table/grid/chart/form building blocks, one professional flow for all three roles.

