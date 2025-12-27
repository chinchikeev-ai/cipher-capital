import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Clock, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    level: 'Foundation',
    title: 'Algorithmic Trading Fundamentals',
    description: 'Core concepts of systematic trading, market microstructure, and quantitative analysis.',
    duration: '8 Weeks',
    cohort: '25 Participants',
    modules: ['Market Microstructure', 'Statistical Arbitrage', 'Risk Management'],
  },
  {
    level: 'Advanced',
    title: 'Machine Learning for Markets',
    description: 'Deep learning architectures, feature engineering, and model deployment for alpha generation.',
    duration: '12 Weeks',
    cohort: '15 Participants',
    modules: ['Neural Networks', 'Time Series Analysis', 'Portfolio Optimization'],
  },
  {
    level: 'Executive',
    title: 'Institutional Strategy Design',
    description: 'Enterprise-grade strategy development, regulatory compliance, and institutional operations.',
    duration: '16 Weeks',
    cohort: '10 Participants',
    modules: ['Compliance Frameworks', 'Capital Allocation', 'Prime Brokerage'],
  },
];

export const AcademySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
              The Academy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
              Knowledge Transfer
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Executive programs designed for institutional professionals 
              seeking systematic trading expertise.
            </p>
          </div>
          <Button variant="institutional" size="lg" className="group self-start">
            View All Programs
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
                    program.level === 'Executive' 
                      ? 'bg-accent/10 text-accent' 
                      : program.level === 'Advanced'
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
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{program.cohort}</span>
                    </div>
                  </div>
                </div>

                {/* Modules */}
                <div className="p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-4 block">
                    Key Modules
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
                    <span>Request Syllabus</span>
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
