// components/award-card.tsx
import { Award } from 'lucide-react';

interface AwardProps {
  title: string;
  year: string;
  description: string;
  category: string;
}

export function AwardCard({ title, year, description, category }: AwardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
          <Award className="w-6 h-6 text-accent group-hover:text-white" />
        </div>
        <span className="text-sm font-bold bg-primary text-primary-foreground px-4 py-1 rounded-full">
          {year}
        </span>
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          {category}
        </span>
      </div>
    </div>
  );
}