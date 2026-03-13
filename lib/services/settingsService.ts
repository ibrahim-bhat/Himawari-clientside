import type { AppSettings, CommissionSettings, NotificationSettings, MaskCallSettings, BannerSettings } from "@/types";

const mockAppSettings: AppSettings = {
  appName: "Himawari",
  supportEmail: "support@himawari.com",
  supportPhone: "+91 1234567890",
  maintenanceMode: false,
};

const mockCommission: CommissionSettings = {
  listenerPercent: 20,
  counselorPercent: 25,
  psychiatristPercent: 30,
};

const mockNotification: NotificationSettings = {
  emailEnabled: true,
  pushEnabled: true,
  smsEnabled: false,
};

const mockMaskCall: MaskCallSettings = {
  enabled: true,
  maskFormat: "******XXXX",
};

const mockBanner: BannerSettings = {
  enabled: false,
  title: "Maintenance",
  message: "Scheduled maintenance on Sunday.",
  link: "/announcements",
};

export function getAppSettings(): AppSettings {
  return { ...mockAppSettings };
}

export function updateAppSettings(settings: Partial<AppSettings>): AppSettings {
  Object.assign(mockAppSettings, settings);
  return getAppSettings();
}

export function getCommissionSettings(): CommissionSettings {
  return { ...mockCommission };
}

export function updateCommissionSettings(settings: Partial<CommissionSettings>): CommissionSettings {
  Object.assign(mockCommission, settings);
  return getCommissionSettings();
}

export function getNotificationSettings(): NotificationSettings {
  return { ...mockNotification };
}

export function updateNotificationSettings(settings: Partial<NotificationSettings>): NotificationSettings {
  Object.assign(mockNotification, settings);
  return getNotificationSettings();
}

export function getMaskCallSettings(): MaskCallSettings {
  return { ...mockMaskCall };
}

export function updateMaskCallSettings(settings: Partial<MaskCallSettings>): MaskCallSettings {
  Object.assign(mockMaskCall, settings);
  return getMaskCallSettings();
}

export function getBannerSettings(): BannerSettings {
  return { ...mockBanner };
}

export function updateBannerSettings(settings: Partial<BannerSettings>): BannerSettings {
  Object.assign(mockBanner, settings);
  return getBannerSettings();
}
