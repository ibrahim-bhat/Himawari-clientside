"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  getAppSettings,
  updateAppSettings,
  getCommissionSettings,
  updateCommissionSettings,
  getNotificationSettings,
  updateNotificationSettings,
  getMaskCallSettings,
  updateMaskCallSettings,
  getBannerSettings,
  updateBannerSettings,
} from "@/lib/services/settingsService";

export default function SettingsPage() {
  const [appSettings, setAppSettings] = useState(getAppSettings());
  const [commission, setCommission] = useState(getCommissionSettings());
  const [notification, setNotification] = useState(getNotificationSettings());
  const [maskCall, setMaskCall] = useState(getMaskCallSettings());
  const [banner, setBanner] = useState(getBannerSettings());

  const saveApp = () => { updateAppSettings(appSettings); };
  const saveCommission = () => { updateCommissionSettings(commission); };
  const saveNotification = () => { updateNotificationSettings(notification); };
  const saveMaskCall = () => { updateMaskCallSettings(maskCall); };
  const saveBanner = () => { updateBannerSettings(banner); };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl sm:text-[32px] font-bold text-[#111827]">Settings</h1>
          <p className="mt-1 text-sm sm:text-base text-[#6b7280]">App settings, commission, notification, mask call, banner.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">App settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">App name</label>
              <input type="text" value={appSettings.appName} onChange={(e) => setAppSettings({ ...appSettings, appName: e.target.value })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support email</label>
              <input type="email" value={appSettings.supportEmail} onChange={(e) => setAppSettings({ ...appSettings, supportEmail: e.target.value })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support phone</label>
              <input type="text" value={appSettings.supportPhone} onChange={(e) => setAppSettings({ ...appSettings, supportPhone: e.target.value })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input type="checkbox" id="maintenance" checked={appSettings.maintenanceMode} onChange={(e) => setAppSettings({ ...appSettings, maintenanceMode: e.target.checked })} className="rounded border-gray-300" />
              <label htmlFor="maintenance" className="text-sm font-medium text-gray-700">Maintenance mode</label>
            </div>
          </div>
          <Button className="mt-4 min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white" onClick={saveApp}>Save</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Commission %</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Listener %</label>
              <input type="number" min={0} max={100} value={commission.listenerPercent} onChange={(e) => setCommission({ ...commission, listenerPercent: Number(e.target.value) })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Counselor %</label>
              <input type="number" min={0} max={100} value={commission.counselorPercent} onChange={(e) => setCommission({ ...commission, counselorPercent: Number(e.target.value) })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Psychiatrist %</label>
              <input type="number" min={0} max={100} value={commission.psychiatristPercent} onChange={(e) => setCommission({ ...commission, psychiatristPercent: Number(e.target.value) })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
          </div>
          <Button className="mt-4 min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white" onClick={saveCommission}>Save</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Notification</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-2 min-h-[44px]"><input type="checkbox" checked={notification.emailEnabled} onChange={(e) => setNotification({ ...notification, emailEnabled: e.target.checked })} className="rounded border-gray-300" /><span className="text-sm font-medium">Email</span></label>
            <label className="flex items-center gap-2 min-h-[44px]"><input type="checkbox" checked={notification.pushEnabled} onChange={(e) => setNotification({ ...notification, pushEnabled: e.target.checked })} className="rounded border-gray-300" /><span className="text-sm font-medium">Push</span></label>
            <label className="flex items-center gap-2 min-h-[44px]"><input type="checkbox" checked={notification.smsEnabled} onChange={(e) => setNotification({ ...notification, smsEnabled: e.target.checked })} className="rounded border-gray-300" /><span className="text-sm font-medium">SMS</span></label>
          </div>
          <Button className="mt-4 min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white" onClick={saveNotification}>Save</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Mask call settings</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-2 min-h-[44px]"><input type="checkbox" checked={maskCall.enabled} onChange={(e) => setMaskCall({ ...maskCall, enabled: e.target.checked })} className="rounded border-gray-300" /><span className="text-sm font-medium">Enabled</span></label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mask format</label>
              <input type="text" value={maskCall.maskFormat} onChange={(e) => setMaskCall({ ...maskCall, maskFormat: e.target.value })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" />
            </div>
          </div>
          <Button className="mt-4 min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white" onClick={saveMaskCall}>Save</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Banner control</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-2 min-h-[44px]"><input type="checkbox" checked={banner.enabled} onChange={(e) => setBanner({ ...banner, enabled: e.target.checked })} className="rounded border-gray-300" /><span className="text-sm font-medium">Show banner</span></label>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" value={banner.title} onChange={(e) => setBanner({ ...banner, title: e.target.value })} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[44px]" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea value={banner.message} onChange={(e) => setBanner({ ...banner, message: e.target.value })} rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" /></div>
          </div>
          <Button className="mt-4 min-h-[44px] bg-[#259A9E] hover:bg-[#1d7a7d] text-white" onClick={saveBanner}>Save</Button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
