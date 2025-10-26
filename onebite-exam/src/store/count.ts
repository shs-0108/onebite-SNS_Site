import { create } from "zustand"; // state, action 함수를 포함하는 객체인 store를 생성
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

/* type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increase: () => {
      // const count = get().count;
      // set({ count: count + 1 });

      set((store) => ({
        count: store.count + 1,
      }));
    },
    decrease: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
})); */

// zustand 미들웨어 순서도 중요하니 되도록이면 이순서로 사용 할 것
// combine : Store의 타입을 자동 추론, 타입 정의를 할 필요가 없음
// immer : Store 내부의 상태 업데이트를 보다 편리하게 바꿈
// subscribeWithSelector : Store 내의 특정 값 변화시, 이벤트 핸들러 호출
// persist : Store를 로컬, 세션 스토리지 등에 보관함
// devtools : Store의 값을 개발자 도구에서 확인할 수 있음
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                // const count = get().count;
                // set({ count: count + 1 });

                //   set((state) => ({
                //     count: state.count + 1,
                //   }));

                set((state) => {
                  state.count += 1; // immer를 사용해서 직관적으로 함수 사용 가능
                });
              },
              decrease: () => {
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
          storage: createJSONStorage(() => sessionStorage),
        }),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner
    console.log(count, prevCount);

    // const store = useCountStore.getState(); 값을 가져와서 저장
    // useCountStore.setState((store)=>({})) 특정 함수를 또 호출할 수 있음
  },
);

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
