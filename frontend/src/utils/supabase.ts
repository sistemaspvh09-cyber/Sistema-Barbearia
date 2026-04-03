import { createClient } from '@supabase/supabase-js'

type SupabaseConfigState = {
  configured: boolean
  reason: string | null
  url: string | null
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() ?? ''
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY?.trim() ?? ''
const fallbackSupabaseUrl = 'https://invalid.supabase.local'
const fallbackSupabaseKey = 'missing-publishable-key'

function createSupabaseClient() {
  const client = createClient(supabaseUrl || fallbackSupabaseUrl, supabaseKey || fallbackSupabaseKey)

  if (!supabaseUrl || !supabaseKey) {
    return {
      client,
      config: {
        configured: false,
        reason: 'Variaveis VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ausentes.',
        url: supabaseUrl || null,
      } satisfies SupabaseConfigState,
    }
  }

  try {
    return {
      client,
      config: {
        configured: true,
        reason: null,
        url: supabaseUrl,
      } satisfies SupabaseConfigState,
    }
  } catch (error) {
    return {
      client,
      config: {
        configured: false,
        reason: error instanceof Error ? error.message : 'Falha ao inicializar o client do Supabase.',
        url: supabaseUrl,
      } satisfies SupabaseConfigState,
    }
  }
}

const supabaseBootstrap = createSupabaseClient()

export const supabase = supabaseBootstrap.client
export const supabaseConfig = supabaseBootstrap.config
