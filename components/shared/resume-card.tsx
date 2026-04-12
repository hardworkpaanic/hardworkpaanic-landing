"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Download, Globe, Mail, MapPin, Phone, Star, Briefcase, Code2, GraduationCap, Languages } from "lucide-react"

const RESUME_DATA = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Full Stack Developer",
    summary:
      "Passionate developer with 8+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud architecture.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatarUrl: "https://github.com/shadcn.png",
    initials: "JD",
    socials: [
      { name: "GitHub", icon: Mail, url: "#" },
      { name: "LinkedIn", icon: Mail, url: "#" },
      { name: "Portfolio", icon: Globe, url: "#" },
    ],
  },
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corp Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led the frontend team in rebuilding the core product using Next.js 14 and React, improving performance by 40%",
        "Architected and implemented a microservices-based backend using Node.js and GraphQL",
        "Mentored 5 junior developers and conducted weekly code review sessions",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "StartUp Ltd.",
      period: "2019 - 2021",
      location: "Remote",
      achievements: [
        "Developed and maintained multiple client-facing applications with 99.9% uptime",
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
        "Built a real-time analytics dashboard using React and WebSockets",
      ],
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2017 - 2019",
      location: "New York, NY",
      achievements: [
        "Contributed to 20+ client projects using React, Vue.js, and WordPress",
        "Optimized web applications for SEO and accessibility (WCAG 2.1 AA)",
      ],
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      tech: ["Next.js", "Stripe", "Prisma"],
      desc: "A full-featured online store with real-time inventory management and payment processing.",
      stars: "2.3k",
    },
    {
      name: "Task Management App",
      tech: ["React", "Firebase", "Tailwind"],
      desc: "Collaborative task manager with drag-and-drop interface and real-time updates.",
      stars: "1.8k",
    },
    {
      name: "Analytics Dashboard",
      tech: ["Vue.js", "D3.js", "Node.js"],
      desc: "Real-time data visualization platform with custom chart components.",
      stars: "1.2k",
    },
    {
      name: "Social Media API",
      tech: ["GraphQL", "PostgreSQL", "Redis"],
      desc: "Scalable REST and GraphQL API serving 100k+ daily requests.",
      stars: "890",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel"],
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      extra: "GPA: 3.8/4.0",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Code Academy Bootcamp",
      period: "2019",
      extra: "Certificate",
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2022",
      extra: null,
    },
  ],
  languages: [
    { lang: "English", level: "Native", percentage: 100 },
    { lang: "Spanish", level: "Professional", percentage: 75 },
    { lang: "French", level: "Intermediate", percentage: 50 },
    { lang: "Mandarin", level: "Basic", percentage: 30 },
  ],
}

export function ResumeCard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero Section - Clean, no card style */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pb-10 pt-12 md:pt-16"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Avatar className="h-28 w-28 md:h-32 md:w-32">
              <AvatarImage
                src={RESUME_DATA.personalInfo.avatarUrl}
                alt="Profile"
              />
              <AvatarFallback className="text-2xl">
                {RESUME_DATA.personalInfo.initials}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 space-y-3 text-center md:text-left">
            <motion.div variants={item} className="space-y-2">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {RESUME_DATA.personalInfo.name}
              </h1>
              <p className="text-xl font-medium text-muted-foreground">
                {RESUME_DATA.personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {RESUME_DATA.personalInfo.summary}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground md:justify-start"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{RESUME_DATA.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                <span>{RESUME_DATA.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                <span>{RESUME_DATA.personalInfo.phone}</span>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-2 pt-4 md:justify-start"
            >
              {RESUME_DATA.personalInfo.socials.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </Button>
              ))}
              <Button size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <motion.div
          variants={item}
          className="mt-10 grid grid-cols-3 gap-4 border-t pt-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">8+</div>
            <div className="mt-1 text-xs text-muted-foreground">Years Experience</div>
          </div>
          <div className="border-x text-center">
            <div className="text-3xl font-bold text-foreground">50+</div>
            <div className="mt-1 text-xs text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">30+</div>
            <div className="mt-1 text-xs text-muted-foreground">Happy Clients</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Separator after Hero */}
      <Separator className="mb-10" />

      {/* Main Content - Two Column Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-16 md:grid-cols-3"
      >
        {/* Left Column - Main Content */}
        <div className="space-y-14 md:col-span-2">
          {/* Experience Section */}
          <motion.div variants={item} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8">
              {RESUME_DATA.experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={item}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="font-medium text-muted-foreground">
                        {job.company}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-0.5 text-accent">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {index < RESUME_DATA.experience.length - 1 && (
                    <Separator className="mt-6" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Separator between sections */}
          <Separator />

          {/* Projects Section */}
          <motion.div variants={item} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {RESUME_DATA.projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer space-y-3 rounded-lg bg-accent/5 p-5 transition-colors hover:bg-accent/10"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-12 md:border-l md:pl-10">
          {/* Skills Section */}
          <motion.div variants={item} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Skills</h2>
            </div>

            <div className="space-y-5">
              {RESUME_DATA.skills.map((group, index) => (
                <div key={index}>
                  <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="cursor-default text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <Separator />

          {/* Education Section */}
          <motion.div variants={item} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Education</h2>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {edu.period}
                      </span>
                      {edu.extra && (
                        <Badge variant="outline" className="text-xs">
                          {edu.extra}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {index < RESUME_DATA.education.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <Separator />

          {/* Languages Section */}
          <motion.div variants={item} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Languages</h2>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {language.lang}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {language.level}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-accent/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <Separator />

          {/* Contact Section */}
          <motion.div variants={item} className="space-y-3">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Interested in working together? Let's connect!
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{RESUME_DATA.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{RESUME_DATA.personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
