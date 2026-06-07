'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './Contact.module.css'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const { error } = await supabase.from('contact_messages').insert([{
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.label}>Get in touch</span>
          <h2 className={styles.headline}>
            Have a project<br />
            in mind?
          </h2>
          <p className={styles.sub}>
            Tell us about your project and we'll get back to you within 24 hours.
            No pressure, no commitments — just a conversation.
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:studiobradley900@gmail.com" className={styles.email}>
              studiobradley900@gmail.com ↗
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {status === 'success' ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <h3>Message sent!</h3>
              <p>We'll be in touch within 24 hours.</p>
              <button className={styles.again} onClick={() => setStatus('idle')}>
                Send another
              </button>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's it about?"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project — scope, timeline, budget, whatever's on your mind."
                  rows={5}
                  required
                />
              </div>
              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
              )}
              <button
                className={styles.submit}
                onClick={handleSubmit}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send message →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
