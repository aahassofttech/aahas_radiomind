import {
  HiOutlineArrowsPointingOut,
  HiOutlineCog6Tooth,
  HiOutlineDocumentText,
  HiOutlineCloudArrowUp,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import Container from "@/components/ui/Container";
import Image from "next/image";

const capabilities = [
  { icon: HiOutlineArrowsPointingOut, text: "Multi-plane zoom & navigation: Axial, sagittal, and coronal views with smooth pan and zoom" },
  { icon: HiOutlineCog6Tooth, text: "Best viewing & contrast: Hardware-accelerated rendering for any DICOM viewer, on any device" },
  { icon: HiOutlineDocumentText, text: "Measurements & annotations: Arrows, ROI, Hounsfield values, and length, angle, and area readouts" },
  { icon: HiOutlineCloudArrowUp, text: "Cloud-based remote access: Read from anywhere on any browser, with no installation required" },
  { icon: HiOutlineSquares2X2, text: "AI overlay & heatmaps: Toggle AI lesion boxes, possibility heatmaps, and segmentation masks" },
];

export default function ViewerHighlight() {
  return (
    <section className="py-10 sm:py-10">
      <Container>
        <div className="grid items-center gap-12 rounded-3xl bg-ink p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-ink shadow-xl shadow-blue-900/10">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/heart-ct-scan.webp"
                  alt="AI-enhanced brain MRI scan visualization"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/40" />

              <div className="absolute inset-0">
                <span className="absolute left-5 top-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                  T1 AXIAL
                </span>

                <span className="absolute left-5 bottom-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                  256 x 256
                </span>

                <span className="absolute right-5 top-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                  AI: ANALYZING
                </span>

                <span className="absolute right-5 bottom-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                  98.2%
                </span>

                <div className="absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-400/10 blur-[1px] animate-pulse" />

                <div className="absolute left-1/2 top-1/2 h-1 w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80 animate-[scan_4s_linear_infinite]" />

                <div className="absolute left-[42%] top-[38%] h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)] animate-pulse" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              An <span className="text-primary-light">AI-enabled DICOM viewer</span> that layers onto your PACS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              No rip-and-replace, no migration headaches. Radiomind connects directly
              to the PACS your team already uses — across vendors, on any operating system.
            </p>
            <ul className="mt-7 space-y-4">
              {capabilities.map(({ icon: Icon, text }) => {
                const [title, desc] = text.split(":");
                return (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary-light">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-slate-200">
                      <span className="font-semibold text-white">{title}:</span>
                      {desc}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
