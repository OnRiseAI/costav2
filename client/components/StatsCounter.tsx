import { LucideIcon } from 'lucide-react';

interface StatsCounterProps {
  icon: LucideIcon;
  value: string;
  label: string;
  colorScheme?: 'blue' | 'green' | 'orange';
}

const colorSchemes = {
  blue: {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    numberColor: 'text-blue-600',
    cardHover: 'hover:border-blue-200',
    cardBg: 'bg-gradient-to-br from-blue-50/50 to-white',
  },
  green: {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    numberColor: 'text-green-600',
    cardHover: 'hover:border-green-200',
    cardBg: 'bg-gradient-to-br from-green-50/50 to-white',
  },
  orange: {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    numberColor: 'text-orange-600',
    cardHover: 'hover:border-orange-200',
    cardBg: 'bg-gradient-to-br from-orange-50/50 to-white',
  },
};

export function StatsCounter({ icon: Icon, value, label, colorScheme = 'blue' }: StatsCounterProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div className={`flex flex-col items-center text-center p-8 rounded-2xl border-2 border-gray-100 ${colors.cardBg} ${colors.cardHover} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
      <div className={`w-20 h-20 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`h-10 w-10 ${colors.iconColor}`} />
      </div>
      <div className={`text-5xl md:text-6xl font-bold ${colors.numberColor} mb-3`}>{value}</div>
      <div className="text-base md:text-lg text-gray-600 font-semibold">{label}</div>
    </div>
  );
}
