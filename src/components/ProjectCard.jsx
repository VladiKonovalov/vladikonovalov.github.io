import { useState, useRef, useEffect, useLayoutEffect, useId } from 'react'
import { useI18n } from '../i18n/useI18n'

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  if (!url) return null
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  
  return null
}

// Helper function to check if URL is a YouTube URL
const isYouTubeUrl = (url) => {
  if (!url) return false
  return /youtube\.com|youtu\.be/.test(url)
}

export default function ProjectCard({ project }) {
  const { t, language } = useI18n()
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [youtubeLoaded, setYoutubeLoaded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const cardRef = useRef(null)
  const descriptionRef = useRef(null)
  const descriptionId = useId()
  // Check both liveUrl and image fields for YouTube URLs
  const youtubeVideoIdFromLiveUrl = project.liveUrl ? getYouTubeVideoId(project.liveUrl) : null
  const youtubeVideoIdFromImage = project.image ? getYouTubeVideoId(project.image) : null
  const youtubeVideoId = youtubeVideoIdFromLiveUrl || youtubeVideoIdFromImage
  const hasYouTube = !!youtubeVideoId
  // Prioritize YouTube if YouTube URL exists
  const showYouTube = hasYouTube

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const description = (() => {
    const key = `projects.items.${project._i18nId}.description`
    const translated = t(key)
    return translated === key ? project.description : translated
  })()

  const title = (() => {
    const key = `projects.items.${project._i18nId}.title`
    const translated = t(key)
    return translated === key ? project.title : translated
  })()

  useLayoutEffect(() => {
    const el = descriptionRef.current
    if (!el || expanded) return

    const measure = () => {
      const clone = el.cloneNode(true)
      clone.classList.remove('line-clamp-4', 'min-h-[7rem]')
      clone.style.position = 'fixed'
      clone.style.left = '0'
      clone.style.top = '0'
      clone.style.visibility = 'hidden'
      clone.style.pointerEvents = 'none'
      clone.style.height = 'auto'
      clone.style.minHeight = '0'
      clone.style.overflow = 'visible'
      clone.style.display = 'block'
      clone.style.webkitLineClamp = 'unset'
      clone.style.width = `${el.clientWidth}px`
      el.parentElement.appendChild(clone)
      const fullHeight = clone.getBoundingClientRect().height
      clone.remove()

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20
      setOverflows(fullHeight > lineHeight * 4 + 1)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [description, expanded, language])

  return (
    <div
      ref={cardRef}
      className={`flex h-full min-w-0 flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="relative h-48 shrink-0 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {showYouTube ? (
          <div className="w-full h-full relative">
            {!youtubeLoaded && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse flex items-center justify-center z-10">
                <div className="text-gray-500 dark:text-gray-400 text-sm">{t('projectCard.loadingVideo')}</div>
              </div>
            )}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?modestbranding=1&rel=0`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              onLoad={() => setYoutubeLoaded(true)}
            />
          </div>
        ) : project.image ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse" />
            )}
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
          {title}
        </h3>
        <p
          ref={descriptionRef}
          id={descriptionId}
          className={`text-base leading-7 [word-spacing:0.06em] text-gray-600 dark:text-gray-300 whitespace-pre-line ${
            expanded ? '' : 'line-clamp-4 min-h-[7rem]'
          }`}
        >
          {description}
        </p>
        <div className="mt-3 min-h-6">
          {(overflows || expanded) && (
            <button
              type="button"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-expanded={expanded}
              aria-controls={descriptionId}
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded ? t('projectCard.seeLess') : t('projectCard.seeMore')}
            </button>
          )}
        </div>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex gap-3 flex-wrap pt-8 [&_a]:!px-6 [&_a]:!py-3 [&_a]:!text-base">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.isCurrentSite ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`text-sm flex-shrink-0 inline-flex items-center justify-center ${
                project.isCurrentSite
                  ? 'btn-primary opacity-75 cursor-default pointer-events-none bg-primary-600 dark:bg-primary-700'
                  : 'btn-primary'
              }`}
            >
              {isYouTubeUrl(project.liveUrl) ? t('projectCard.watchOnYouTube') : t('projectCard.liveDemo')}
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm flex-shrink-0 inline-flex items-center justify-center"
            >
              {t('projectCard.download')}
            </a>
          )}
          {project.repoUrl && !project.repoPrivate && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm flex-shrink-0 inline-flex items-center justify-center"
            >
              {t('projectCard.code')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
