import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Layers, ArrowUpRight } from 'lucide-react';
import { DataWave } from './DataWave';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      title: t('services.hft.title'),
      description: t('services.hft.desc'),
      stats: { value: '0.3ms', label: t('services.hft.stat') },
      accent: 'primary',
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      stats: { value: '10K+', label: t('services.ai.stat') },
      accent: 'accent',
      hasDataWave: true,
    },
    {
      icon: Layers,
      title: t('services.defi.title'),
      description: t('services.defi.desc'),
      stats: { value: '24.7%', label: t('services.defi.stat') },
      accent: 'primary',
    },
  ];

  return (
    <section id="solutions" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            {t('services.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 border-gradient relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(187_100%_50%/0.1)]">
                {/* Background Glow */}
                <div 
                  className={`absolute top-0 right-0 w-40 h-40 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{ 
                    background: service.accent === 'accent' 
                      ? 'var(--gradient-glow-gold)' 
                      : 'var(--gradient-glow-cyan)' 
                  }}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.accent === 'accent' 
                    ? 'bg-accent/10 text-accent group-hover:bg-accent/20' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Data Wave for AI Engine card */}
                {service.hasDataWave && (
                  <div className="mb-6">
                    <DataWave />
                  </div>
                )}

                {/* Stats */}
                <div className="pt-6 border-t border-border/50">
                  <div className={`font-display text-2xl font-bold ${
                    service.accent === 'accent' ? 'text-accent' : 'text-primary'
                  }`}>
                    {service.stats.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {service.stats.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
