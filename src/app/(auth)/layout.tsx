import { Suspense } from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F2ED' }}>
        <div className="animate-pulse">
          <div className="w-12 h-12 rounded-full bg-[#C5A059]/30"></div>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  )
}
