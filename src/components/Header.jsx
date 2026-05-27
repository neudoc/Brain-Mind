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
    <header className="w-full flex flex-col justify-between gap-4 border-b border-[#d9e0e7] pb-5 mb-6 select-none">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[0.625rem] font-bold tracking-widest text-[#2b5c7e] bg-[#e8f1f6] border border-[#c9dbe8] px-2 py-0.5 rounded-md">
            MD FORUM
          </span>
          <div className="flex items-center gap-1 text-[0.68rem] text-[#667085] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#597c74]" />
            일반의를 위한 실전 가이드
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d2939]">
          퇴행성 신경뇌질환 학술 아카이브
        </h2>
        <p className="text-xs text-[#667085] font-medium flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#98a2b3]" />
          바쁜 임상 진료 현장에서 필요한 원고별 PDF와 핵심 주제를 빠르게 찾을 수 있습니다.
        </p>
      </div>

      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="bg-white border border-[#d9e0e7] px-4 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[8rem] shadow-sm whitespace-nowrap">
          <span className="text-[0.68rem] text-[#667085] font-bold tracking-wider">검색결과</span>
          <span className="text-xs text-[#2b5c7e] font-bold whitespace-nowrap">
            {totalResultsCount}건
          </span>
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d0d5dd] bg-white px-3 py-3 text-[0.72rem] font-bold text-[#475467] hover:border-[#2b5c7e] hover:text-[#1d2939]"
          >
            <RotateCcw className="h-4 w-4 text-[#2b5c7e]" />
            초기화
          </button>
        )}
      </div>
    </header>
  );
}
