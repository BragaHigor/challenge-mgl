import { cn } from "../../../utils/lib/tailwindClassUtils";

function Skeleton({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={cn("animate-pulse rounded-md bg-white/10", className)}
         {...props}
      />
   );
}

export { Skeleton };
