import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Activity, Cpu, Database, Network, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DataCluster {
  id: number;
  x: number;
  y: number;
  size: number;
  processed: boolean;
}

export const PerformanceSimulation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isRunning, setIsRunning] = useState(true);
  const [clusters, setClusters] = useState<DataCluster[]>([]);
  const [stats, setStats] = useState({
    processed: 0,
    throughput: 0,
    accuracy: 99.2,
  });

  useEffect(() => {
    if (!isRunning) return;

    const generateClusters = () => {
      const newClusters: DataCluster[] = [];
      for (let i = 0; i < 12; i++) {
        newClusters.push({
          id: Date.now() + i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
          size: Math.random() * 20 + 10,
          processed: false,
        });
      }
      setClusters(newClusters);
    };

    generateClusters();
    const interval = setInterval(() => {
      generateClusters();
      setStats((prev) => ({
        processed: prev.processed + Math.floor(Math.random() * 1000) + 500,
        throughput: Math.floor(Math.random() * 2000) + 8000,
        accuracy: 98.5 + Math.random() * 1.4,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning || clusters.length === 0) return;

    const processInterval = setInterval(() => {
      setClusters((prev) => {
        const unprocessed = prev.filter((c) => !c.processed);
        if (unprocessed.length === 0) return prev;

        const toProcess = unprocessed[0];
        return prev.map((c) =>
          c.id === toProcess.id ? { ...c, processed: true } : c
        );
      });
    }, 150);

    return () => clearInterval(processInterval);
  }, [isRunning, clusters]);

  return (
    <section id="technology" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Core Technology
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            AI Analyze Engine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-time performance visualization of our proprietary market emulation system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-2xl border-gradient overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Performance Simulation</h3>
                  <p className="text-xs text-muted-foreground">
                    {isRunning ? 'Processing data clusters...' : 'Simulation paused'}
                  </p>
                </div>
              </div>
              <Button
                variant="institutional"
                size="sm"
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Resume
                  </>
                )}
              </Button>
            </div>

            {/* Visualization Area */}
            <div className="relative h-80 bg-background/50 overflow-hidden">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Central Processing Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center glow-cyan">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                  {/* Pulse rings */}
                  {isRunning && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border border-primary/30"
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-primary/30"
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Data Clusters */}
              {clusters.map((cluster) => (
                <motion.div
                  key={cluster.id}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: cluster.processed ? 0 : 1,
                    scale: cluster.processed ? 0 : 1,
                    x: cluster.processed ? '50%' : 0,
                    y: cluster.processed ? '50%' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    left: `${cluster.x}%`,
                    top: `${cluster.y}%`,
                  }}
                >
                  <div
                    className={`rounded-full ${
                      cluster.processed ? 'bg-primary' : 'bg-accent/60'
                    }`}
                    style={{
                      width: cluster.size,
                      height: cluster.size,
                    }}
                  />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 pointer-events-none">
                {clusters
                  .filter((c) => !c.processed)
                  .slice(0, 6)
                  .map((cluster) => (
                    <motion.line
                      key={`line-${cluster.id}`}
                      x1={`${cluster.x}%`}
                      y1={`${cluster.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="hsl(187, 100%, 50%)"
                      strokeWidth="1"
                      strokeOpacity="0.2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
              </svg>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 divide-x divide-border/50 border-t border-border/50">
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Processed
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {stats.processed.toLocaleString()}
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Network className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Throughput
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {stats.throughput.toLocaleString()}
                  <span className="text-sm text-muted-foreground">/s</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Accuracy
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {stats.accuracy.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Brain = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);
