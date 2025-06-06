
import React from 'react';
import { RealNetworkDashboard } from '@/components/RealNetworkDashboard';
import { NetworkNotifications } from '@/components/NetworkNotifications';
import { Header } from '@/components/Header';
import { useTranslation } from 'react-i18next';

/**
 * صفحة مراقب الشبكة للويب
 * تعرض معلومات الشبكة المتاحة في بيئة المتصفح
 */
export default function RealNetworkMonitor() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">مراقب الشبكة المباشر</h1>
          <p className="text-muted-foreground">
            مراقبة حالة شبكتك وسرعة الإنترنت في الوقت الفعلي
          </p>
        </div>
        
        <RealNetworkDashboard />
        <NetworkNotifications />
      </div>
    </div>
  );
}
