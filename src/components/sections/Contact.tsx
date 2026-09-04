import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { MagneticButton } from '../ui/MagneticButton'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      toast.error('Please fix the form errors')
      return
    }

    if (!WEB3FORMS_KEY) {
      toast.error(
        'Form not connected yet. Email me directly using the address on the left.',
        { duration: 5000 },
      )
      return
    }

    setSubmitting(true)
    const toastId = toast.loading('Sending message...')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
        }),
      })

      const data = (await res.json()) as { success?: boolean; message?: string }

      if (data.success) {
        toast.success('Message sent! I will reply soon.', { id: toastId })
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(data.message ?? 'Failed to send. Try emailing me directly.', {
          id: toastId,
        })
      }
    } catch {
      toast.error('Network error. Please email me directly.', { id: toastId })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          subtitle="Open to internships, collaborations, and software engineering opportunities."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: FaEnvelope,
                label: 'Email',
                value: personal.email,
                href: `mailto:${personal.email}`,
              },
              {
                icon: FaPhone,
                label: 'Phone',
                value: personal.phone,
                href: `tel:${personal.phone.replace(/\s/g, '')}`,
              },
              {
                icon: FaGithub,
                label: 'GitHub',
                value: 'shiman-tech',
                href: personal.github,
              },
              {
                icon: FaLinkedin,
                label: 'LinkedIn',
                value: 'shiman-kumar-d',
                href: personal.linkedin,
              },
              {
                icon: SiLeetcode,
                label: 'LeetCode',
                value: 'Shiman_01',
                href: personal.leetcode,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:border-cyan-500/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8"
          >
            {(['name', 'email', 'message'] as const).map((field) => (
              <div key={field} className="mb-5">
                <label
                  htmlFor={field}
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]"
                >
                  {field}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows={5}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    disabled={submitting}
                    className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 disabled:opacity-60"
                    placeholder={`Your ${field}...`}
                  />
                ) : (
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    disabled={submitting}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 disabled:opacity-60"
                    placeholder={`Your ${field}...`}
                  />
                )}
                {errors[field] && (
                  <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
                )}
              </div>
            ))}
            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </MagneticButton>
            <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
              {WEB3FORMS_KEY
                ? 'Messages are delivered directly to my inbox.'
                : 'Form delivery requires a Web3Forms key — use email links above meanwhile.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
