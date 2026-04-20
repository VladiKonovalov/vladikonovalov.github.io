import { useState, useCallback, useEffect } from 'react'
import { useI18n } from '../i18n/useI18n'

// Replace with your Cloudflare Worker URL, e.g. https://your-worker-name.workers.dev
const CONTACT_ENDPOINT = 'https://portfolio-contact-api.vladi-konov.workers.dev'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const defaultForm = { name: '', email: '', message: '' }
const defaultErrors = { name: '', email: '', message: '' }

function validate(form, t) {
  const errors = { ...defaultErrors }
  if (!form.name.trim()) errors.name = t('contactForm.errors.nameRequired')
  if (!form.email.trim()) errors.email = t('contactForm.errors.emailRequired')
  else if (!EMAIL_REGEX.test(form.email)) errors.email = t('contactForm.errors.emailInvalid')
  if (!form.message.trim()) errors.message = t('contactForm.errors.messageRequired')
  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

export default function ContactForm() {
  const { t, isRTL } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState(defaultErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setSubmitStatus(null)
    setForm(defaultForm)
    setErrors(defaultErrors)
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const nextErrors = validate(form, t)
      setErrors(nextErrors)
      if (hasErrors(nextErrors)) return

      setIsSubmitting(true)
      setSubmitStatus(null)
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Send failed')
        setSubmitStatus('success')
        setForm(defaultForm)
        // Close after showing confirmation
        setTimeout(() => closeModal(), 2500)
      } catch {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    },
    [form, closeModal, t]
  )

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) {
      document.addEventListener('keydown', onEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeModal])

  return (
    <>
      <style>{`
        .contact-form-modal-backdrop {
          animation: contactFormFadeIn 0.2s ease-out;
        }
        .contact-form-modal-panel {
          animation: contactFormSlideUp 0.3s ease-out;
        }
        @keyframes contactFormFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes contactFormSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label={t('contactForm.openAria')}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {t('contactForm.openButton')}
      </button>

      {isOpen && (
        <div
          className="contact-form-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-form-title"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            className="contact-form-modal-panel w-full max-w-md rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <h3 id="contact-form-title" className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contactForm.title')}
              </h3>

              {submitStatus === 'success' ? (
                <div className="py-6 text-center animate-fade-in">
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{t('contactForm.successTitle')}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t('contactForm.successBody')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contactForm.labels.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder={t('contactForm.placeholders.name')}
                      disabled={isSubmitting}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contactForm.labels.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder={t('contactForm.placeholders.email')}
                      disabled={isSubmitting}
                      dir="ltr"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contactForm.labels.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder={t('contactForm.placeholders.message')}
                      disabled={isSubmitting}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-500 dark:text-red-400">
                      {t('contactForm.errors.sendFailed')}
                    </p>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="btn-secondary flex-1 rounded-xl"
                      disabled={isSubmitting}
                    >
                      {t('contactForm.actions.cancel')}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      {isSubmitting ? t('contactForm.actions.sending') : t('contactForm.actions.send')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
