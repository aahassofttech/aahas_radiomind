import { HiOutlineSparkles } from "react-icons/hi2";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function AiReportingTeaser() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface-blue/50 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <Badge>
              <HiOutlineSparkles className="mr-1 h-3.5 w-3.5" /> Coming Soon
            </Badge>
            <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
              AI-Powered Reporting
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
              Radiomind is building an integrated AI reporting layer that generates
              structured draft reports directly alongside imaging studies.
              Radiologists can review AI-generated impressions, accelerate reporting,
              and improve consistency — all while maintaining complete clinical
              oversight.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">
              Currently being piloted at a major hospital network in Hyderabad.
            </p>
            <Button href="/request-demo" variant="secondary" className="mt-6">
              Join the Waitlist
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
            <svg viewBox="0 0 400 240" className="h-full w-full" role="presentation" aria-hidden="true">
              <rect width="400" height="240" rx="12" fill="#f8fafc" />
              <rect x="20" y="20" width="170" height="200" rx="8" fill="#0f172a" />
              <rect x="32" y="36" width="146" height="100" rx="4" fill="#1e293b" />
              <ellipse cx="105" cy="86" rx="60" ry="44" fill="#1e3a5f" />
              <rect x="32" y="148" width="60" height="6" rx="3" fill="#334155" />
              <rect x="32" y="160" width="100" height="6" rx="3" fill="#334155" />
              <rect x="32" y="172" width="80" height="6" rx="3" fill="#334155" />
              <rect x="210" y="20" width="170" height="92" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
              <circle cx="232" cy="42" r="8" fill="#2563eb" />
              <rect x="248" y="36" width="100" height="6" rx="3" fill="#94a3b8" />
              <rect x="225" y="60" width="135" height="6" rx="3" fill="#cbd5e1" />
              <rect x="225" y="72" width="120" height="6" rx="3" fill="#cbd5e1" />
              <rect x="225" y="84" width="135" height="6" rx="3" fill="#cbd5e1" />
              <rect x="225" y="96" width="90" height="6" rx="3" fill="#cbd5e1" />
              <rect x="210" y="124" width="170" height="96" rx="8" fill="white" stroke="#2563eb" strokeWidth="1.5" />
              <text x="225" y="146" fill="#2563eb" fontFamily="system-ui" fontSize="11" fontWeight="700">AI Draft Impression</text>
              <rect x="225" y="156" width="140" height="6" rx="3" fill="#bfdbfe" />
              <rect x="225" y="168" width="120" height="6" rx="3" fill="#bfdbfe" />
              <rect x="225" y="180" width="135" height="6" rx="3" fill="#bfdbfe" />
              <rect x="225" y="196" width="70" height="18" rx="9" fill="#2563eb" />
              <text x="237" y="208" fill="white" fontFamily="system-ui" fontSize="8" fontWeight="600">Approve</text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
