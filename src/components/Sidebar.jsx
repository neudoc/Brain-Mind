import { Brain, Calendar, Hash, Layers, X } from "lucide-react";

export default function Sidebar({
  isOpen,
  onClose,
  selectedIssue,
  setSelectedIssue,
  selectedCategories,
  setSelectedCategories,
  selectedTags,
  setSelectedTags,
  availableCategories,
  availableTags,
  categoryCounts
}) {
  // 카테고리 토글 함수
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // 태그 토글 함수
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // 카테고리 한글 매핑 헬퍼
  const getCategoryLabel = (cat) => {
    const mapping = {
      "Special Topic": "스페셜 토픽",
      "Morning Conference Case": "임상 모닝 컨퍼런스",
      "Article Review": "저널 리뷰",
      "Hot Issue": "핫 이슈",
      "Special Review": "스페셜 리뷰",
      "Doctor Plus": "의사 라이프 & 컬처",
      "Q&A": "임상 Q&A",
      "B-M News": "최신 뇌과학 뉴스"
    };
    return mapping[cat] || cat;
  };

  return (
    <aside
      className={`w-[19.5rem] glass-panel h-screen fixed left-0 top-0 overflow-y-auto px-5 py-6 flex flex-col gap-7 z-30 select-none transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-6">
        <div className="p-2.5 bg-gradient-to-tr from-[#14b8a6] to-[#38bdf8] rounded-lg shadow-[0_0_15px_rgba(20,184,166,0.22)] flex items-center justify-center">
          <Brain className="w-6 h-6 text-[#060913]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
            Brain & Mind
          </h1>
          <span className="text-[0.68rem] tracking-widest text-[#34d399] uppercase font-semibold">
            Journal Archive
          </span>
        </div>
        <button
          type="button"
          className="ml-auto rounded-lg border border-white/10 bg-white/[0.03] p-2 text-slate-400 hover:text-white lg:hidden"
          aria-label="필터 메뉴 닫기"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
          저널 호수 선택 (Issue)
        </h3>
        <div className="grid grid-cols-2 gap-2 bg-[#060913] p-1 rounded-xl border border-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setSelectedIssue(9)}
            className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              selectedIssue === 9
                ? "bg-[#14b8a6] text-[#03110f] shadow-[0_0_10px_rgba(20,184,166,0.22)]"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            B&M 9호 <span className="block text-[0.6rem] opacity-80">(최신호)</span>
          </button>
          <button
            onClick={() => setSelectedIssue(8)}
            className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              selectedIssue === 8
                ? "bg-[#14b8a6] text-[#03110f] shadow-[0_0_10px_rgba(20,184,166,0.22)]"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            B&M 8호 <span className="block text-[0.6rem] opacity-80">(이전호)</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#10b981]" />
            카테고리 필터
          </h3>
          {selectedCategories.length > 0 && (
            <button
              onClick={() => setSelectedCategories([])}
              className="text-[0.65rem] text-[#34d399] hover:underline"
            >
              초기화
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
          {availableCategories.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <label
                key={category}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-xs cursor-pointer transition-all select-none ${
                  isChecked
                    ? "bg-[rgba(16,185,129,0.06)] border-[#10b981] text-[#34d399]"
                    : "bg-[#0c1224] border-[rgba(255,255,255,0.03)] text-slate-400 hover:text-white hover:border-[rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCategoryToggle(category)}
                    className="sr-only"
                  />
                  <div
                    className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                      isChecked
                        ? "bg-[#10b981] border-[#10b981] text-[#060913]"
                        : "border-slate-600 bg-transparent"
                    }`}
                  >
                    {isChecked && (
                      <svg
                        className="w-2.5 h-2.5 fill-current stroke-2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium">{getCategoryLabel(category)}</span>
                </div>
                <span className="text-[0.65rem] text-slate-500">{categoryCounts[category] || 0}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
            <Hash className="w-3.5 h-3.5 text-[#10b981]" />
            질환 및 주제 태그
          </h3>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="text-[0.65rem] text-[#34d399] hover:underline"
            >
              초기화
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-64 overflow-y-auto pr-1">
          {availableTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`text-[0.68rem] px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                  isSelected
                    ? "bg-[#10b981] text-[#060913] border-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.25)]"
                    : "bg-[#0c1224] border-[rgba(255,255,255,0.03)] text-slate-400 hover:text-white hover:border-[rgba(255,255,255,0.08)]"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mt-auto border-t border-[rgba(255,255,255,0.08)] pt-4 text-center">
        <span className="text-[0.6rem] text-slate-500 block">
          편집위원장 김상윤 [분당서울대병원]
        </span>
        <span className="text-[0.6rem] text-slate-600 block mt-1">
          발행처 메디칼허브 • ISSN 2982-6829
        </span>
      </div>
    </aside>
  );
}
