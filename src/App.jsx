import { useMemo, useState } from "react";
import { articles } from "./data/articles";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import PdfViewer from "./components/PdfViewer";
import { Brain, GraduationCap, Menu, Newspaper, RotateCcw, Sparkles } from "lucide-react";

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState(9);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [viewerState, setViewerState] = useState({
    url: "",
    title: "",
    isOpen: false
  });

  const { availableCategories, availableTags, categoryCounts } = useMemo(() => {
    const issueArticles = articles.filter((art) => art.issueNum === selectedIssue);
    
    const cats = [...new Set(issueArticles.map((art) => art.category))];
    const counts = issueArticles.reduce((acc, art) => {
      acc[art.category] = (acc[art.category] || 0) + 1;
      return acc;
    }, {});
    
    const tagsSet = new Set();
    issueArticles.forEach((art) => {
      art.tags.forEach((tag) => tagsSet.add(tag));
    });
    
    return {
      availableCategories: cats,
      availableTags: Array.from(tagsSet),
      categoryCounts: counts
    };
  }, [selectedIssue]);

  const handleIssueChange = (issueNum) => {
    setSelectedIssue(issueNum);
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchQuery("");
    setIsSidebarOpen(false);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchQuery("");
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (art.issueNum !== selectedIssue) return false;

      if (selectedCategories.length > 0 && !selectedCategories.includes(art.category)) {
        return false;
      }

      if (selectedTags.length > 0 && !art.tags.some((t) => selectedTags.includes(t))) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = art.title.toLowerCase().includes(query);
        const inAuthor = art.author.toLowerCase().includes(query);
        const inInstitution = art.institution?.toLowerCase().includes(query) || false;
        const inSummary = art.summary.toLowerCase().includes(query);
        const inTags = art.tags.some((t) => t.toLowerCase().includes(query));
        
        if (!inTitle && !inAuthor && !inInstitution && !inSummary && !inTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedIssue, selectedCategories, selectedTags, searchQuery]);

  const handleViewPdf = (pdfPath, title) => {
    setViewerState({
      url: pdfPath,
      title: title,
      isOpen: true
    });
  };

  const activeFilterCount =
    selectedCategories.length + selectedTags.length + (searchQuery.trim() ? 1 : 0);

  const issueArticles = useMemo(
    () => articles.filter((art) => art.issueNum === selectedIssue),
    [selectedIssue]
  );

  const totalPages = useMemo(
    () => issueArticles.reduce((sum, article) => sum + article.pages, 0),
    [issueArticles]
  );

  const heroHighlight = useMemo(() => {
    if (selectedIssue === 9) {
      return {
        coverImage: publicAsset("/B&M 9호표지.png"),
        title: "Brain & Mind 9호 발간",
        subtitle: "2025 Vol.3 No.1",
        description: "알츠하이머병 치료의 거대한 패러다임 신약 '레카네맙(레캄비)' 국내 본격 도입에 맞춘 개원가 필수 임상 가이드 및 ARIA 부작용 안전 대책 총망라 특집호",
        badge: "최신호 발간",
        themeColor: "from-[#14b8a6]/18 via-[#0f172a]/80 to-[#0b1020]/80 border-[#14b8a6]/25",
        pillColor: "bg-[rgba(16,185,129,0.12)] text-[#34d399] border-[#10b981]/20",
        accent: "레카네맙 임상 처방 특집"
      };
    } else {
      return {
        coverImage: publicAsset("/B&M 8호표지.png"),
        title: "Brain & Mind 8호 발간",
        subtitle: "2024 Vol.2 No.4",
        description: "임상 현장에서 결코 간과해서는 안 될 '주관적 인지 저하(SCD)' 환자의 선제적 감별 노하우 및 실신·어지럼 유발 부정맥 감별을 위한 12유도 심전도 판독 특집호",
        badge: "이전호 아카이브",
        themeColor: "from-[#a78bfa]/16 via-[#0f172a]/80 to-[#0b1020]/80 border-[#a78bfa]/25",
        pillColor: "bg-[rgba(139,92,246,0.12)] text-[#a78bfa] border-[#8b5cf6]/20",
        accent: "주관적 인지저하(SCD) 및 실신 심전도 판독 특집"
      };
    }
  }, [selectedIssue]);

  return (
    <div className="min-h-screen flex text-slate-100 font-sans relative overflow-hidden">
      <div className="app-subtle-grid fixed inset-0 pointer-events-none opacity-70" />

      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-20 bg-black/55 backdrop-blur-sm lg:hidden"
          aria-label="필터 메뉴 닫기"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedIssue={selectedIssue}
        setSelectedIssue={handleIssueChange}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        availableCategories={availableCategories}
        availableTags={availableTags}
        categoryCounts={categoryCounts}
      />

      <main className="app-main flex-1 min-h-screen px-4 sm:px-6 lg:px-10 xl:px-12 py-5 lg:py-8 flex flex-col relative z-10">
        <button
          type="button"
          className="mobile-filter-trigger mb-4 inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-[#0d1426] px-3 py-2 text-xs font-bold text-slate-200 shadow-sm"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-4 w-4 text-[#5eead4]" />
          필터 열기
          {activeFilterCount > 0 && (
            <span className="rounded-md bg-[#14b8a6] px-1.5 py-0.5 text-[0.65rem] text-[#03110f]">
              {activeFilterCount}
            </span>
          )}
        </button>

        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalResultsCount={filteredArticles.length}
          activeFilterCount={activeFilterCount}
          onClearFilters={resetFilters}
        />

        <section className={`w-full glass-card bg-gradient-to-r ${heroHighlight.themeColor} border p-5 sm:p-6 lg:p-7 flex flex-col md:flex-row items-start md:items-center gap-6 mb-7 overflow-hidden relative group select-none animate-fade-in`}>
          <div className="w-28 sm:w-32 md:w-40 shrink-0 rounded-lg overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.42)] border border-[rgba(255,255,255,0.10)] transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src={heroHighlight.coverImage}
              alt={heroHighlight.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <div class="w-full aspect-[3/4] bg-gradient-to-br from-[#0c1224] to-[#162244] flex flex-col items-center justify-center p-4 text-center border-l-4 border-[#10b981]">
                    <div class="p-2.5 bg-[rgba(16,185,129,0.08)] rounded-full mb-3 text-[#10b981]">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <span class="text-[0.62rem] font-bold text-[#34d399] tracking-widest uppercase block mb-1">BRAIN & MIND</span>
                    <span class="text-xs font-bold text-white">${heroHighlight.subtitle}</span>
                  </div>
                `;
              }}
            />
          </div>

          <div className="flex-1 flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className={`text-[0.65rem] font-extrabold px-3 py-1 rounded-md border ${heroHighlight.pillColor} tracking-wider`}>
                {heroHighlight.badge}
              </span>
              <span className="text-[0.7rem] font-bold text-[#34d399] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
                {heroHighlight.accent}
              </span>
            </div>
            
            <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {heroHighlight.title}
            </h3>
            
            <p className="text-[0.825rem] text-slate-300 leading-relaxed max-w-2xl font-normal">
              {heroHighlight.description}
            </p>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-5 mt-1 border-t border-[rgba(255,255,255,0.08)] pt-4 text-[0.725rem] text-slate-400 font-semibold">
              <span className="flex items-center gap-2 rounded-lg bg-black/15 px-3 py-2">
                <Newspaper className="w-4 h-4 text-[#5eead4]" />
                {issueArticles.length}개 원고
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-black/15 px-3 py-2">
                <Brain className="w-4 h-4 text-[#38bdf8]" />
                {availableTags.length}개 태그
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-black/15 px-3 py-2">
                <GraduationCap className="w-4 h-4 text-[#a78bfa]" />
                총 {totalPages}p
              </span>
              <span className="flex items-center gap-2">
                발행인: 유경숙 (메디칼허브)
              </span>
            </div>
          </div>
        </section>

        {activeFilterCount > 0 && (
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[0.72rem] text-slate-300">
            <span className="font-bold text-slate-400">적용된 필터</span>
            {searchQuery.trim() && (
              <span className="rounded-md border border-[#38bdf8]/25 bg-[#38bdf8]/10 px-2.5 py-1 text-[#7dd3fc]">
                검색: {searchQuery.trim()}
              </span>
            )}
            {selectedCategories.map((category) => (
              <span key={category} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1">
                {category}
              </span>
            ))}
            {selectedTags.map((tag) => (
              <span key={tag} className="rounded-md border border-[#14b8a6]/20 bg-[#14b8a6]/10 px-2.5 py-1 text-[#99f6e4]">
                #{tag}
              </span>
            ))}
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#0d1426] px-2.5 py-1 font-bold text-slate-300 hover:border-[#14b8a6]/40 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              전체 초기화
            </button>
          </div>
        )}

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 pb-16">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onViewPdf={handleViewPdf}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center py-24 px-5 text-center glass-card border-[rgba(255,255,255,0.04)] mb-16 select-none animate-fade-in">
            <div className="p-5 bg-[rgba(16,185,129,0.02)] border border-[rgba(16,185,129,0.06)] rounded-full text-slate-500 mb-4">
              <Brain className="w-12 h-12" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">
              일치하는 논문을 찾을 수 없습니다
            </h4>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              선택한 카테고리, 질환 태그 및 검색어 조합에 부합하는 자료가 없습니다. 필터를 조정하거나 다른 키워드로 검색해 보세요.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 btn-secondary px-4 py-2.5 text-xs"
            >
              <RotateCcw className="h-4 w-4" />
              필터 전체 초기화
            </button>
          </div>
        )}
      </main>

      <PdfViewer
        pdfUrl={viewerState.url}
        pdfTitle={viewerState.title}
        isOpen={viewerState.isOpen}
        onClose={() => setViewerState({ ...viewerState, isOpen: false })}
      />
    </div>
  );
}
