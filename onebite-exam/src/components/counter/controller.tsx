import { Button } from "@/components/ui/button";
import { useDecreaseCount, useIncreaseCount } from "@/store/count";

export default function Controller() {
  // useCounterStore의 불필요한 count 함수까지 불러와서 렌더링 하게 만듦
  //   const {increase, decrease} = useCountStore();

  //   const increase = useCountStore((store) => store.increase);
  //   const decrease = useCountStore((store) => store.decrease);

  //   const { increase, decrease } = useCountStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
