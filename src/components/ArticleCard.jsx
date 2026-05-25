import { Download, Eye, FileText, User, Building, Sparkles } from "lucide-react";

export default function ArticleCard({ article, onViewPdf }) {
  const {
    title,
    author,
    institution,
    category,
    pages,
    tags,
    summary,
    clinicalPearls,
    pdfPath,
    filename,
    issue
  } = article;

  // 카테고리별 CSS 클래스 및 한글 라벨 매핑
  const getCategoryMeta = (cat) => {
    const metas = {
      "Special Topic": { label: "스페셜 토픽", badgeClass: "badge-special-topic" },
      "Morning Conference Case": { label: "임상 모닝 컨퍼런스", badgeClass: "badge-morning-case" },
      "Article Review": { label: "저널 리뷰", badgeClass: "badge-article-review" },
      "Hot Issue": { label: "핫 이슈", badgeClass: "badge-hot-issue" },
      "Special Review": { label: "스페셜 리뷰", badgeClass: "badge-special-review" },
      "Doctor Plus": { label: "의사 라이프 & 컬처", badgeClass: "badge-doctor-plus" },
      "Q&A": { label: "임상 Q&A", badgeClass: "badge-qa" },
      "B-M News": { label: "최신 뇌과학 뉴스", badgeClass: "badge-news" }
    };
    return metas[cat] || { label: cat, badgeClass: "bg-slate-800 text-slate-400" };
  };

  const catMeta = getCategoryMeta(category);

  return (
    <article className="glass-card flex flex-col justify-between p-5 sm:p-6 h-full border border-[rgba(255,255,255,0.05)] transition-all duration-300 relative group animate-fade-in">
      <div>
        <div className="flex items-center justify-between mb-4.5 select-none">
          <span className={`badge text-[0.65rem] font-bold ${catMeta.badgeClass}`}>
            {catMeta.label}
          </span>
          <div className="flex items-center gap-2 text-[0.68rem] text-slate-500 font-bold tracking-wide">
            <span>{issue}</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="flex items-center gap-0.5">
              <FileText className="w-3.5 h-3.5" />
              {pages}p
            </span>
          </div>
        </div>

        <h3 className="text-[0.95rem] md:text-[1.05rem] font-extrabold text-white group-hover:text-[#34d399] transition-colors duration-300 leading-snug mb-5 tracking-tight">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.7rem] text-slate-400 font-semibold mb-7 select-none">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#10b981]" />
            {author}
          </span>
          {institution && (
            <span className="flex items-center gap-1.5 text-slate-500">
              <Building className="w-3.5 h-3.5 text-slate-600" />
              {institution}
            </span>
          )}
        </div>

        <p className="text-[0.76rem] text-slate-400 leading-relaxed font-normal mb-5.5 border-l border-slate-700 pl-3.5">
          {summary}
        </p>

        <div className="pearls-box p-5 mb-6 shadow-sm border border-[rgba(16,185,129,0.08)] bg-[rgba(16,185,129,0.02)]">
          <div className="flex items-center gap-2 mb-3.5 select-none">
            <span className="w-1.5 h-3.5 bg-gradient-to-b from-[#10b981] to-[#34d399] rounded-full"></span>
            <h4 className="text-[0.725rem] font-bold text-[#34d399] tracking-wider uppercase flex items-center gap-1">
              Clinical Pearls
              <Sparkles className="w-3 h-3 text-[#34d399]" />
            </h4>
          </div>
          <ul className="flex flex-col gap-2.5">
            {clinicalPearls.map((pearl, index) => (
              <li key={index} className="flex gap-2.5 text-[0.76rem] text-slate-200 leading-relaxed font-normal">
                <span className="text-[#10b981] font-extrabold text-[0.75rem] shrink-0 mt-0.5">
                  0{index + 1}.
                </span>
                <span>{pearl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-5.5 select-none">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.625rem] font-bold text-slate-400 bg-[#070b1a] border border-[rgba(255,255,255,0.03)] px-2.5 py-1 rounded-md transition-colors hover:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5 border-t border-[rgba(255,255,255,0.04)] pt-4.5 select-none">
          <button
            type="button"
            onClick={() => onViewPdf(pdfPath, title)}
            className="flex-1 py-3 px-3 btn-secondary text-[0.725rem] flex items-center justify-center gap-2 active:scale-[0.98]"
            aria-label={`${title} PDF 미리보기`}
          >
            <Eye className="w-3.5 h-3.5" />
            PDF 미리보기
          </button>

          <a
            href={pdfPath}
            download={filename}
            className="px-4 py-3 btn-primary text-[0.725rem] flex items-center justify-center gap-2 active:scale-[0.98]"
            aria-label={`${title} PDF 다운로드`}
          >
            <Download className="w-3.5 h-3.5" />
            다운로드
          </a>
        </div>
      </div>
    </article>
  );
}
