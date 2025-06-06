import type React from "react"
import {
  BarChart2,
  Database,
  LineChart,
  Zap,
  TrendingUp,
  Shield,
  Users,
  BrainCircuit,
  DollarSign,
  Network,
  Gauge,
  Settings,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Award,
  Code,
  Target,
  Rocket,
  Puzzle
} from "lucide-react"

export type Services = {
  id: string
  title: string
  badge: string
  description: string
  longDescription: string
  heroImage: string
  featuresImage: string
  benefitsImage: string
  features: {
    title: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  benefits: {
    title: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  color: {
    primary: string
    secondary: string
    accent: string
    light: string
  }
}

export const services: Services[] = [
  {
    id: "venture-capital",
    title: "Venture Capital & Startup Mentorship",
    badge: "Investment & Support",
    description:
      "Empowering startups and entrepreneurs with the resources and expertise needed to succeed.",
    longDescription:
      "PT Semesta Data Digital supports the growth of Indonesia's tech ecosystem through venture capital investment and startup mentorship. We provide not only funding but also strategic guidance to help entrepreneurs and researchers transform innovative ideas into impactful solutions. With our industry expertise and extensive network, we serve as a trusted partner for building sustainable, competitive businesses.",
    heroImage: "/images/services/CarouselVentureCapitalStartupMentorship.webp",
    featuresImage: "/images/services/BenefitsVentureCapital&StartupMentorship.webp",
    benefitsImage: "/images/services/FeaturesVentureCapital&StartupMentorship.webp",
    features: [
      {
        title: "Funding for early-stage and growth-stage startups",
        description: "Providing financial support to help startups grow and succeed.",
        icon: DollarSign,
      },
      {
        title: "Strategic business mentoring",
        description: "Offering guidance on business strategy, market fit, and growth planning.",
        icon: BrainCircuit,
      },
      {
        title: "Access to professional and academic networks",
        description: "Connecting startups with industry experts, mentors, and potential partners.",
        icon: Network,
      },
    ],
    benefits: [
      {
        title: "Accelerates startup growth and innovation",
        description:
          "Provides startups with the resources and expertise needed to scale their operations and innovate.",
        icon: LineChart,
      },
      {
        title: "Reduces risks through expert mentorship",
        description:
          "Helps startups navigate challenges and avoid common pitfalls with experienced guidance.",
        icon: Shield,
      },
      {
        title: "Strengthens business strategy and scalability",
        description:
          "Enhances the startup's business model and scalability through strategic planning and execution.",
        icon: TrendingUp,
      },
    ],
    color: {
      primary: "blue",
      secondary: "indigo",
      accent: "sky",
      light: "blue-50",
    },
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    badge: "Strategic Solutions",
    description: "Transform your business with data-driven digital strategies.",
    longDescription:
      "We assist organizations in crafting and implementing effective digital transformation strategies. Using a human-centered and data-driven approach, we assess data readiness, business processes, and analytics capabilities to develop tailored solutions that support operational excellence and innovation.",
    heroImage: "/images/services/CarouselDigitalTransformationConsulting.webp",
    featuresImage: "/images/services/FeaturesDigitalTransformationConsulting.webp",
    benefitsImage: "/images/services/BenefitsDigitalTransformationConsulting.webp",
    features: [
      {
        title: "Digital readiness assessment",
        description:
          "Evaluating your organization's current digital capabilities and identifying areas for improvement.",
        icon: Gauge,
      },
      {
        title: "Data flow mapping and system integration",
        description:
          "Designing and implementing seamless data flows between systems to enhance operational efficiency.",
        icon: Network,
      },
      {
        title: "Technology ecosystem recommendation",
        description: "Identifying and recommending the right technologies to support your digital transformation.",
        icon: Settings,
      },
    ],
    benefits: [
      {
        title: "Enhances efficiency and productivity",
        description: "Streamlines processes and automates workflows to improve overall performance.",
        icon: Zap,
      },
      {
        title: "Ensures strategic alignment of digital initiatives",
        description: "Aligns digital transformation efforts with business goals for maximum impact.",
        icon: Target,
      },
      {
        title: "Supports long-term innovation",
        description:
          "Fosters a culture of innovation by integrating advanced technologies and data analytics into operations.",
        icon: Lightbulb,
      },
    ],
    color: {
      primary: "emerald",
      secondary: "green",
      accent: "teal",
      light: "emerald-50",
    },
  },
  {
    id: "talent-management",
    title: "Talent Management & Development",
    badge: "Human Capital Solutions",
    description:
      "Empowering organizations with strategic talent management and development solutions.",
    longDescription:
      "With academic roots, we are committed to nurturing digital talent through hands-on training, applied research, and real-world experience. Our programs are designed to develop professionals who are skilled, adaptable, and ready to contribute to the evolving demands of the technology industry.",
    heroImage: "/images/services/CarouselTalentManagement&Development.webp",
    featuresImage: "/images/services/FeaturesTalentManagement&Development.webp",
    benefitsImage: "/images/services/BenefitsTalentManagement&Development.webp",
    features: [
      {
        title: "Project-based learning programs",
        description: "Hands-on projects that simulate real-world challenges and foster practical skills.",
        icon: BookOpen,
      },
      {
        title: "Research collaboration and internship opportunities",
        description:
          "Connecting students and professionals with industry partners for research and internships.",
        icon: Users,
      },
      {
        title: "Professional skills development workshops",
        description: "Workshops focused on enhancing soft skills, leadership, and career readiness.",
        icon: GraduationCap,
      },
    ],
    benefits: [
      {
        title: "Builds future-ready digital workforce",
        description: "Equips individuals with the skills needed to thrive in the digital economy.",
        icon: Rocket,
      },
      {
        title: "Reduces skill gaps in the tech industry",
        description:
          "Addresses the shortage of skilled professionals by providing targeted training and development.",
        icon: Puzzle,
      },
      {
        title: "Enhances employee engagement and performance",
        description: "Fosters a culture of innovation by integrating advanced technologies and data analytics into operations.",
        icon: Award,
      },
    ],
    color: {
      primary: "purple",
      secondary: "violet",
      accent: "fuchsia",
      light: "purple-50",
    },
  },
  {
    id: "custom-ict-solutions",
    title: "Custom ICT (Information and Communication Technology) Solutions",
    badge: "Tailored ICT Solutions",
    description: "Delivering customized ICT solutions for diverse sectors.",
    longDescription:
      "We deliver customized ICT solutions tailored to the specific needs of businesses and institutions. From system development and data integration to dashboard creation and visualization, our solutions are designed to enhance functionality, improve efficiency, and support data-driven operations across sectors such as government, logistics, smart cities, and public safety.",
    heroImage: "/images/services/CarouselCustomICTSolutions1.webp",
    featuresImage: "/images/services/FeaturesCustomICTSolutions.webp",
    benefitsImage: "/images/services/BenefitsCustomICTSolutions.webp",
    features: [
      {
        title: "Custom system and platform development",
        description:
          "Tailored development of systems and platforms to meet specific business requirements.",
        icon: Code,
      },
      {
        title: "Database and dashboard integration",
        description:
          "Integrating databases and creating dashboards for real-time data visualization and reporting.",
        icon: Database,
      },
      {
        title: "Real-time data streaming and visualization",
        description: "Implementing real-time data streaming solutions for immediate insights.",
        icon: BarChart2,
      },
    ],
    benefits: [
      {
        title: "Improves operational efficiency and responsiveness",
        description: "Custom solutions streamline processes and enhance decision-making capabilities.",
        icon: Zap,
      },
      {
        title: "Enables real-time insights and monitoring",
        description: "Provides immediate access to critical data for timely decision-making.",
        icon: LineChart,
      },
      {
        title: "Supports informed decision-making",
        description:
          "Custom ICT solutions provide the data and insights needed for effective decision-making.",
        icon: Target,
      },
    ],
    color: {
      primary: "amber",
      secondary: "orange",
      accent: "yellow",
      light: "amber-50",
    },
  },
]
