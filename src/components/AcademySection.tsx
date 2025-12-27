import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const AcademySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const programs = [
    {
      level: t('academy.foundation'),
      title: t('academy.course1.title'),
      description: t('academy.course1.desc'),
      duration: 8,
      cohort: 25,
      modules: [
        t('academy.module.microstructure'),
        t('academy.module.arbitrage'),
        t('academy.module.risk'),
      ],
      levelType: 'foundation',
    },
    {
      level: t('academy.advanced'),
      title: t('academy.course2.title'),
      description: t('academy.course2.desc'),
      duration: 12,
      cohort: 15,
      modules: [
        t('academy.module.neural'),
        t('academy.module.timeseries'),
        t('academy.module.portfolio'),
      ],
      levelType: 'advanced',
    },
    {
      level: t('academy.executive'),
      title: t('academy.course3.title'),
      description: t('academy.course3.desc'),
      duration: 16,
      cohort: 10,
      modules: [
        t('academy.module.compliance'),
        t('academy.module.capital'),
        t('academy.module.prime'),
      ],
      levelType: 'executive',
    },
  ];

  return (
    <section id="academy" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-widest">
              {t('academy.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
              {t('academy.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              {t('academy.subtitle')}
            </p>
          </div>
          <Button variant="institutional" size="lg" className="group self-start">
            {t('academy.viewAll')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30">
                {/* Header */}
                <div className="p-6 border-b border-border/50">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 ${
                    program.levelType === 'executive' 
                      ? 'bg-accent/10 text-accent' 
                      : program.levelType === 'advanced'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {program.level}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {program.duration} {t('academy.weeks')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {program.cohort} {t('academy.participants')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modules */}
                <div className="p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-4 block">
                    {t('academy.keyModules')}
                  </span>
                  <ul className="space-y-2">
                    {program.modules.map((module) => (
                      <li key={module} className="flex items-center gap-2 text-sm text-foreground">
                        <ChevronRight className="w-3 h-3 text-primary" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/5"
                  >
                    <span>{t('academy.syllabus')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
