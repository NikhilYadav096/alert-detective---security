import { useState } from 'react'
import { submitEnquiry } from '../lib/api'
import './ContactForm.css'

const initialValues = { name: '', organization: '', phone: '', email: '', requirement: '' }

const SERVICE_OPTIONS = [
  { id: 'housekeeping',    label: 'Corporate Housekeeping',         icon: '🧹' },
  { id: 'maintenance',    label: 'Facility Maintenance & Tech Ops', icon: '🔧' },
  { id: 'skilled',        label: 'Industrial & Skilled Workforce',  icon: '🏭' },
  { id: 'hospitality',    label: 'Corporate Hospitality',          icon: '🏨' },
  { id: 'horticulture',   label: 'Horticulture & Grounds',         icon: '🌿' },
  { id: 'security',       label: 'Security Services',              icon: '🛡️' },
  { id: 'events',         label: 'Events & Promotions',            icon: '🎪' },
  { id: 'other',          label: 'Other / Multiple Services',      icon: '➕' },
]

function validate(values, selectedServices) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.organization.trim()) errors.organization = 'Please enter your organization.'

  if (selectedServices.length === 0) errors.services = 'Please select at least one service.'

  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.'
  } else if (!/^[0-9+\-\s()]{8,15}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.requirement.trim()) errors.requirement = 'Tell us about your workforce requirement.'

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [selectedServices, setSelectedServices] = useState([])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
    // Clear service error on interaction
    setErrors((prev) => ({ ...prev, services: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values, selectedServices)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setErrorMessage('')
    const serviceLabels = SERVICE_OPTIONS
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.label)
    try {
      await submitEnquiry({ ...values, services: serviceLabels.join(', ') })
      setStatus('success')
      setValues(initialValues)
      setSelectedServices([])
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err?.message?.toLowerCase().includes('activation')
          ? "Form setup: Please check bcortk5@gmail.com and click 'Activate Form' to start receiving enquiries."
          : (err?.message || 'Something went wrong sending your enquiry. Please try again.')
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--success" role="status">
        <h3>Enquiry sent.</h3>
        <p>Thanks for reaching out — our Rohtak team will get back to you shortly.</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Your workforce requirement</h3>

      <div className="contact-form__field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && <p className="contact-form__error" id="name-error">{errors.name}</p>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="organization">Organization</label>
        <input
          id="organization"
          type="text"
          value={values.organization}
          onChange={handleChange('organization')}
          aria-invalid={Boolean(errors.organization)}
          aria-describedby={errors.organization ? 'organization-error' : undefined}
          required
        />
        {errors.organization && <p className="contact-form__error" id="organization-error">{errors.organization}</p>}
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            required
          />
          {errors.phone && <p className="contact-form__error" id="phone-error">{errors.phone}</p>}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && <p className="contact-form__error" id="email-error">{errors.email}</p>}
        </div>
      </div>
      {/* ── Service selection chips ────────────────────────── */}
      <div className="contact-form__field">
        <label>Services Required</label>
        <div className="contact-form__services">
          {SERVICE_OPTIONS.map((svc) => (
            <button
              key={svc.id}
              type="button"
              className={`cf-service-chip ${selectedServices.includes(svc.id) ? 'cf-service-chip--selected' : ''}`}
              onClick={() => toggleService(svc.id)}
              aria-pressed={selectedServices.includes(svc.id)}
            >
              <span className="cf-service-chip__icon" aria-hidden="true">{svc.icon}</span>
              {svc.label}
            </button>
          ))}
        </div>
        {errors.services && <p className="contact-form__error" role="alert">{errors.services}</p>}
      </div>
      <div className="contact-form__field">
        <label htmlFor="requirement">Requirement</label>
        <textarea
          id="requirement"
          rows="4"
          value={values.requirement}
          onChange={handleChange('requirement')}
          aria-invalid={Boolean(errors.requirement)}
          aria-describedby={errors.requirement ? 'requirement-error' : undefined}
          required
        />
        {errors.requirement && <p className="contact-form__error" id="requirement-error">{errors.requirement}</p>}
      </div>

      {status === 'error' && (
        <p className="contact-form__error contact-form__error--top" role="alert">
          {errorMessage || 'Something went wrong sending your enquiry. Please try again.'}
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'} <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
