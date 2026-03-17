"use client"

import { useEffect, useState, useCallback, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

// ============================================
// CONFIGURATION - Easy to change
// ============================================

// Deep link scheme for the BetCrowd app
const DEEP_LINK_SCHEME = "betcrowd"

// App Store URL
const APP_STORE_URL = "https://apps.apple.com/us/app/betcrowd/id6504113969"

// Play Store URL
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.betcrowd.mobile"

// Timeout for app open detection (milliseconds)
const APP_OPEN_TIMEOUT = 1500

// ============================================
// ICONS
// ============================================

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

function JoinPageContent() {
  const searchParams = useSearchParams()

  // State management
  const [isMobile, setIsMobile] = useState(false)
  const [attemptedOpen, setAttemptedOpen] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Get query params
  const tournamentId = searchParams.get("tournamentId") || ""
  const token = searchParams.get("token") || ""

  // Check if params are valid
  const hasValidParams = tournamentId.length > 0 && token.length > 0

  // Build deep link URL
  const buildDeepLink = useCallback(() => {
    const params = new URLSearchParams()
    if (tournamentId) params.set("tournamentId", tournamentId)
    if (token) params.set("token", token)
    const queryString = params.toString()
    return `${DEEP_LINK_SCHEME}://join${queryString ? `?${queryString}` : ""}`
  }, [tournamentId, token])

  // Detect mobile device - runs once on mount
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || ""
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      )
      // Also check screen width as fallback
      const isSmallScreen = window.innerWidth < 768
      return isMobileDevice || isSmallScreen
    }

    const mobile = checkMobile()
    setIsMobile(mobile)
    setIsLoading(false)
  }, [])

  // Show fallback on desktop or invalid params
  useEffect(() => {
    if (isLoading) return
    if (!isMobile || !hasValidParams) {
      setShowFallback(true)
    }
  }, [isLoading, isMobile, hasValidParams])

  // Attempt to open app on mobile
  useEffect(() => {
    if (isLoading || !isMobile || attemptedOpen || !hasValidParams) return

    const deepLink = buildDeepLink()
    let timeoutId: NodeJS.Timeout
    let didOpenApp = false

    // Handle visibility change (app opened)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        didOpenApp = true
        clearTimeout(timeoutId)
      }
    }

    // Handle page hide (app opened - iOS Safari)
    const handlePageHide = () => {
      didOpenApp = true
      clearTimeout(timeoutId)
    }

    // Add listeners
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("pagehide", handlePageHide)

    // Attempt to open deep link
    setAttemptedOpen(true)
    window.location.href = deepLink

    // Fallback timeout
    timeoutId = setTimeout(() => {
      if (!didOpenApp) {
        setShowFallback(true)
      }
    }, APP_OPEN_TIMEOUT)

    // Cleanup
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("pagehide", handlePageHide)
    }
  }, [isLoading, isMobile, attemptedOpen, hasValidParams, buildDeepLink])

  // Handle manual open app click
  const handleOpenApp = () => {
    const deepLink = buildDeepLink()
    window.location.href = deepLink
  }

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="animate-pulse">
          <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A]" />
        </div>
      </main>
    )
  }

  // Missing params error state
  if (!hasValidParams) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-4 py-8">
        <div className="w-full max-w-sm animate-fade-in">
          <div className="bg-[#141414] rounded-3xl p-8 border border-[#1A1A1A] shadow-2xl">
            {/* Logo */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg shadow-[#D7263D]/20 ring-1 ring-white/10">
              <Image
                src="/images/betcrowd-logo.png"
                alt="BetCrowd"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Error message */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <AlertIcon className="w-6 h-6 text-[#D7263D]" />
                <h1 className="text-xl font-bold text-white">
                  Link de invitacion incompleto
                </h1>
              </div>
              <p className="text-[#B3B3B3] text-base">
                El link que abriste no trae toda la informacion necesaria para abrir el torneo en la app. Pedi un nuevo link de invitacion o descarga BetCrowd.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-[#2A2A2A]" />
              <span className="text-[#666] text-xs uppercase tracking-wider">descarga la app</span>
              <div className="flex-1 h-px bg-[#2A2A2A]" />
            </div>

            {/* Store buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                           bg-[#1A1A1A] border border-[#2A2A2A]
                           text-white text-sm font-medium
                           hover:bg-[#222] hover:border-[#333] active:scale-[0.98]
                           transition-all duration-200 ease-out
                           focus:outline-none focus:ring-2 focus:ring-[#D7263D]/50"
                aria-label="Descargar en App Store"
              >
                <AppleIcon className="w-5 h-5" />
                <span>App Store</span>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                           bg-[#1A1A1A] border border-[#2A2A2A]
                           text-white text-sm font-medium
                           hover:bg-[#222] hover:border-[#333] active:scale-[0.98]
                           transition-all duration-200 ease-out
                           focus:outline-none focus:ring-2 focus:ring-[#D7263D]/50"
                aria-label="Descargar en Play Store"
              >
                <PlayStoreIcon className="w-5 h-5" />
                <span>Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // "Opening BetCrowd..." state (mobile only, before fallback)
  if (isMobile && !showFallback) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-4">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg shadow-[#D7263D]/20">
            <Image
              src="/images/betcrowd-logo.png"
              alt="BetCrowd"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="text-white text-lg font-medium">Abriendo BetCrowd...</p>
          <p className="text-[#B3B3B3] text-sm mt-2">Redirigiendo a la app</p>
          <div className="mt-6 flex justify-center">
            <div className="w-6 h-6 border-2 border-[#D7263D] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </main>
    )
  }

  // Fallback UI (desktop or app didn't open)
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-4 py-8">
      <div className="w-full max-w-sm animate-fade-in">
        {/* Card */}
        <div className="bg-[#141414] rounded-3xl p-8 border border-[#1A1A1A] shadow-2xl backdrop-blur-sm">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg shadow-[#D7263D]/20 ring-1 ring-white/10">
            <Image
              src="/images/betcrowd-logo.png"
              alt="BetCrowd"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Text content */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2 text-balance">
              Te invitaron a un torneo
            </h1>
            <p className="text-[#B3B3B3] text-base">
              Sumate desde la app para participar.
            </p>
          </div>

          {/* Help text for mobile */}
          {isMobile && attemptedOpen && (
            <p className="text-[#B3B3B3] text-sm text-center mb-6 bg-[#1A1A1A] rounded-xl p-3">
              Si no se abrio automaticamente, toca &quot;Abrir BetCrowd&quot;.
            </p>
          )}

          {/* Primary CTA */}
          <button
            onClick={handleOpenApp}
            className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg
                       bg-gradient-to-r from-[#D7263D] to-[#FF7A00]
                       hover:opacity-90 active:scale-[0.98]
                       transition-all duration-200 ease-out
                       flex items-center justify-center gap-2
                       focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:ring-offset-2 focus:ring-offset-[#141414]"
            aria-label="Abrir la aplicacion BetCrowd"
          >
            <span>Abrir BetCrowd</span>
            <ExternalLinkIcon className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#2A2A2A]" />
            <span className="text-[#666] text-xs uppercase tracking-wider">o descarga</span>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>

          {/* Store buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                         bg-[#1A1A1A] border border-[#2A2A2A]
                         text-white text-sm font-medium
                         hover:bg-[#222] hover:border-[#333] active:scale-[0.98]
                         transition-all duration-200 ease-out
                         focus:outline-none focus:ring-2 focus:ring-[#D7263D]/50"
              aria-label="Descargar en App Store"
            >
              <AppleIcon className="w-5 h-5" />
              <span>App Store</span>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                         bg-[#1A1A1A] border border-[#2A2A2A]
                         text-white text-sm font-medium
                         hover:bg-[#222] hover:border-[#333] active:scale-[0.98]
                         transition-all duration-200 ease-out
                         focus:outline-none focus:ring-2 focus:ring-[#D7263D]/50"
              aria-label="Descargar en Play Store"
            >
              <PlayStoreIcon className="w-5 h-5" />
              <span>Play Store</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#666] text-sm text-center mt-6">
          Si no tenes la app, instalala gratis.
        </p>
      </div>
    </main>
  )
}

export default function JoinPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="animate-pulse">
          <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A]" />
        </div>
      </main>
    }>
      <JoinPageContent />
    </Suspense>
  )
}
