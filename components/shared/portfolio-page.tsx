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
    title: "E-commerce Платформа",
    description:
      "Полноценный интернет-магазин с управлением запасами в реальном времени",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop",
    ],
    role: "Ведущий разработчик",
    duration: "3 месяца",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    details: [
      "Разработал комплексное e-commerce решение с нуля",
      "Внедрил отслеживание запасов в реальном времени с помощью WebSocket",
      "Интегрировал Stripe для безопасной обработки платежей с поддержкой подписок",
      "Спроектировал адаптивные UI-компоненты с учетом доступности",
    ],
    achievements: [
      "Достиг 99.9% времени безотказной работы в периоды пикового трафика",
      "Сократил время загрузки страницы на 40% за счет оптимизации",
      "2.3k звезд на GitHub за компоненты с открытым исходным кодом",
    ],
    link: "#",
    github: "#",
    stars: "2.3k",
  },
  {
    id: 2,
    title: "Приложение для управления задачами",
    description: "Коллаборативный менеджер задач с интерфейсом drag-and-drop",
    tags: ["React", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80f0c7118244?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-84eb9e495761?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    ],
    role: "Frontend-разработчик",
    duration: "2 месяца",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    details: [
      "Разработал интуитивно понятный интерфейс для управления задачами с функцией drag-and-drop",
      "Реализовал функции совместной работы в реальном времени с использованием Firebase",
      "Создал настраиваемые доски и рабочие процессы",
      "Добавил систему уведомлений об обновлениях задач и дедлайнах",
    ],
    achievements: [
      "1.8k активных пользователей в первый месяц",
      "Рейтинг удовлетворенности пользователей 4.8/5",
      "Попал в топ-10 Product Hunt",
    ],
    link: "#",
    github: "#",
    stars: "1.8k",
  },
  {
    id: 3,
    title: "Аналитическая панель",
    description: "Платформа для визуализации данных в реальном времени",
    tags: ["Vue.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    ],
    role: "Full Stack-разработчик",
    duration: "4 месяца",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    details: [
      "Создал комплексную аналитическую платформу с пользовательскими компонентами графиков",
      "Внедрил потоковую передачу данных в реальном времени с Socket.io",
      "Создал интерактивные визуализации D3.js для сложных наборов данных",
      "Спроектировал масштабируемую бэкенд-архитектуру для обработки миллионов событий",
    ],
    achievements: [
      "Обрабатывает 10M+ событий ежедневно",
      "1.2k звезд на GitHub",
      "Принята 50+ компаниями",
    ],
    link: "#",
    stars: "1.2k",
  },
  {
    id: 4,
    title: "API для социальных сетей",
    description: "Масштабируемый REST и GraphQL API для социальных платформ",
    tags: ["Backend", "API"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    ],
    role: "Бэкенд-разработчик",
    duration: "2 месяца",
    technologies: ["GraphQL", "PostgreSQL", "Redis", "Node.js", "Docker"],
    details: [
      "Спроектировал высокопроизводительный API, обрабатывающий 100k+ запросов в день",
      "Реализовал схему GraphQL с эффективной выборкой данных",
      "Добавил уровень кэширования Redis для улучшения времени ответа",
      "Контейнеризировал сервисы с помощью Docker для простоты развертывания",
    ],
    achievements: [
      "890 звезд на GitHub",
      "Среднее время ответа менее 100 мс",
      "99.95% времени безотказной работы по SLA",
    ],
    github: "#",
    stars: "890",
  },
  {
    id: 5,
    title: "Сайт-портфолио",
    description: "Современное портфолио с плавной анимацией",
    tags: ["Next.js", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    ],
    role: "Frontend-разработчик",
    duration: "1 месяц",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    details: [
      "Спроектировал и разработал минималистичный сайт-портфолио",
      "Реализовал плавные переходы между страницами и анимацию прокрутки",
      "Создал адаптивные макеты для всех размеров устройств",
      "Оптимизировал для производительности и SEO",
    ],
    achievements: [
      "Оценка Lighthouse: 98/100",
      "Время загрузки менее секунды",
      "Полностью доступен (WCAG 2.1 AA)",
    ],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Сервис аутентификации",
    description: "Защищенная система аутентификации с поддержкой OAuth и 2FA",
    tags: ["Backend", "Security"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=500&fit=crop",
    ],
    role: "Бэкенд-разработчик",
    duration: "2 месяца",
    technologies: ["Node.js", "JWT", "OAuth 2.0", "Redis", "PostgreSQL"],
    details: [
      "Создал комплексный сервис аутентификации с нуля",
      "Реализовал потоки OAuth 2.0 для нескольких провайдеров",
      "Добавил двухфакторную аутентификацию с поддержкой TOTP",
      "Создал управление сессиями с помощью Redis для масштабируемости",
    ],
    achievements: [
      "Обрабатывает 50k+ запросов аутентификации в минуту",
      "Нет инцидентов безопасности",
      "Используется в 15+ внутренних проектах",
    ],
    github: "#",
  },
  {
    id: 7,
    title: "Платформа недвижимости",
    description:
      "Система листинга и управления недвижимостью с виртуальными турами",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582407973915-b3375e452b08?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=500&fit=crop",
    ],
    role: "Full Stack-разработчик",
    duration: "5 месяцев",
    technologies: ["Next.js", "Three.js", "Prisma", "PostgreSQL", "MapBox"],
    details: [
      "Создал комплексную платформу для листинга недвижимости",
      "Интегрировал 3D виртуальные туры с использованием Three.js",
      "Реализовал расширенный поиск с интеграцией MapBox",
      "Создал админ-панель для управления недвижимостью",
    ],
    achievements: [
      "500+ объектов недвижимости за первый месяц",
      "3.5k активных пользователей в месяц",
      "Освещено в журнале о технологиях в сфере недвижимости",
    ],
    link: "#",
    github: "#",
    stars: "950",
  },
  {
    id: 8,
    title: "Приложение для фитнеса",
    description: "Мобильный трекер тренировок с аналитикой прогресса",
    tags: ["React", "Mobile"],
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    ],
    role: "Frontend-разработчик",
    duration: "3 месяца",
    technologies: ["React Native", "TypeScript", "Firebase", "Recharts"],
    details: [
      "Разработал кроссплатформенное мобильное приложение для отслеживания тренировок",
      "Реализовал собственную библиотеку упражнений с видео-демонстрациями",
      "Создал графики прогресса и аналитическую панель",
      "Добавил социальные функции для обмена достижениями",
    ],
    achievements: [
      "10k+ загрузок в первом квартале",
      "Рейтинг в магазине приложений 4.6/5",
      "Попало в подборку фитнес-приложений",
    ],
    link: "#",
    stars: "670",
  },
  {
    id: 9,
    title: "Система бронирования ресторанов",
    description: "Платформа для онлайн-бронирования и управления заказами",
    tags: ["Next.js", "Full Stack"],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=500&fit=crop",
    ],
    role: "Ведущий разработчик",
    duration: "4 месяца",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Resend"],
    details: [
      "Создал полную систему бронирования с доступностью в реальном времени",
      "Интегрировал обработку платежей для депозитов и предзаказов",
      "Создал админ-панель для персонала ресторана",
      "Реализовал автоматические уведомления по электронной почте и SMS",
    ],
    achievements: [
      "Обрабатывает 200+ бронирований ежедневно",
      "Сократил количество неявок на 35%",
      "Используется 25+ ресторанами",
    ],
    link: "#",
    github: "#",
    stars: "540",
  },
  {
    id: 10,
    title: "DevOps инструмент мониторинга",
    description: "Мониторинг инфраструктуры с системой оповещения",
    tags: ["Backend", "DevOps"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    role: "Бэкенд-разработчик",
    duration: "6 месяцев",
    technologies: ["Go", "Grafana", "Prometheus", "Docker", "Kubernetes"],
    details: [
      "Создал комплексную панель мониторинга инфраструктуры",
      "Реализовал пользовательские правила оповещения с несколькими каналами уведомлений",
      "Создал автоматические триггеры масштабирования для кластеров Kubernetes",
      "Разработал функции анализа исторических данных и создания отчетов",
    ],
    achievements: [
      "Отслеживает 500+ сервисов в нескольких кластерах",
      "Сократил время реагирования на инциденты на 60%",
      "Открытый исходный код с 1.1k звезд на GitHub",
    ],
    github: "#",
    stars: "1.1k",
  },
  {
    id: 11,
    title: "Образовательная платформа",
    description: "Система онлайн-обучения с видеокурсами",
    tags: ["Next.js", "Frontend"],
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    ],
    role: "Full Stack-разработчик",
    duration: "4 месяца",
    technologies: ["Next.js", "Mux", "Prisma", "PostgreSQL", "Stripe"],
    details: [
      "Разработал полную LMS с инструментами для создания курсов",
      "Интегрировал видеостриминг с Mux",
      "Реализовал отслеживание прогресса и выдачу сертификатов",
      "Создал опции подписки и разовых платежей",
    ],
    achievements: [
      "50+ созданных курсов в первом квартале",
      "2k+ записанных студентов",
      "95% коэффициент завершения курсов",
    ],
    link: "#",
    stars: "780",
  },
  {
    id: 12,
    title: "Трекер крипто-портфеля",
    description: "Отслеживание криптовалют в нескольких сетях с аналитикой",
    tags: ["React", "API", "Web3"],
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    ],
    role: "Frontend-разработчик",
    duration: "2 месяца",
    technologies: [
      "React",
      "TypeScript",
      "Web3.js",
      "Coingecko API",
      "Chart.js",
    ],
    details: [
      "Создал интерфейс для отслеживания портфеля в нескольких сетях",
      "Интегрировал ценовые ленты в реальном времени из нескольких источников",
      "Создал детальную аналитику и графики производительности",
      "Реализовал подключение кошелька для автоматической синхронизации портфеля",
    ],
    achievements: [
      "Отслеживает активы на сумму $10M+",
      "1.5k активных пользователей",
      "Поддерживает 8+ блокчейн-сетей",
    ],
    link: "#",
    github: "#",
    stars: "620",
  },
]

