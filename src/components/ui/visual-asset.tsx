/** @visual-asset-renderer — jiackey:deck:asset:v1 */
import { cn } from "@/lib/utils";

interface VisualAssetProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export function VisualAsset({ src, alt, className, caption }: VisualAssetProps) {
  return (
    <div className={cn("group relative flex flex-col items-center", className)}>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-accent/10 hover:shadow-2xl">
        {/* Mock browser top bar for a cleaner look if it's a web screenshot */}
        <div className="flex h-8 w-full items-center gap-1.5 border-b border-white/10 bg-zinc-950/80 px-4">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <img
          src={src}
          alt={alt}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="mt-4 text-sm text-zinc-500 font-medium tracking-wide">
          {caption}
        </p>
      )}
    </div>
  );
}
