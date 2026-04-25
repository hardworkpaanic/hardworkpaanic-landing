"use client"

import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

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
    title: "Разработал одностраничный сайт для застройщика в Якутске",
    description:
      "Создать современный, информативный и конверсионный сайт, который эффективно представляет преимущества ЖК «Звёздный» и стимулирует посетителей к действию.",
    tags: ["Вёрстка", "Tilda", "Уникальный дизайн", "Разработка сайта"],
    images: ["/project1/1.png", "/project1/2.png", "/project1/3.png"],
    role: "Разработка уникального дизайна, вёрстка макета",
    duration: "1 неделя",
    technologies: ["Tilda", "Figma"],
    details: [
      "Эстетичный, минималистичный стиль в цветах бренда",
      "Анимации и параллакс-эффекты",
      "Адаптив под мобильные и планшеты",
      "Фокус на «визуальный сторителлинг»",
      "Адаптивная вёрстка и быстрая загрузка",
      "Подключение форм заявок и автоворонки",
    ],
    achievements: [
      "на 210% Увеличение количества заявок в течение 2 месяцев после запуска",
      "+34% Увеличение времени пребывания на сайте",
      "до 14% Снижение процента отказов",
      "Положительные отзывы клиентов",
    ],
    link: "https://riavega.ru/",
    github: "",
    stars: "",
  },
  {
    id: 2,
    title: "Разработал сайт для дизайн-студии интерьеров в Санкт-Петербурге",
    description:
      "Клиент — дизайн-студия, специализирующаяся на создании интерьеров квартир. До начала работ у студии был устаревший сайт, не отражающий уровень проектов и не вызывающий доверия у потенциальных клиентов.",
    tags: ["WordPress", "CMS", "Вёрстка", "Разработка сайта"],
    images: ["/project2/1.png", "/project2/2.png", "/project2/3.png"],
    role: "Ведущий разработчик",
    duration: "3 недели",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    details: [
      "Эстетичный, минималистичный стиль в цветах бренда",
      "Анимации и параллакс-эффекты",
      "Адаптивная вёрстка и быстрая загрузка",
      "Интеграция с CMS WordPress",
      "Написание текстов под каждую услугу и блок",
      "Подготовка ALT-тегов и метатегов",
    ],
    achievements: [
      "с 4 до 14 Рост заявок с сайта за неделю",
      "+62% Средняя глубина просмотра",
      "с 14 до 9% Снижение процента отказов",
      "Сайт вошел в ТОП-30 Яндекса по 8 ключевым запросам за 2 месяца",
    ],
    link: "https://flat360.ru/",
    github: "",
    stars: "",
  },
  {
    id: 3,
    title:
      "Разработал интернет-магазин для молодого и динамично развивающийся магаина",
    description:
      "LogiMarkeT – молодой и динамично развивающийся игрок на рынке продаж готового складского оборудования. Специализирующийся на розничной и оптовой продаже широкого ассортимента товаров для обеспечения эффективной организации складских помещений различных отраслей деятельности",
    tags: ["Интернет-магазин", "Bitrix", "Вёрстка", "Уникальный дизайн"],
    images: ["/project3/1.png", "/project3/2.png", "/project3/3.png"],
    role: "Разработка под Bitrix",
    duration: "1 неделя",
    technologies: ["Bitrix", "HTML", "CSS", "JavaScript"],
    details: [
      "Вёрстка адаптивного макета, интеграция с Bitrix CRM",
      "Кастомный компонент с умной фильтрацией",
      "Модуль синхронизации данных с внешней системой",
      "Интеграционное приложение для Bitrix24 (REST + Вебхуки)",
    ],
    achievements: [
      "100+ уникальных посищений в неделю",
      "на 42% увеличения продаж",
    ],
    link: "https://logimarket.ru/",
    github: "",
    stars: "",
  },
  {
    id: 4,
    title: "Разработал интернет-магазин для Fabula, магазин аксессуаров",
    description:
      "Fabula — интернет-магазин для продажи аксессуаров для женщин и мужчин",
    tags: ["Bitrix", "Интернет-магазин", "Вёрстка", "Уникальный дизайн"],
    images: ["/project4/1.png", "/project4/2.png", "/project4/3.png"],
    role: "Bitrix разработчик, вёрстальщик",
    duration: "2.5 недели",
    technologies: ["Bitrix", "HTML", "CSS", "JavaScript", "PHP"],
    details: [
      "Вёрстка адаптивного макета, интеграция с Bitrix CRM",
      "Модуль синхронизации данных с внешней системой",
      "Интеграционное приложение для Bitrix24 (REST + Вебхуки)",
      "Настрой CEO и Интеграция с Яндекс Директ, Google Analytics",
    ],
    achievements: ["120+ заказов в месяц", "100+ уникальных посищений"],
    link: "https://fabulabrand.ru/",
    github: "",
    stars: "",
  },
  {
    id: 5,
    title: "Разработал оптового сайта для Fabula",
    description: "Сайт для оптовой продажи аксессуаров для b2b",
    tags: ["WordPress", "CMS", "Вёрстка", "PHP"],
    images: ["/project5/1.png", "/project5/2.png", "/project5/3.png"],
    role: "Разработка под WordPress",
    duration: "1 неделя",
    technologies: ["WordPress", "PHP", "JavaScript"],
    details: [
      "Динамический калькулятор цены в реальном времени",
      "Модуль проверки ОГРН/ИНН через Дадату или ФНС",
      "Генератор коммерческого предложения (КП) в PDF + email",
      "Микро-API для 1С (обмен остатками и ценами)",
    ],
    achievements: [
      "Безопастная проверка клиентов ЮР и Физ. лиц",
      "Скорость расчетов (калькулятор) увеличина на 62%",
      "Моштабируемое легковестное API",
    ],
    link: "https://opt.fabulabrand.ru/",
    github: "",
    stars: "",
  },
  {
    id: 6,
    title: "Разработал сайт для видеорегистраторов от производителя РФ ДМТ",
    description:
      "Интернет-магазин для продажи видеорегистраторов / а так же именной сайт компании ДМТ",
    tags: ["WordPress", "Интернет-магазин", "Разработка сайта"],
    images: ["/project6/1.png", "/project6/2.png", "/project6/3.png"],
    role: "PhP разработчик под WordPress",
    duration: "3 недели",
    technologies: [],
    details: [
      "Система разделенных заказов (Order Splitter для логистики)",
      "Кастомный импорт прайсов с валидацией (Excel/XML Processor)",
      "Кастомный плагин «Корзина проектов» (Quote & Project Manager)",
      "Система «Уровни цен + Персональные скидки по договоренности»",
    ],
    achievements: [
      "Привеличение свыше 2000 клиентов за полгода",
      "Доверие покупателей",
      "Снижение числа отказов на 70%",
    ],
    link: "https://dmtreg.ru/",
    github: "",
    stars: "",
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
                <Button className="h-10 w-full" asChild size="sm">
                  <Link className="font-bold" href={project.link}>
                    {"Перейти на сайт" + " ->"}
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" className="flex-1 gap-2" size="sm">
                  <Mail className="h-4 w-4" />
                  Открыть на GitHub
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
                  <p className="mt-2 text-[15px] text-muted-foreground">
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
                    <span className="font-medium text-foreground">Роль: </span>
                    {project.role}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Продолжительность:{" "}
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
                  Что я сделал
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
                  Достижения
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
            Коллекция проектов, демонстрирующих мои способности
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
                    : "border border-border text-accent-foreground hover:bg-accent/80"
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
            <p className="text-lg">Нет проектов для этой категории</p>
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
