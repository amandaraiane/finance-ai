import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  percentage: number;
}

export function PercentageItem({
  icon,
  percentage,
  title,
}: PercentageItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{percentage}%</p>
    </div>
  );
}
