import { useOpenRePostModal } from "@/store/post-editor-modal";
import type { PostEntity } from "@/types";
import { Repeat2Icon } from "lucide-react";

export default function RePostButton(props: PostEntity) {
  const openRePostModal = useOpenRePostModal();

  const handleButtonClick = () => {
    openRePostModal({
      postId: props.id,
      content: props.content,
      imageUrls: props.image_urls,
    });
  };

  return (
    <div
      className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-xl border-1 p-2 px-4 text-sm"
      onClick={handleButtonClick}
    >
      <Repeat2Icon className="h-4 w-4" />
      {props.repost_count > 0 ? (
        <span>{props.repost_count}</span>
      ) : (
        <span>리포스트</span>
      )}
    </div>
  );
}
