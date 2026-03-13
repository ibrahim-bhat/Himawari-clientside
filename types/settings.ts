export interface AppSettings {
  appName: string;
  supportEmail: string;
  supportPhone: string;
  maintenanceMode: boolean;
}

export interface CommissionSettings {
  listenerPercent: number;
  counselorPercent: number;
  psychiatristPercent: number;
}

export interface NotificationSettings {
  emailEnabled: boolean;
  pushEnabled: boolean;
  smsEnabled: boolean;
}

export interface MaskCallSettings {
  enabled: boolean;
  maskFormat: string;
}

export interface BannerSettings {
  enabled: boolean;
  title: string;
  message: string;
  link?: string;
}
