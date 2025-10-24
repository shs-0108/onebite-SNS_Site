import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래프 */}
      <div className="text-xs text-red-200">text-xs</div>
      <div className="text-sm text-red-500">text-sm</div>
      <div className="text-lg font-bold text-[rgb(100,200,20)]">text-lg</div>
      <div className="text-xl">text-xl</div>
      <div className="text-2xl">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2. 백그라운드컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 3. 사이즈 */}
      <div className="h-40 w-20 bg-blue-500">box</div>

      {/* 4. 여백 */}
      <div className="h-50 w-50 bg-red-200 pt-5 pb-2">
        <div className="h-full w-full bg-blue-200"></div>
      </div>

      {/* 5. 보더 */}
      <div className="m-5 rounded-lg border-x-6 border-y-2 border-t-5 border-red-900">
        border
      </div>

      {/* 6. 플렉스 컨테이너 */}
      <div className="flex flex-col items-center justify-between">
        <div className="w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>
    </div>
  );
}

export default App;
