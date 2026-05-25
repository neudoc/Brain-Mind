import SearchBar from "./SearchBar";
import { Info, RotateCcw, ShieldCheck } from "lucide-react";

export default function Header({
  searchQuery,
  setSearchQuery,
  totalResultsCount,
  activeFilterCount,
  onClearFilters
}) {
  return (
    <header className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5 mb-6 select-none">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[0.625rem] font-bold tracking-widest text-[#5eead4] bg-[rgba(20,184,166,0.10)] border border-[rgba(20,184,166,0.22)] px-2 py-0.5 rounded-md">
            MD FORUM
          </span>
          <div className="flex items-center gap-1 text-[0.68rem] text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
            일반의를 위한 실전 가이드
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
          퇴행성 신경뇌질환 학술 아카이브
        </h2>
        <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-500" />
          바쁜 임상 진료 현장에서 즉시 활용할 수 있도록 정제된 3줄 핵심 임상 팁을 제공합니다.
        </p>
      </div>

      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="bg-[#0d1426] border border-[rgba(255,255,255,0.08)] px-4 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[100px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.28)]">
          <span className="text-[0.68rem] text-slate-500 font-bold uppercase tracking-wider">검색결과</span>
          <span className="text-xs text-[#34d399] font-bold glow-text">
            {totalResultsCount}건
          </span>
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0d1426] px-3 py-3 text-[0.72rem] font-bold text-slate-300 hover:border-[#14b8a6]/40 hover:text-white"
          >
            <RotateCcw className="h-4 w-4 text-[#5eead4]" />
            초기화
          </button>
        )}
      </div>
    </header>
  );
}
