"use client"

import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  images: string[]
  role: string
  duration: string
  technologies: string[]
  details: string[]
  achievements: string[]
  link?: string
  github?: string
  stars?: string
}

const PORTFOLIO_DATA: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with real-time inventory management",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop",
    ],
    role: "Lead Developer",
    duration: "3 months",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    details: [
      "Built a comprehensive e-commerce solution from the ground up",
      "Implemented real-time inventory tracking with WebSocket updates",
      "Integrated Stripe for secure payment processing with subscription support",
      "Designed responsive UI components with accessibility in mind",
    ],
    achievements: [
      "Achieved 99.9% uptime during peak traffic periods",
      "Reduced page load time by 40% through optimization",
      "2.3k GitHub stars for the open-source components",
    ],
    link: "#",
    github: "#",
    stars: "2.3k",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop interface",
    tags: ["React", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80f0c7118244?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-84eb9e495761?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    ],
    role: "Frontend Developer",
    duration: "2 months",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    details: [
      "Developed an intuitive drag-and-drop task management interface",
      "Implemented real-time collaboration features using Firebase",
      "Created customizable boards and workflows",
      "Added notification system for task updates and deadlines",
    ],
    achievements: [
      "1.8k active users within the first month",
      "4.8/5 user satisfaction rating",
      "Featured in Product Hunt top 10",
    ],
    link: "#",
    github: "#",
    stars: "1.8k",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform",
    tags: ["Vue.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    ],
    role: "Full Stack Developer",
    duration: "4 months",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    details: [
      "Built a comprehensive analytics platform with custom chart components",
      "Implemented real-time data streaming with Socket.io",
      "Created interactive D3.js visualizations for complex datasets",
      "Designed scalable backend architecture for handling millions of events",
    ],
    achievements: [
      "Processes 10M+ events daily",
      "1.2k GitHub stars",
      "Adopted by 50+ companies",
    ],
    link: "#",
    stars: "1.2k",
  },
  {
    id: 4,
    title: "Social Media API",
    description: "Scalable REST and GraphQL API for social platforms",
    tags: ["Backend", "API"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    ],
    role: "Backend Developer",
    duration: "2 months",
    technologies: ["GraphQL", "PostgreSQL", "Redis", "Node.js", "Docker"],
    details: [
      "Architected a high-performance API serving 100k+ daily requests",
      "Implemented GraphQL schema with efficient data fetching",
      "Added Redis caching layer for improved response times",
      "Containerized services with Docker for easy deployment",
    ],
    achievements: [
      "890 GitHub stars",
      "Average response time under 100ms",
      "99.95% uptime SLA",
    ],
    github: "#",
    stars: "890",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio with smooth animations",
    tags: ["Next.js", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    ],
    role: "Frontend Developer",
    duration: "1 month",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    details: [
      "Designed and developed a minimalist portfolio website",
      "Implemented smooth page transitions and scroll animations",
      "Created responsive layouts for all device sizes",
      "Optimized for performance and SEO",
    ],
    achievements: [
      "Lighthouse score: 98/100",
      "Sub-second load time",
      "Fully accessible (WCAG 2.1 AA)",
    ],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Authentication Service",
    description: "Secure auth system with OAuth and 2FA support",
    tags: ["Backend", "Security"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=500&fit=crop",
    ],
    role: "Backend Developer",
    duration: "2 months",
    technologies: ["Node.js", "JWT", "OAuth 2.0", "Redis", "PostgreSQL"],
    details: [
      "Built a comprehensive authentication service from scratch",
      "Implemented OAuth 2.0 flows for multiple providers",
      "Added two-factor authentication with TOTP support",
      "Created session management with Redis for scalability",
    ],
    achievements: [
      "Handles 50k+ auth requests per minute",
      "Zero security incidents",
      "Used across 15+ internal projects",
    ],
    github: "#",
  },
  {
    id: 7,
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582407973915-b3375e452b08?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=500&fit=crop",
    ],
    role: "Full Stack Developer",
    duration: "5 months",
    technologies: ["Next.js", "Three.js", "Prisma", "PostgreSQL", "MapBox"],
    details: [
      "Built a comprehensive property listing platform",
      "Integrated 3D virtual tours using Three.js",
      "Implemented advanced search with MapBox integration",
      "Created admin dashboard for property management",
    ],
    achievements: [
      "500+ properties listed in first month",
      "3.5k monthly active users",
      "Featured in real estate tech magazine",
    ],
    link: "#",
    github: "#",
    stars: "950",
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description: "Mobile-first workout tracker with progress analytics",
    tags: ["React", "Mobile"],
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    ],
    role: "Frontend Developer",
    duration: "3 months",
    technologies: ["React Native", "TypeScript", "Firebase", "Recharts"],
    details: [
      "Developed cross-platform mobile app for workout tracking",
      "Implemented custom exercise library with video demonstrations",
      "Created progress charts and analytics dashboard",
      "Added social features for sharing achievements",
    ],
    achievements: [
      "10k+ downloads in first quarter",
      "4.6/5 app store rating",
      "Featured in fitness app roundup",
    ],
    link: "#",
    stars: "670",
  },
  {
    id: 9,
    title: "Restaurant Booking System",
    description: "Online reservation and order management platform",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=500&fit=crop",
    ],
    role: "Lead Developer",
    duration: "4 months",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Resend"],
    details: [
      "Built complete booking system with real-time availability",
      "Integrated payment processing for deposits and pre-orders",
      "Created admin panel for restaurant staff",
      "Implemented automated email and SMS notifications",
    ],
    achievements: [
      "Processing 200+ bookings daily",
      "Reduced no-shows by 35%",
      "Used by 25+ restaurants",
    ],
    link: "#",
    github: "#",
    stars: "540",
  },
  {
    id: 10,
    title: "DevOps Monitoring Tool",
    description: "Infrastructure monitoring with alerting system",
    tags: ["Backend", "DevOps"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    role: "Backend Developer",
    duration: "6 months",
    technologies: ["Go", "Grafana", "Prometheus", "Docker", "Kubernetes"],
    details: [
      "Built comprehensive monitoring dashboard for infrastructure",
      "Implemented custom alerting rules with multiple notification channels",
      "Created automated scaling triggers for Kubernetes clusters",
      "Developed historical data analysis and reporting features",
    ],
    achievements: [
      "Monitors 500+ services across multiple clusters",
      "Reduced incident response time by 60%",
      "Open source with 1.1k GitHub stars",
    ],
    github: "#",
    stars: "1.1k",
  },
  {
    id: 11,
    title: "Educational Platform",
    description: "Online learning management system with video courses",
    tags: ["Next.js", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    ],
    role: "Full Stack Developer",
    duration: "4 months",
    technologies: ["Next.js", "Mux", "Prisma", "PostgreSQL", "Stripe"],
    details: [
      "Developed complete LMS with course creation tools",
      "Integrated video streaming with Mux",
      "Implemented progress tracking and certificates",
      "Created subscription and one-time payment options",
    ],
    achievements: [
      "50+ courses created in first quarter",
      "2k+ enrolled students",
      "95% course completion rate",
    ],
    link: "#",
    stars: "780",
  },
  {
    id: 12,
    title: "Crypto Portfolio Tracker",
    description: "Multi-chain cryptocurrency tracking with analytics",
    tags: ["React", "API", "Web3"],
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    ],
    role: "Frontend Developer",
    duration: "2 months",
    technologies: ["React", "TypeScript", "Web3.js", "Coingecko API", "Chart.js"],
    details: [
      "Built multi-chain portfolio tracking interface",
      "Integrated real-time price feeds from multiple sources",
      "Created detailed analytics and performance charts",
      "Implemented wallet connection for automatic portfolio sync",
    ],
    achievements: [
      "Tracking $10M+ in assets",
      "1.5k active users",
      "Supports 8+ blockchain networks",
    ],
    link: "#",
    github: "#",
    stars: "620",
  },
]

