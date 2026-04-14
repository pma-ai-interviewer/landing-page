import { useState, useEffect, useRef } from 'react'

/**
 * Returns [ref, inView] — inView latches to true once the element enters the viewport.
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

/**
 * Returns inline style object for a fade-in-up entrance.
 * @param {boolean} inView
 * @param {number}  delay  seconds
 */
export function fadeInUp(inView, delay = 0) {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
  }
}
