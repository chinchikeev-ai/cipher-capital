import { motion } from 'framer-motion';

export const DataWave = () => {
  const bars = 20;

  return (
    <div className="flex items-end gap-1 h-16 overflow-hidden">
      {Array.from({ length: bars }).map((_, index) => (
        <motion.div
          key={index}
          className="flex-1 bg-gradient-to-t from-accent/40 to-accent rounded-t-sm"
          initial={{ height: '20%' }}
          animate={{
            height: ['20%', `${30 + Math.random() * 70}%`, '20%'],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            delay: index * 0.05,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
