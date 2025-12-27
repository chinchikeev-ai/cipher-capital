import { motion } from 'framer-motion';
import { Activity, CheckCircle, Server, Shield, Wifi } from 'lucide-react';

const statusItems = [
  { icon: Server, label: 'Primary Cluster', status: 'Operational', latency: '0.28ms' },
  { icon: Wifi, label: 'Network Status', status: 'Optimal', latency: '99.99%' },
  { icon: Shield, label: 'Security Layer', status: 'Active', latency: 'Level 5' },
  { icon: Activity, label: 'Trading Engine', status: 'Online', latency: '12,847 ops/s' },
  { icon: Server, label: 'Backup Systems', status: 'Standby', latency: 'Ready' },
  { icon: Wifi, label: 'Global CDN', status: 'Active', latency: '23 Nodes' },
];

export const SystemTicker = () => {
  return (
    <div className="py-6 border-y border-border/50 bg-secondary/30 overflow-hidden">
      <div className="flex">
        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
};
