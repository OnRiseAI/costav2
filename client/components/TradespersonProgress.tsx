import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type TradespersonProgressProps = {
  currentStep: 1 | 2 | 3;
};

const STEPS: Array<{ id: number; label: string }> = [
  { id: 1, label: "Your business" },
  { id: 2, label: "Your details" },
  { id: 3, label: "Review & confirm" },
];

export function TradespersonProgress({ currentStep }: TradespersonProgressProps) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container-custom py-4 md:py-5 lg:py-6 md:max-w-5xl">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-base">
          {STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const isActiveOrComplete = stepNumber <= currentStep;
            const lineIsActive = index < currentStep;

            const iconClassName = cn(
              "h-4 w-4 md:h-5 md:w-5",
              isActiveOrComplete ? "text-emerald-500" : "text-gray-300",
            );

            const labelClassName = cn(
              "font-medium",
              isActiveOrComplete ? "text-foreground" : "text-muted-foreground",
            );

            const lineClassName = cn(
              "h-px w-8 md:w-16",
              lineIsActive ? "bg-emerald-500" : "bg-gray-200",
            );

            return (
              <div key={step.id} className="flex items-center gap-3 md:gap-6">
                {index > 0 && <span className={lineClassName} />}
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={iconClassName} aria-hidden="true" />
                  <span className={labelClassName}>{step.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
