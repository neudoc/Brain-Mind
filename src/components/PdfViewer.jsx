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
        className="absolute inset-0 bg-[#1d2939]/35 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full lg:w-[72%] xl:w-[58%] h-screen bg-white border-l border-[#d9e0e7] shadow-2xl flex flex-col z-10 animate-slide-in">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d9e0e7] bg-[#f7f8fa]">
          <div className="flex items-center gap-3 min-w-0 flex-1 pr-4">
            <div className="p-2 bg-[#e8f1f6] text-[#2b5c7e] rounded-lg shrink-0 border border-[#c9dbe8]">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="text-xs font-bold text-[#667085] uppercase tracking-widest">
                PDF 인라인 뷰어
              </h4>
              <p className="text-xs font-bold text-[#1d2939] truncate" title={pdfTitle}>
                {pdfTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white hover:bg-[#f2f4f7] text-[#667085] hover:text-[#1d2939] border border-[#d0d5dd] transition-all active:scale-95"
              title="새 창에서 원본 보기"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={pdfUrl}
              download
              className="p-2.5 rounded-lg bg-[#2b5c7e] hover:bg-[#214965] text-white transition-all flex items-center justify-center active:scale-95"
              title="PDF 파일 다운로드"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-lg bg-white hover:bg-red-50 hover:text-red-600 border border-[#d0d5dd] text-[#667085] transition-all active:scale-95 ml-2"
              title="닫기 (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#eef2f5] p-3 sm:p-4 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            width="100%"
            height="100%"
            className="border-0 rounded-xl bg-white shadow-[0_12px_36px_rgba(29,41,57,0.16)]"
            title={pdfTitle}
          />
        </div>
      </div>
    </div>
  );
}
