import { Search, X } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full min-w-0 md:min-w-[22rem] xl:min-w-[26rem] relative group">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-[#98a2b3] absolute left-4 group-focus-within:text-[#2b5c7e] transition-colors" />
        <input
          aria-label="아카이브 검색"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="제목, 저자, 소속, 키워드 검색"
          className="w-full bg-white text-[#1d2939] text-xs pl-11 pr-10 py-3 rounded-lg border border-[#d9e0e7] group-hover:border-[#adc3d4] focus:border-[#2b5c7e] focus:outline-none focus:ring-1 focus:ring-[#2b5c7e] placeholder-[#98a2b3] font-medium transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="p-1 rounded-full hover:bg-[#f2f4f7] absolute right-3 text-[#667085] hover:text-[#1d2939] transition-colors"
            aria-label="검색어 지우기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
