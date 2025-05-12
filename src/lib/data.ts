import type React from "react"
import {
  BarChart2,
  Database,
  LineChart,
  CheckCircle,
  Zap,
  TrendingUp,
  Globe,
  Shield,
  Cloud,
  Cpu,
  Server,
  Users,
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
    id: "big-data-ai",
    title: "Big Data & Artificial Intelligence Solutions",
    badge: "Enterprise Solutions",
    description:
      "Leverage data-driven insights for smarter decision-making with our comprehensive Big Data & AI solutions.",
    longDescription:
      "Our Big Data & Artificial Intelligence Solutions help businesses and organizations leverage data-driven insights for smarter decision-making. We provide end-to-end services, including data collection, warehousing, visualization, and AI-driven analysis, enabling clients to optimize operations, understand market trends, and enhance strategic planning. With expertise in machine learning, predictive analytics, and automation, we develop tailored solutions for industries such as finance, healthcare, smart cities, and e-commerce. By integrating advanced AI models with big data processing, we empower businesses to unlock new opportunities, improve efficiency, and stay ahead in an increasingly digital world.",
    heroImage: "/placeholder.svg?height=500&width=600",
    featuresImage: "/placeholder.svg?height=600&width=800",
    benefitsImage: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Data Crawling & Warehousing",
        description: "Collecting and storing data from various sources for further analysis.",
        icon: Database,
      },
      {
        title: "Data Visualization & Collaboration Analysis",
        description: "Presenting data in easy-to-understand visual formats and enabling data-driven collaboration.",
        icon: BarChart2,
      },
      {
        title: "Predictive Analytics & Machine Learning",
        description: "Analyzing patterns and trends to generate accurate business and organizational predictions.",
        icon: LineChart,
      },
    ],
    benefits: [
      {
        title: "Supports Data Driven Decision Making",
        description:
          "Enables businesses and organizations to make more accurate and strategic decisions based on data analysis.",
        icon: CheckCircle,
      },
      {
        title: "Enhances Operational Efficiency",
        description:
          "Optimizes business processes through automation and AI-driven predictions, saving time and resources.",
        icon: Zap,
      },
      {
        title: "Monitors Market Trends and Consumer Behavior",
        description:
          "Provides insights into industry trends and customer preferences to support marketing strategies and product innovation.",
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
    id: "cloud-computing",
    title: "Cloud Computing Services",
    badge: "Infrastructure Solutions",
    description: "Scale your business with flexible, secure, and cost-effective cloud computing solutions.",
    longDescription:
      "Our Cloud Computing Services provide businesses with scalable, reliable, and secure infrastructure solutions. We offer comprehensive cloud migration, management, and optimization services that help organizations reduce costs, improve operational efficiency, and enhance business agility. Our team of certified cloud experts designs and implements custom cloud architectures tailored to your specific business needs, whether you're looking for public, private, or hybrid cloud solutions. We support all major cloud platforms including AWS, Azure, and Google Cloud, ensuring seamless integration with your existing systems and applications. With our managed cloud services, you can focus on your core business while we handle the complexities of cloud infrastructure management.",
    heroImage: "/placeholder.svg?height=500&width=600",
    featuresImage: "/placeholder.svg?height=600&width=800",
    benefitsImage: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Cloud Migration & Integration",
        description:
          "Seamlessly migrate your existing infrastructure and applications to the cloud with minimal disruption.",
        icon: Cloud,
      },
      {
        title: "Multi-Cloud Management",
        description:
          "Unified management of resources across multiple cloud platforms for optimal performance and cost efficiency.",
        icon: Server,
      },
      {
        title: "Cloud Security & Compliance",
        description: "Comprehensive security measures and compliance frameworks to protect your data in the cloud.",
        icon: Shield,
      },
    ],
    benefits: [
      {
        title: "Reduced Infrastructure Costs",
        description: "Eliminate capital expenses and reduce operational costs with pay-as-you-go pricing models.",
        icon: Zap,
      },
      {
        title: "Enhanced Scalability",
        description: "Easily scale resources up or down based on demand, ensuring optimal performance at all times.",
        icon: TrendingUp,
      },
      {
        title: "Improved Business Continuity",
        description:
          "Robust disaster recovery and backup solutions to ensure your business operations continue without interruption.",
        icon: CheckCircle,
      },
    ],
    color: {
      primary: "cyan",
      secondary: "teal",
      accent: "emerald",
      light: "cyan-50",
    },
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    badge: "Strategic Solutions",
    description:
      "Reimagine your business processes and customer experiences with comprehensive digital transformation.",
    longDescription:
      "Our Digital Transformation services help organizations evolve in the digital age by reimagining business processes, customer experiences, and operational models. We provide end-to-end transformation strategies that leverage cutting-edge technologies to drive innovation and competitive advantage. Our approach combines technology implementation with organizational change management to ensure successful adoption and sustainable results. We work closely with your team to identify opportunities for digital enhancement, develop a roadmap for implementation, and execute the transformation journey. From process automation and customer experience redesign to new business model development, we help you navigate the complexities of digital transformation to achieve tangible business outcomes.",
    heroImage: "/placeholder.svg?height=500&width=600",
    featuresImage: "/placeholder.svg?height=600&width=800",
    benefitsImage: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Business Process Automation",
        description: "Streamline and automate manual processes to improve efficiency and reduce operational costs.",
        icon: Cpu,
      },
      {
        title: "Customer Experience Redesign",
        description:
          "Create seamless, personalized digital experiences that enhance customer satisfaction and loyalty.",
        icon: Users,
      },
      {
        title: "Digital Strategy Development",
        description: "Comprehensive roadmap for leveraging digital technologies to achieve business objectives.",
        icon: Globe,
      },
    ],
    benefits: [
      {
        title: "Increased Operational Efficiency",
        description: "Streamlined processes and automated workflows that reduce costs and improve productivity.",
        icon: Zap,
      },
      {
        title: "Enhanced Customer Engagement",
        description:
          "Improved customer experiences across all digital touchpoints, leading to higher satisfaction and retention.",
        icon: Users,
      },
      {
        title: "Accelerated Innovation",
        description: "Faster development and deployment of new products, services, and business models.",
        icon: TrendingUp,
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
    id: "cld-computing",
    title: "Cloud Computing Services",
    badge: "Infrastructure Solutions",
    description: "Scale your business with flexible, secure, and cost-effective cloud computing solutions.",
    longDescription:
      "Our Cloud Computing Services provide businesses with scalable, reliable, and secure infrastructure solutions. We offer comprehensive cloud migration, management, and optimization services that help organizations reduce costs, improve operational efficiency, and enhance business agility. Our team of certified cloud experts designs and implements custom cloud architectures tailored to your specific business needs, whether you're looking for public, private, or hybrid cloud solutions. We support all major cloud platforms including AWS, Azure, and Google Cloud, ensuring seamless integration with your existing systems and applications. With our managed cloud services, you can focus on your core business while we handle the complexities of cloud infrastructure management.",
    heroImage: "/placeholder.svg?height=500&width=600",
    featuresImage: "/placeholder.svg?height=600&width=800",
    benefitsImage: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Cloud Migration & Integration",
        description:
          "Seamlessly migrate your existing infrastructure and applications to the cloud with minimal disruption.",
        icon: Cloud,
      },
      {
        title: "Multi-Cloud Management",
        description:
          "Unified management of resources across multiple cloud platforms for optimal performance and cost efficiency.",
        icon: Server,
      },
      {
        title: "Cloud Security & Compliance",
        description: "Comprehensive security measures and compliance frameworks to protect your data in the cloud.",
        icon: Shield,
      },
    ],
    benefits: [
      {
        title: "Reduced Infrastructure Costs",
        description: "Eliminate capital expenses and reduce operational costs with pay-as-you-go pricing models.",
        icon: Zap,
      },
      {
        title: "Enhanced Scalability",
        description: "Easily scale resources up or down based on demand, ensuring optimal performance at all times.",
        icon: TrendingUp,
      },
      {
        title: "Improved Business Continuity",
        description:
          "Robust disaster recovery and backup solutions to ensure your business operations continue without interruption.",
        icon: CheckCircle,
      },
    ],
    color: {
      primary: "cyan",
      secondary: "teal",
      accent: "emerald",
      light: "cyan-50",
    },
  },
  
]