const ALL_TAGS = Array.from(
  new Set(PORTFOLIO_DATA.flatMap((p) => p.tags))
).sort()

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
                  className={`h-2 w-2 transition-all ${
                    index === currentIndex
                      ? "scale-125 bg-primary"
                      : "bg-background/50 hover:bg-background/80"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 rounded bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
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
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden border bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Two Column Layout */}
        <div className="flex h-[90vh] flex-col md:flex-row">
          {/* Left Column - Slider + Buttons + Tags */}
          <div className="flex w-full flex-col border-b bg-muted/20 md:w-2/5 md:border-r md:border-b-0">
            {/* Vertical Slider */}
            <div className="relative flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-2 overflow-y-auto p-4">
                {project.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative aspect-[16/10] w-full overflow-hidden transition-all ${
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
            Портфолио
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Коллекция проектов, демонстрирующих мои работы
          </p>
        </div>

        {/* Filter Tags */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Фильтр по категориям
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
              className={`rounded-[6px] px-4 py-2 text-sm font-medium transition-colors ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              Все проекты
            </motion.button>
            {ALL_TAGS.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-transparent text-accent-foreground hover:bg-accent/80"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group cursor-pointer space-y-4 border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-md"
              >
                {/* Image Slider */}
                <ImageSlider images={project.images} title={project.title} />

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
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
