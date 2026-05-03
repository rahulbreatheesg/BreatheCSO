import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <span className="eyebrow justify-center">Lost in the canopy</span>
      <h1 className="display-1 mt-6">404 - that page is in another forest.</h1>
      <p className="lede mt-6 max-w-lg mx-auto">
        Either the link wandered off, or we never planted that one. Either way, here is the way back.
      </p>
      <Link to="/" className="btn-primary mt-10">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
    </section>
  )
}
