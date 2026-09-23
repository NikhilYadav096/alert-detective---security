import { useEffect, useRef, useState } from 'react'
import './StatCard.css'

function useCountUp(target, duration = 1400, isVisible) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isVisible || hasRun.current) return
    // Only animate numeric values
    const numericTarget = parseFloat(target)
    if (isNaN(numericTarget)) return
    hasRun.current = true

    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return count
}

export default function StatCard({ value, label, tone = 'light' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Parse out numeric prefix + suffix (e.g. "40+" -> 40, "+" suffix)
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  const numeric = match ? match[1] : null
  const suffix  = match ? match[2] : ''
  const isText = !numeric  // non-numeric values like "ISO 9001", "Monthly"
  const animatedCount = useCountUp(numeric, 1400, visible)

  const displayValue = numeric
    ? `${animatedCount}${suffix}`
    : value

  return (
    <div
      ref={ref}
      className={`stat-card stat-card--${tone} ${isText ? 'stat-card--text' : ''} ${visible ? 'is-visible' : ''}`}
      data-reveal
    >
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </div>
  )
}
