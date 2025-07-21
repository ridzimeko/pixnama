import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";

type Option = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  value: string;
  label: string;
  description?: string;
};

type Props = {
  className?: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
};

function LottieRadioCard({ icon, value, selected, label, description }: Option & { selected: boolean }) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <RadioGroup.Item
  key={value}
  value={value}
  onMouseEnter={() => lottieRef.current?.play()}
  onMouseLeave={() => lottieRef.current?.stop()}
  className={cn(
    "bg-card rounded-2xl border p-4 text-center cursor-pointer select-none transition-all",
    selected
      ? "border-primary ring-2 ring-primary"
      : "border-muted hover:border-accent-foreground"
  )}
>
  <div className="text-sm font-medium">
  {icon && (
    <Lottie
    lottieRef={lottieRef}
    animationData={icon}
    loop={false}
    autoplay={false}
    style={{ width: "100%", height: "160px" }}
  />
  )}
    <h2 className="text-xl font-semibold">{label}</h2>
    <p>{description}</p>
  </div>
</RadioGroup.Item>
  )
}

export function RadixRadioCard({ className, options, value, onChange }: Props) {

  return (
    <RadioGroup.Root
      className={className}
      value={value}
      onValueChange={onChange}
    >
      {options.map((option) => (
       <LottieRadioCard
       key={option.value}
       value={option.value}
       label={option.label}
       description={option.description}
       icon={option.icon}
       selected={value === option.value}
     />
      ))}
    </RadioGroup.Root>
  );
}
