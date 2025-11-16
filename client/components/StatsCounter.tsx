import { LucideIcon } from 'lucide-react';

interface StatsCounterProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatsCounter({ icon: Icon, value, label }: StatsCounterProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
