import { Suspense } from 'react'
import ResetPasswordForm from './ResetPasswordForm'

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-dark-950">
        <div className="text-white/60">Loading...</div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}