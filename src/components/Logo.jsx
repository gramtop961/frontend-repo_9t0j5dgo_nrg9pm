import { ThumbsUp } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex items-center justify-center rounded-full bg-white/10 p-1.5 ring-1 ring-white/15">
        <ThumbsUp className="h-4 w-4 text-[#74ACDF]" aria-hidden="true" />
      </div>
      <span className="font-extrabold tracking-tight text-[#74ACDF]">AI FORGE</span>
      <div className="flex items-center justify-center rounded-full bg-white/10 p-1.5 ring-1 ring-white/15">
        <ThumbsUp className="h-4 w-4 text-[#74ACDF]" aria-hidden="true" />
      </div>
    </div>
  );
}
