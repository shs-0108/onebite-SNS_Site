import { Share2Icon } from "lucide-react";
import { toast } from "sonner";

export default function SharePostButton({ postId }: { postId: number }) {
  const handleCopyLinkShare = async () => {
    const url = `${window.location.protocol}//${window.location.host}/post/${postId}`;
    navigator.clipboard.writeText(url);
    console.log(url);

    toast.message("링크를 클립보드에 복사했습니다.", {
      position: "top-center",
    });
  };

  return (
    <div
      className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-xl border-1 p-2 px-4 text-sm"
      onClick={handleCopyLinkShare}
    >
      <Share2Icon className="h-4 w-4" />
      <span>공유</span>
    </div>
  );
}
