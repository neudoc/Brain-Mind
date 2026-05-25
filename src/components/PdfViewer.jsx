import { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export default function PdfViewer({ pdfUrl, pdfTitle, isOpen, onClose }) {
  // ESC 키 클릭 시 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end select-none">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full lg:w-[72%] xl:w-[58%] h-screen bg-[#080d1a] border-l border-[rgba(255,255,255,0.08)] shadow-2xl flex flex-col z-10 animate-slide-in">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[#0a1122]">
          <div className="flex items-center gap-3 min-w-0 flex-1 pr-4">
            <div className="p-2 bg-[rgba(16,185,129,0.08)] text-[#10b981] rounded-lg shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                PDF 인라인 뷰어
              </h4>
              <p className="text-xs font-bold text-white truncate" title={pdfTitle}>
                {pdfTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0d1426] hover:bg-[#121c35] text-slate-400 hover:text-white border border-[rgba(255,255,255,0.04)] transition-all active:scale-95"
              title="새 창에서 원본 보기"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={pdfUrl}
              download
              className="p-2.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#060913] transition-all flex items-center justify-center active:scale-95"
              title="PDF 파일 다운로드"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-lg bg-[#0d1426] hover:bg-red-500/10 hover:text-red-400 border border-[rgba(255,255,255,0.04)] text-slate-400 transition-all active:scale-95 ml-2"
              title="닫기 (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#050811] p-3 sm:p-4 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            width="100%"
            height="100%"
            className="border-0 rounded-xl bg-[#050811] shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
            title={pdfTitle}
          />
        </div>
      </div>
    </div>
  );
}