const ALL_TAGS = Array.from(new Set(PORTFOLIO_DATA.flatMap((p) => p.tags))).sort()

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative -mx-6 -mt-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Dots Navigation - Visible on Hover */}
        <AnimatePresence>
          {isHovered && images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToSlide(index, e)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-background/50 hover:bg-background/80"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute right-2 top-2 rounded bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [modalImageIndex, setModalImageIndex] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Two Column Layout */}
        <div className="flex h-[90vh] flex-col md:flex-row">
          {/* Left Column - Slider + Buttons + Tags */}
          <div className="flex w-full flex-col border-b bg-muted/20 md:w-2/5 md:border-b-0 md:border-r">
            {/* Vertical Slider */}
            <div className="relative flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-2 overflow-y-auto p-4">
                {project.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg transition-all ${
                      index === modalImageIndex
                        ? "ring-2 ring-primary"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 p-4">
              {project.link && (
                <Button className="flex-1 gap-2" size="sm">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button variant="outline" className="flex-1 gap-2" size="sm">
                  <Mail className="h-4 w-4" />
                  Source
                </Button>
              )}
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 px-4 pb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex w-full flex-col overflow-y-auto md:w-3/5">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6 space-y-4">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">Role: </span>
                    {project.role}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Duration:{" "}
                    </span>
                    {project.duration}
                  </div>
                  {project.stars && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      {project.stars}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  What I Did
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Key Achievements
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function PortfolioPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedTag
    ? PORTFOLIO_DATA.filter((p) => p.tags.includes(selectedTag))
    : PORTFOLIO_DATA

  return (
    <div className="mx-auto w-full max-w-6xl p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Page Title */}
        <div>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            A collection of projects showcasing my work
          </p>
        </div>

        {/* Filter Tags */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Filter by category
          </h3>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTag(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              All Projects
            </motion.button>
            {ALL_TAGS.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-accent/80"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer space-y-4 rounded-lg border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
              >
                {/* Image Slider */}
                <ImageSlider images={project.images} title={project.title} />

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.stars && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-muted-foreground"
          >
            <p className="text-lg">No projects found for this category</p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
