import { signInWithPassword } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

/* callbacks 함수 이용 */
export function useSignInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);

      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
