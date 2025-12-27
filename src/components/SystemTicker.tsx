import { Activity, CheckCircle, Server, Shield, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const SystemTicker = () => {
  const { t } = useLanguage();

  const statusItems = [
    { icon: Server, label: t('ticker.cluster'), status: t('ticker.operational'), latency: '0.28ms' },
    { icon: Wifi, label: t('ticker.network'), status: t('ticker.optimal'), latency: '99.99%' },
    { icon: Shield, label: t('ticker.security'), status: t('ticker.active'), latency: 'Level 5' },
    { icon: Activity, label: t('ticker.engine'), status: t('ticker.online'), latency: '12,847 ops/s' },
    { icon: Server, label: t('ticker.backup'), status: t('ticker.standby'), latency: t('ticker.ready') },
    { icon: Wifi, label: t('ticker.cdn'), status: t('ticker.active'), latency: `23 ${t('ticker.nodes')}` },
  ];

  return (
    <div className="py-6 border-y border-border/50 bg-secondary/30 overflow-hidden">
      <div className="flex">
        <div
          className="flex gap-12 ticker-scroll"
          style={{ minWidth: 'max-content' }}
        >
          {[...statusItems, ...statusItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-primary" />
                <span className="text-sm text-foreground font-medium">{item.status}</span>
              </div>
              <span className="text-xs text-primary font-mono">{item.latency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
