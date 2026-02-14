// Database types for the portfolio application

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      books: {
        Row: {
          id: string
          title: string
          author: string
          description: string | null
          cover_url: string | null
          file_url: string | null
          file_type: string | null
          category: string | null
          is_published: boolean
          download_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          author: string
          description?: string | null
          cover_url?: string | null
          file_url?: string | null
          file_type?: string | null
          category?: string | null
          is_published?: boolean
          download_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          author?: string
          description?: string | null
          cover_url?: string | null
          file_url?: string | null
          file_type?: string | null
          category?: string | null
          is_published?: boolean
          download_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          cover_image_url: string | null
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string | null
          author_id: string | null
          is_published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          cover_image_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          author_id?: string | null
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          cover_image_url?: string | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          author_id?: string | null
          is_published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      media: {
        Row: {
          id: string
          filename: string
          original_name: string | null
          mime_type: string | null
          size: number | null
          url: string
          alt_text: string | null
          uploaded_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          filename: string
          original_name?: string | null
          mime_type?: string | null
          size?: number | null
          url: string
          alt_text?: string | null
          uploaded_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          filename?: string
          original_name?: string | null
          mime_type?: string | null
          size?: number | null
          url?: string
          alt_text?: string | null
          uploaded_by?: string | null
          created_at?: string
        }
      }
      sponsors: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          website_url: string | null
          description: string | null
          is_active: boolean
          display_order: number
          click_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          website_url?: string | null
          description?: string | null
          is_active?: boolean
          display_order?: number
          click_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          website_url?: string | null
          description?: string | null
          is_active?: boolean
          display_order?: number
          click_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Type aliases for easier use
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Book = Database['public']['Tables']['books']['Row']
export type Blog = Database['public']['Tables']['blogs']['Row']
export type Media = Database['public']['Tables']['media']['Row']
export type Sponsor = Database['public']['Tables']['sponsors']['Row']

// App-specific types
export type UserRole = 'user' | 'admin'

export interface User {
  id: string
  email: string
  fullName: string | null
  role: UserRole
  avatarUrl: string | null
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
}
