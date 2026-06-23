import { BlogPost } from "@/types/blog";

export const seedPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-radiology-reporting-2026",
    title: "How AI-Assisted Reporting Is Changing Radiology in 2026",
    excerpt:
      "AI-assisted reporting tools are moving from pilot programs into daily clinical workflows. Here's what's actually changing for radiologists.",
    content: `Radiology departments have spent the last few years experimenting with AI. In 2026, the experiments are over — AI-assisted reporting is becoming a standard part of the reading workflow at hospitals and diagnostic centres of every size.

The shift isn't about replacing radiologists. It's about removing the repetitive parts of the job: pre-screening normal studies, drafting structured findings, and flagging priority cases before a human ever opens the viewer. Radiologists who have adopted these tools describe the change less as "AI reading my scans" and more as "AI doing my paperwork."

What's driving adoption now, more than in previous years, is integration. Earlier AI tools lived outside the PACS, forcing radiologists to switch between systems. Today's tools layer directly onto existing PACS infrastructure, surfacing AI-generated draft reports inside the same viewer radiologists already use.

The result is measurable: departments report meaningful reductions in reporting time and improvements in consistency across readers, especially during high-volume shifts when fatigue-related misses are most likely.

None of this removes the radiologist from the loop. Every AI-generated finding still requires sign-off. What changes is where a radiologist spends their attention — less time on boilerplate, more time on the studies that actually need a trained eye.`,
    featuredImage: "/images/blog/ai-reporting.svg",
    category: "AI in Radiology",
    tags: ["AI reporting", "workflow", "radiology trends"],
    author: { name: "Dr. Anika Rao", role: "Clinical Lead", avatar: "/images/team/team-1.svg" },
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-12",
    status: "published",
    seo: {
      metaTitle: "How AI-Assisted Reporting Is Changing Radiology in 2026 | Radiomind",
      metaDescription:
        "A look at how AI-assisted reporting tools are moving into daily radiology workflows in 2026 and what it means for radiologists.",
      keywords: ["AI radiology", "AI reporting", "radiology workflow"],
    },
  },
  {
    id: "2",
    slug: "pacs-integration-without-rip-and-replace",
    title: "PACS Integration Without the Rip-and-Replace",
    excerpt:
      "Hospitals don't want to replace their PACS to get AI. Here's how modern imaging AI layers onto existing infrastructure instead.",
    content: `Every radiology IT lead has heard the same pitch: "replace your PACS and unlock AI." It's an expensive, disruptive promise, and most hospitals quietly ignore it.

The more practical path is integration, not replacement. Modern AI platforms connect to existing PACS via standard DICOM protocols, remote study loading, and contact-driven hooks — meaning radiologists keep their existing viewer, hotkeys, and habits while AI runs quietly in the background.

This matters because workflow disruption is the real cost of new technology, not licensing fees. A radiologist who has to relearn a viewer loses more time in the first month than any AI tool saves them in a year.

A layered approach also reduces risk for IT teams. Instead of a single high-stakes migration, integration can be rolled out service-line by service-line — starting with chest CT or MR brain studies, then expanding as confidence builds.

For most departments, the right question isn't "should we replace our PACS for AI" — it's "which AI layers onto what we already have."`,
    featuredImage: "/images/blog/pacs-integration.svg",
    category: "PACS & Integration",
    tags: ["PACS", "DICOM", "IT infrastructure"],
    author: { name: "Vikram Shah", role: "Solutions Architect", avatar: "/images/team/team-2.svg" },
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    status: "published",
    seo: {
      metaTitle: "PACS Integration Without the Rip-and-Replace | Radiomind",
      metaDescription:
        "Learn how modern radiology AI integrates with existing PACS infrastructure without disruptive system replacement.",
      keywords: ["PACS integration", "DICOM", "radiology IT"],
    },
  },
  {
    id: "3",
    slug: "reducing-radiologist-burnout-with-automation",
    title: "Reducing Radiologist Burnout With Workflow Automation",
    excerpt:
      "Burnout in radiology is a workload problem before it's anything else. Automation that targets the right tasks can meaningfully help.",
    content: `Radiologist burnout has been studied for years, and the conclusion is consistent: the leading driver isn't the difficulty of the work, it's the volume. Reading lists keep growing while staffing stays flat.

Workflow automation won't fix staffing shortages, but it can remove tasks that don't require a radiologist's judgment. Auto-population of structured report templates, automatic measurement extraction, and pre-sorted worklists that prioritize urgent studies all reduce the number of decisions a radiologist has to make manually before they get to actual diagnostic reasoning.

Departments that have introduced this kind of automation report a different kind of workday — fewer context switches, less time spent on transcription-style tasks, and more predictable turnaround times even during volume spikes.

The lesson for any department considering automation: start with the tasks that take time but require no clinical judgment. That's where the highest-leverage gains are, and it's also where radiologists are most willing to trust the tool.`,
    featuredImage: "/images/blog/burnout-automation.svg",
    category: "Clinical Workflow",
    tags: ["burnout", "workflow automation", "radiologist wellbeing"],
    author: { name: "Dr. Anika Rao", role: "Clinical Lead", avatar: "/images/team/team-1.svg" },
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    status: "published",
    seo: {
      metaTitle: "Reducing Radiologist Burnout With Workflow Automation | Radiomind",
      metaDescription:
        "How targeted workflow automation reduces radiologist burnout by removing low-judgment tasks from the reading workflow.",
      keywords: ["radiologist burnout", "workflow automation", "radiology staffing"],
    },
  },
  {
    id: "4",
    slug: "measuring-diagnostic-accuracy-gains-from-ai",
    title: "How to Actually Measure Diagnostic Accuracy Gains From AI",
    excerpt:
      "Vendors love to cite accuracy percentages. Here's how departments should validate those numbers against their own data.",
    content: `Every imaging AI vendor publishes an accuracy statistic. Almost none of those statistics tell a department what will happen in their own reading room, with their own case mix, on their own equipment.

The gap between a published benchmark and real-world performance comes down to dataset composition. A model validated mostly on one scanner manufacturer, one population, or one disease prevalence will behave differently when deployed somewhere else.

The right way to evaluate an AI tool isn't to trust the headline number — it's to run a retrospective validation on a sample of your own historical studies before going live, and a prospective shadow period once it's deployed, where the AI's findings are logged but not acted on, and compared against radiologist sign-off.

This isn't extra bureaucracy. It's the same standard departments already apply to any new diagnostic test before trusting it clinically. AI shouldn't get a pass on validation just because it's software.

Done properly, this process also builds radiologist trust — which matters more for adoption than any accuracy number on a slide deck.`,
    featuredImage: "/images/blog/diagnostic-accuracy.svg",
    category: "Industry Insights",
    tags: ["validation", "diagnostic accuracy", "AI evaluation"],
    author: { name: "Vikram Shah", role: "Solutions Architect", avatar: "/images/team/team-2.svg" },
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    status: "published",
    seo: {
      metaTitle: "How to Measure Diagnostic Accuracy Gains From AI | Radiomind",
      metaDescription:
        "A practical guide to validating radiology AI accuracy claims against your own department's data before and after deployment.",
      keywords: ["diagnostic accuracy", "AI validation", "radiology AI evaluation"],
    },
  },
  {
    id: "5",
    slug: "teleradiology-and-centralized-reporting-trends",
    title: "Teleradiology Is Quietly Becoming the Default, Not the Backup",
    excerpt:
      "Teleradiology used to mean after-hours coverage. Now it's becoming the primary reporting model for a growing number of networks.",
    content: `For most of its history, teleradiology filled gaps — night coverage, holiday staffing, rural hospitals without an on-site radiologist. It was the backup plan.

That's changing. Hospital networks managing multiple sites are increasingly centralizing reporting through teleradiology hubs by default, not just during off-hours. The driver is straightforward: a centralized radiologist pool can be load-balanced across facilities in a way that site-by-site staffing never could.

What makes this practical now is cloud-native imaging infrastructure. Studies can be securely accessed from anywhere, with the same viewer, the same AI tools, and the same reporting templates a radiologist would use on-site — removing the friction that used to make remote reporting feel like a downgrade.

For hospital networks, this means staffing decisions can be made at the network level instead of the facility level, smoothing out the coverage gaps that have historically hurt smaller sites the most.

The "backup" framing of teleradiology is becoming outdated. For a growing share of studies, remote is simply where reporting happens.`,
    featuredImage: "/images/blog/teleradiology.svg",
    category: "Industry Insights",
    tags: ["teleradiology", "hospital networks", "remote reporting"],
    author: { name: "Dr. Anika Rao", role: "Clinical Lead", avatar: "/images/team/team-1.svg" },
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    status: "published",
    seo: {
      metaTitle: "Teleradiology Is Becoming the Default Reporting Model | Radiomind",
      metaDescription:
        "Why teleradiology is shifting from an after-hours backup to the primary reporting model for multi-site hospital networks.",
      keywords: ["teleradiology", "centralized reporting", "hospital networks"],
    },
  },
  {
    id: "6",
    slug: "multi-planar-reconstruction-explained",
    title: "Multi-Planar Reconstruction, Explained for Non-Radiologists",
    excerpt:
      "MPR is one of the most-used tools in modern imaging review. Here's a plain-language explanation of how it works and why it matters.",
    content: `Multi-planar reconstruction, or MPR, lets a radiologist take a 3D imaging dataset — typically from a CT or MRI — and view it from any angle, not just the plane it was originally acquired in.

Before MPR became standard, radiologists worked mostly with the axial slices a scanner produced directly. Anything outside that plane required mental reconstruction — picturing how a finding on one slice connected to the slices around it.

MPR removes that mental step. With synchronized views across axial, sagittal, and coronal planes, a radiologist can scroll through one plane and watch a crosshair move through the others in real time, making it far easier to confirm whether something is a true finding or an artifact of how a single slice happened to be cut.

This matters clinically in cases like vertebral fractures, vascular anomalies, or subtle masses near anatomical boundaries — situations where a single 2D slice can be genuinely ambiguous, but the same structure is obvious once viewed from another plane.

For non-radiologists, the simplest way to think about MPR: it's the difference between describing a building from one photo versus walking around it.`,
    featuredImage: "/images/blog/mpr-explained.svg",
    category: "Clinical Workflow",
    tags: ["MPR", "imaging fundamentals", "CT", "MRI"],
    author: { name: "Dr. Sana Iyer", role: "Radiology Consultant", avatar: "/images/team/team-3.svg" },
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-18",
    status: "published",
    seo: {
      metaTitle: "Multi-Planar Reconstruction (MPR) Explained | Radiomind",
      metaDescription:
        "A plain-language explanation of multi-planar reconstruction (MPR) in CT and MRI imaging review, and why it matters clinically.",
      keywords: ["multi-planar reconstruction", "MPR", "CT imaging", "MRI imaging"],
    },
  },
  {
    id: "7",
    slug: "what-changed-in-our-q1-2026-release",
    title: "What's New in Radiomind: Q1 2026 Release Notes",
    excerpt:
      "A summary of the features, performance improvements, and workflow updates shipped to Radiomind in the first quarter of 2026.",
    content: `The first quarter of 2026 was focused on workflow speed and reporting depth. Here's a summary of what shipped.

Viewer performance: Browser-based 3D rendering received a significant performance pass, with noticeably faster load times for large CT series on standard hospital network connections.

Structured reporting: The structured report editor now supports curved planar reformation (CPR) views directly inside the report builder, making it easier to document vascular findings without switching tools.

Worklist improvements: Priority sorting now accounts for AI-flagged findings alongside traditional STAT ordering, so studies with high-confidence critical findings surface earlier in a radiologist's queue automatically.

Export and interoperability: CSV export for quantitative measurements and JSON export for DICOM metadata are now available directly from the study view, simplifying downstream reporting and research workflows.

As always, every change in this release was shaped by direct feedback from radiologists using Radiomind day to day. If there's something you'd like to see next, our team is listening.`,
    featuredImage: "/images/blog/release-notes-q1.svg",
    category: "Product Updates",
    tags: ["release notes", "product update", "Radiomind"],
    author: { name: "Vikram Shah", role: "Solutions Architect", avatar: "/images/team/team-2.svg" },
    publishedAt: "2026-01-30",
    updatedAt: "2026-01-30",
    status: "published",
    seo: {
      metaTitle: "Radiomind Q1 2026 Release Notes",
      metaDescription:
        "See what shipped in Radiomind's Q1 2026 release, including viewer performance, structured reporting, and worklist improvements.",
      keywords: ["Radiomind release notes", "product updates", "imaging viewer updates"],
    },
  },
  {
    id: "8",
    slug: "choosing-the-right-imaging-ai-vendor",
    title: "A Practical Checklist for Choosing an Imaging AI Vendor",
    excerpt:
      "Beyond accuracy claims, here are the operational questions that actually predict whether an AI deployment will succeed.",
    content: `Most evaluations of imaging AI vendors start and end with accuracy statistics. That's a mistake. Accuracy is necessary but rarely the reason a deployment fails.

The questions that actually predict success are operational. How does the tool integrate with your existing PACS — does it require new hardware, or does it run on infrastructure you already have? What's the actual turnaround time from study upload to AI result, under realistic network conditions, not lab conditions?

Support model matters as much as the software. When a finding looks wrong, who do radiologists call, and how fast do they get an answer? Departments that skip this question often find themselves stuck with a tool nobody trusts because nobody can get a straight answer about why it behaved unexpectedly.

Scalability is another underrated factor. A platform that performs well at 100 studies a day may behave very differently at 10,000. Ask vendors directly how their architecture scales, and ask for evidence, not assurances.

Finally, consider the migration path if it doesn't work out. Is your data portable? Can you export your structured reports and measurements in standard formats? A vendor confident in their product won't be defensive about this question.`,
    featuredImage: "/images/blog/vendor-checklist.svg",
    category: "Industry Insights",
    tags: ["vendor evaluation", "procurement", "imaging AI"],
    author: { name: "Dr. Sana Iyer", role: "Radiology Consultant", avatar: "/images/team/team-3.svg" },
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",
    status: "published",
    seo: {
      metaTitle: "A Practical Checklist for Choosing an Imaging AI Vendor | Radiomind",
      metaDescription:
        "Operational questions that predict whether a radiology AI deployment will succeed, beyond vendor accuracy claims.",
      keywords: ["imaging AI vendor", "procurement checklist", "radiology AI evaluation"],
    },
  },
  {
    id: "9",
    slug: "dicom-metadata-why-it-matters",
    title: "DICOM Metadata: The Unglamorous Data That Powers Good Reporting",
    excerpt:
      "Metadata rarely gets attention, but inconsistent DICOM metadata is one of the most common causes of workflow friction.",
    content: `DICOM metadata doesn't get much attention in conversations about radiology technology, but inconsistent metadata is one of the most common sources of friction in day-to-day workflows.

Patient demographics, study descriptions, modality tags, and acquisition parameters all travel with the image data, and most downstream systems — worklists, reporting tools, billing systems — depend on that metadata being accurate and consistently formatted.

In practice, metadata quality varies widely across scanner manufacturers, software versions, and manual entry habits at the technologist level. A mismatched study description can cause a study to land in the wrong worklist queue. Inconsistent patient ID formatting can cause duplicate records across systems.

Modern imaging platforms increasingly include metadata inspection and normalization tools as a standard feature — not because metadata is exciting, but because cleaning it up prevents a long list of downstream problems before they happen.

It's not a glamorous part of imaging technology, but departments that invest in metadata hygiene tend to have noticeably fewer workflow support tickets than those that don't.`,
    featuredImage: "/images/blog/dicom-metadata.svg",
    category: "PACS & Integration",
    tags: ["DICOM", "metadata", "data quality"],
    author: { name: "Vikram Shah", role: "Solutions Architect", avatar: "/images/team/team-2.svg" },
    publishedAt: "2025-12-15",
    updatedAt: "2025-12-15",
    status: "published",
    seo: {
      metaTitle: "Why DICOM Metadata Quality Matters | Radiomind",
      metaDescription:
        "Inconsistent DICOM metadata causes workflow friction. Here's why metadata hygiene matters for radiology departments.",
      keywords: ["DICOM metadata", "data quality", "radiology workflow"],
    },
  },
  {
    id: "10",
    slug: "designing-worklists-that-prioritize-correctly",
    title: "Designing Worklists That Actually Prioritize the Right Studies",
    excerpt:
      "A poorly designed worklist can bury urgent studies under routine ones. Here's how good worklist design prevents that.",
    content: `A radiology worklist's job sounds simple: show radiologists which study to read next. In practice, getting this right is one of the harder workflow design problems in imaging software.

The naive approach — sorting strictly by arrival time — treats every study as equally urgent, which is rarely true. A routine outpatient knee MRI and a STAT head CT for a suspected stroke shouldn't compete on a first-in-first-out basis.

Good worklist design layers multiple signals: ordering priority set by the referring clinician, modality-specific urgency norms, and increasingly, AI-flagged findings that suggest a study may contain a critical or unexpected result. The goal isn't to remove radiologist judgment from prioritization — it's to make sure the studies most likely to need urgent attention aren't sitting unread simply because of when they happened to arrive.

Departments that have redesigned their worklists around this kind of layered prioritization report fewer instances of delayed critical findings being caught only at the end of a shift, simply because the worklist surfaced them earlier instead of leaving them buried in arrival order.

Worklist design rarely gets the attention that diagnostic AI does, but it has an outsized effect on whether AI-flagged findings actually reach a radiologist in time to matter.`,
    featuredImage: "/images/blog/worklist-design.svg",
    category: "Clinical Workflow",
    tags: ["worklist", "prioritization", "radiology workflow"],
    author: { name: "Dr. Sana Iyer", role: "Radiology Consultant", avatar: "/images/team/team-3.svg" },
    publishedAt: "2025-11-27",
    updatedAt: "2025-11-27",
    status: "published",
    seo: {
      metaTitle: "Designing Radiology Worklists That Prioritize Correctly | Radiomind",
      metaDescription:
        "How layered prioritization in radiology worklists prevents urgent studies from being buried under routine ones.",
      keywords: ["radiology worklist", "study prioritization", "workflow design"],
    },
  },
];
