"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Star,
  Briefcase,
  Code2,
  GitFork,
} from "lucide-react"

const RESUME_DATA = {
  personalInfo: {
    name: "hardworkpaanic",
    title: "Ведущий Full Stack разработчик",
    summary:
      "Увлечённый разработчик с 8+ годами опыта создания масштабируемых веб-приложений. Специализация: React, Node.js и облачная архитектура.",
    location: "Россия, Астрахань",
    email: "pavelvalynov355@gmail.com",
    phone: "+7 (937) 502 44 64",
    avatarUrl: "/avatar.png",
    initials: "hard",
    socials: [
      {
        name: "GitHub",
        icon: GitFork,
        url: "https://github.com/hardworkpaanic",
      },
    ],
  },
  experience: [
    {
      role: "Middle+ Full Stack разработчик",
      company: "Reboot Digital Studio",
      period: "2023 — 2025",
      location: "Санкт-Петербург",
      achievements: [
        "Участвовал в разработке Алхимия Акций: игра для Альфа-Банк: Разрабатывал авторизацию, написание уникальных алгоритмов для основных игровых механик",
        "Разрабатывал корпоративный сайт закрытого комьюнити Евгения Давыдова для предпринимателей и c-level руководителей из креативных и tech-индустрий",
        "Помогли немецкому издателю мобильных игр Gameforge сделать редизайн сайта игры с открытым миром. Обновили структуру и дизайн с адаптацией под разные страны.",
      ],
    },
    {
      role: "PHP Full Stack разработчик",
      company: "Kadema Digital",
      period: "2020 — 2022",
      location: "Пенза",
      achievements: [
        "Разрабатывал и сопровождал несколько клиентских сайтов и интернет-магазинов с временем безотказной работы 99.9%",
        "Разрабатывал внутренние сервисы компаний (чаты, CMS, Админки)",
        "Создал дашборд аналитики в реальном времени с использованием WebSockets",
      ],
    },
    {
      role: "Младший разработчик",
      company: "Интернет-системы (inetsys.ru)",
      period: "2017 — 2020",
      location: "Удалённо",
      achievements: [
        "Принимал участие в 20+ клиентских проектах с использованием WordPress Joomla Bitrix",
        "Оптимизировал веб-сайты для SEO и доступности",
        "Создавал Pixel Perfect вёрстку, и скрипты на JavaScript",
      ],
    },
  ],
  projects: [
    {
      name: "Платформа для интернет-магазина",
      tech: ["Next.js", "Stripe", "Prisma"],
      desc: "Полнофункциональный интернет-магазин с управлением запасами в реальном времени и обработкой платежей.",
      stars: "2.3k",
    },
    {
      name: "Приложение для управления задачами",
      tech: ["React", "Firebase", "Tailwind"],
      desc: "Совместный менеджер задач с интерфейсом drag-and-drop и обновлениями в реальном времени.",
      stars: "1.8k",
    },
    {
      name: "Аналитическая панель",
      tech: ["Vue.js", "D3.js", "Node.js"],
      desc: "Платформа визуализации данных в реальном времени с пользовательскими компонентами графиков.",
      stars: "1.2k",
    },
    {
      name: "API для социальной сети",
      tech: ["GraphQL", "PostgreSQL", "Redis"],
      desc: "Масштабируемый REST и GraphQL API, обслуживающий 100 000+ запросов в день.",
      stars: "890",
    },
  ],
  skills: [
    {
      category: "Фронтенд",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Бэкенд",
      skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps и инструменты",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel"],
    },
  ],
  education: [
    {
      degree: "Бакалавр компьютерных наук",
      institution: "Технологический университет",
      period: "2015 — 2019",
      extra: "Средний балл: 3.8/4.0",
    },
    {
      degree: "Полный курс веб-разработки (Full Stack)",
      institution: "Буткемп Code Academy",
      period: "2019",
      extra: "Сертификат",
    },
    {
      degree: "Сертифицированный архитектор решений AWS",
      institution: "Amazon Web Services",
      period: "2022",
      extra: null,
    },
  ],
  languages: [
    { lang: "Английский", level: "Родной", percentage: 100 },
    { lang: "Испанский", level: "Профессиональный", percentage: 75 },
    { lang: "Французский", level: "Средний", percentage: 50 },
    { lang: "Китайский", level: "Базовый", percentage: 30 },
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
        className="pt-12 pb-10 md:pt-16"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          <Avatar className="h-28 w-28 md:h-50 md:w-50">
            <AvatarImage
              src={RESUME_DATA.personalInfo.avatarUrl}
              alt="Profile"
            />
            <AvatarFallback className="text-2xl">
              {RESUME_DATA.personalInfo.initials}
            </AvatarFallback>
          </Avatar>

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
            <div className="mt-1 text-xs text-muted-foreground">Опыта</div>
          </div>
          <div className="border-x text-center">
            <div className="text-3xl font-bold text-foreground">20+</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Законченных проектов
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">30+</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Удовлетворенных клиентов
            </div>
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
              <h2 className="text-2xl font-bold">Опыт</h2>
            </div>

            <div className="space-y-8">
              {RESUME_DATA.experience.map((job, index) => (
                <motion.div key={index} variants={item}>
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
              <h2 className="text-2xl font-bold">Проекты</h2>
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
                  <p className="text-sm text-muted-foreground">
                    {project.desc}
                  </p>
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
              <h2 className="text-xl font-bold">Навыки</h2>
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

          {/* Contact Section */}
          <motion.div variants={item} className="space-y-3">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <p className="text-sm text-muted-foreground">
              У вас есть вопросы? Свяжитесь со мной!
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
