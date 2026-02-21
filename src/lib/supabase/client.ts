import { createBrowserClient } from '@supabase/ssr'
import type { Database } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export function createClient() {
  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey
  )
}

// Lazy-initialized singleton
let supabaseInstance: ReturnType<typeof createBrowserClient<Database>> | null = null

export const supabase = new Proxy({} as ReturnType<typeof createBrowserClient<Database>>, {
  get(target, prop) {
    if (!supabaseInstance) {
      supabaseInstance = createClient()
    }
    return Reflect.get(supabaseInstance, prop)
  }
})
