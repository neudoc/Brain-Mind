import { Search, X } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full min-w-0 md:min-w-[22rem] xl:min-w-[26rem] relative group">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 group-focus-within:text-[#10b981] transition-colors" />
        <input
          aria-label="아카이브 검색"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="제목, 저자, 소속, 키워드 검색"
          className="w-full bg-[#0d1426] text-white text-xs pl-11 pr-10 py-3 rounded-lg border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.16)] focus:border-[#14b8a6] focus:outline-none focus:ring-1 focus:ring-[#14b8a6] placeholder-slate-500 font-medium transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.28)]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="p-1 rounded-full hover:bg-[rgba(255,255,255,0.08)] absolute right-3 text-slate-400 hover:text-white transition-colors"
            aria-label="검색어 지우기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
