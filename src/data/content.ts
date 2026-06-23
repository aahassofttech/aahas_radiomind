import {
  Testimonial,
  TeamMember,
  StatItem,
  FeatureItem,
  ProcessStep,
  AudienceItem,
} from "@/types/content";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Radiomind cut our average reporting time noticeably within the first month. The viewer integrates so well with our existing PACS that the team barely noticed a transition period.",
    name: "Dr. Ramesh Kulkarni",
    role: "Head of Radiology",
    organization: "Sunrise Diagnostic Centre",
    avatar: "/images/testimonials/avatar-1.svg",
  },
  {
    id: "t2",
    quote:
      "The priority worklist sorting has genuinely changed how our night shift operates. Critical findings surface faster, and our turnaround time on STAT studies has improved significantly.",
    name: "Dr. Suresh Patil",
    role: "Consultant Radiologist",
    organization: "Apex Multi-Speciality Hospital",
    avatar: "/images/testimonials/avatar-2.svg",
  },
  {
    id: "t3",
    quote:
      "We rolled out Radiomind across three facilities without a single disruptive migration. Our IT team appreciated that it layered onto infrastructure we already had in place.",
    name: "Ramesh Iyer",
    role: "Director of Radiology IT",
    organization: "Crescent Hospital Network",
    avatar: "/images/testimonials/avatar-3.svg",
  },
  {
    id: "t4",
    quote:
      "We rolled out Radiomind across three facilities without a single disruptive migration. Our IT team appreciated that it layered onto infrastructure we already had in place.",
    name: "Ramesh Iyer",
    role: "Director of Radiology IT",
    organization: "Crescent Hospital Network",
    avatar: "/images/testimonials/avatar-3.svg",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Dr. Aarav Mehta", role: "Co-Founder & CEO", photo: "/images/team/team-1.svg" },
  { name: "Dr. Anika Rao", role: "Co-Founder & Clinical Lead", photo: "/images/team/team-3.svg" },
  { name: "Vikram Shah", role: "Co-Founder & CTO", photo: "/images/team/team-2.svg" },
  { name: "Dr. Sana Iyer", role: "Head of Radiology Affairs", photo: "/images/team/team-3.svg" },
];

export const stats: StatItem[] = [
  {
    value: "60%",
    label: "Less reporting time",
    description:
      "Automate routine worklist tasks, pre-screen normals, and prioritize critical findings — freeing your team.",
  },
  {
    value: "30%",
    label: "Fewer missed findings",
    description:
      "AI-assisted reading reduces misses by catching subtle pathologies that can be overlooked during high-volume sessions.",
  },
  {
    value: "< 30 min",
    label: "Faster turnaround time",
    description:
      "AI triage ensures critical studies are read first. Cut average TAT from hours to under thirty minutes for priority cases.",
  },
  {
    value: "100K+",
    label: "Scalable for any hospital",
    description:
      "Run 100 studies or 100,000 — our cloud-native platform scales automatically with zero performance degradation.",
  },
];

export const features: FeatureItem[] = [
  {
    title: "Advanced Visualization",
    description:
      "Explore medical images with precision using powerful visualization tools designed for modern reading workflows.",
    icon: "scan",
    points: [
      "Multi-Planar Reconstruction (MPR) with synchronized views",
      "Browser-based 3D volume rendering",
      "MIP and MinIP projections",
      "Curved Planar Reformation (CPR) for vascular structures",
      "Multi-modality fusion for PET/CT, SPECT/CT, and MR/PET",
    ],
    image: "/images/features/visualization.svg",
  },
  {
    title: "Clinical Measurements & Annotations",
    description:
      "Perform accurate measurements and annotate findings with tools built for diagnostic confidence.",
    icon: "ruler",
    points: [
      "Distance, area, angle, and Cobb angle measurements",
      "Hounsfield Unit (HU) display and pixel probing",
      "Arrow and text annotations",
      "Persistent annotations across slices",
      "Export measurements with detailed statistics",
    ],
    image: "/images/features/measurements.svg",
  },
  {
    title: "Image Processing & Windowing",
    description:
      "Enhance image interpretation with real-time controls and clinical presets.",
    icon: "sliders",
    points: [
      "Interactive window/level adjustment",
      "Presets for lung, bone, brain, and abdomen",
      "Pseudo-color LUTs and image inversion",
      "Rotation, flipping, and magnification tools",
    ],
    image: "/images/features/processing.svg",
  },
  {
    title: "Streamlined Radiology Workflow",
    description:
      "Reduce clicks and accelerate reporting with an integrated workflow experience.",
    icon: "workflow",
    points: [
      "Structured report editor inside the viewer",
      "Study browser with series thumbnails",
      "DICOM metadata inspection",
      "Contact-driven right-click controls",
      "Fullscreen mode and overlay management",
    ],
    image: "/images/features/workflow.svg",
  },
  {
    title: "Seamless Import & Export",
    description:
      "Access, share, and export imaging data effortlessly across systems.",
    icon: "share",
    points: [
      "DICOM file and folder import",
      "Remote study loading via FTP",
      "PNG screenshot and cine video export",
      "CSV export for measurements",
      "JSON export for DICOM metadata",
    ],
    image: "/images/features/import-export.svg",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Image Acquisition",
    description: "Patient is scanned via CT, MRI, or X-ray, generated by the modality.",
  },
  {
    step: "02",
    title: "PACS Upload",
    description: "Images are automatically routed to your PACS for AI processing.",
  },
  {
    step: "03",
    title: "AI Processing",
    description:
      "Our AI engine analyzes images in seconds, flagging anomalies and generating a priority score.",
  },
  {
    step: "04",
    title: "Radiologist Review",
    description:
      "The radiologist reviews the AI-annotated study and finalizes the report inside the viewer.",
  },
  {
    step: "05",
    title: "Final Report Delivery",
    description: "The finalized report is delivered to the referring clinician via EMR or PDF.",
  },
];

export const audiences: AudienceItem[] = [
  {
    title: "Multi-Speciality Hospitals",
    description: "Enterprise imaging infrastructure for high-volume radiology departments.",
  },
  {
    title: "Diagnostic & Imaging Centres",
    description: "Efficient workflows for faster turnaround and improved productivity.",
  },
  {
    title: "Teleradiology Providers",
    description: "Secure remote reporting and collaboration from anywhere.",
  },
  {
    title: "Hospital Networks",
    description: "Centralized PACS with unified access across multiple facilities.",
  },
];
