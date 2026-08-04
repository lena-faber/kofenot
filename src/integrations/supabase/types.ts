export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          body: string | null
          company_id: string | null
          contact_id: string | null
          created_at: string
          direction: string | null
          id: string
          metadata: Json | null
          occurred_at: string
          status: string | null
          subject: string | null
          type: string
        }
        Insert: {
          body?: string | null
          company_id?: string | null
          contact_id?: string | null
          created_at?: string
          direction?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string
          status?: string | null
          subject?: string | null
          type: string
        }
        Update: {
          body?: string | null
          company_id?: string | null
          contact_id?: string | null
          created_at?: string
          direction?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string
          status?: string | null
          subject?: string | null
          type?: string
        }
        Relationships: []
      }
      agent_runs: {
        Row: {
          agent: string
          created_at: string
          id: string
          input: Json | null
          output: Json | null
          status: string
        }
        Insert: {
          agent: string
          created_at?: string
          id?: string
          input?: Json | null
          output?: Json | null
          status?: string
        }
        Update: {
          agent?: string
          created_at?: string
          id?: string
          input?: Json | null
          output?: Json | null
          status?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          company_id: string | null
          created_at: string
          event_type: string
          id: string
          metadata: Json | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          ai_entry_point: string | null
          buying_reason: string | null
          created_at: string
          employee_count: string | null
          expected_revenue: number | null
          id: string
          industry: string | null
          is_partner: boolean
          is_repeat_customer: boolean
          last_activity_at: string | null
          linkedin_url: string | null
          location: string | null
          lost_reason: string | null
          name: string
          next_action: string | null
          pain_points: string[] | null
          potential_order_size: number | null
          probability: number
          referral_source_id: string | null
          research_summary: Json | null
          stage: string
          tags: string[] | null
          updated_at: string
          website: string | null
        }
        Insert: {
          ai_entry_point?: string | null
          buying_reason?: string | null
          created_at?: string
          employee_count?: string | null
          expected_revenue?: number | null
          id?: string
          industry?: string | null
          is_partner?: boolean
          is_repeat_customer?: boolean
          last_activity_at?: string | null
          linkedin_url?: string | null
          location?: string | null
          lost_reason?: string | null
          name: string
          next_action?: string | null
          pain_points?: string[] | null
          potential_order_size?: number | null
          probability?: number
          referral_source_id?: string | null
          research_summary?: Json | null
          stage?: string
          tags?: string[] | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          ai_entry_point?: string | null
          buying_reason?: string | null
          created_at?: string
          employee_count?: string | null
          expected_revenue?: number | null
          id?: string
          industry?: string | null
          is_partner?: boolean
          is_repeat_customer?: boolean
          last_activity_at?: string | null
          linkedin_url?: string | null
          location?: string | null
          lost_reason?: string | null
          name?: string
          next_action?: string | null
          pain_points?: string[] | null
          potential_order_size?: number | null
          probability?: number
          referral_source_id?: string | null
          research_summary?: Json | null
          stage?: string
          tags?: string[] | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          company_id: string
          created_at: string
          email: string | null
          id: string
          is_decision_maker: boolean
          linkedin_url: string | null
          name: string
          notes: string | null
          phone: string | null
          role: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          email?: string | null
          id?: string
          is_decision_maker?: boolean
          linkedin_url?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          role?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          email?: string | null
          id?: string
          is_decision_maker?: boolean
          linkedin_url?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          role?: string | null
        }
        Relationships: []
      }
      content_items: {
        Row: {
          ai_generated: boolean
          body: string
          created_at: string
          id: string
          metadata: Json | null
          scheduled_for: string | null
          status: string
          title: string
          type: string
        }
        Insert: {
          ai_generated?: boolean
          body: string
          created_at?: string
          id?: string
          metadata?: Json | null
          scheduled_for?: string | null
          status?: string
          title: string
          type: string
        }
        Update: {
          ai_generated?: boolean
          body?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          scheduled_for?: string | null
          status?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      email_drafts: {
        Row: {
          ai_generated: boolean
          body: string
          company_id: string | null
          contact_id: string | null
          created_at: string
          draft_type: string
          id: string
          sent_at: string | null
          status: string
          subject: string
        }
        Insert: {
          ai_generated?: boolean
          body: string
          company_id?: string | null
          contact_id?: string | null
          created_at?: string
          draft_type: string
          id?: string
          sent_at?: string | null
          status?: string
          subject: string
        }
        Update: {
          ai_generated?: boolean
          body?: string
          company_id?: string | null
          contact_id?: string | null
          created_at?: string
          draft_type?: string
          id?: string
          sent_at?: string | null
          status?: string
          subject?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          branding_method: string | null
          company: string | null
          country: string | null
          created_at: string
          destination: string | null
          email: string
          id: string
          in_hands_date: string | null
          name: string | null
          notes: string | null
          phone: string | null
          quantity: string | null
          raw: Json | null
          role: string | null
          send_spec: boolean
          type: string
        }
        Insert: {
          branding_method?: string | null
          company?: string | null
          country?: string | null
          created_at?: string
          destination?: string | null
          email: string
          id?: string
          in_hands_date?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          quantity?: string | null
          raw?: Json | null
          role?: string | null
          send_spec?: boolean
          type: string
        }
        Update: {
          branding_method?: string | null
          company?: string | null
          country?: string | null
          created_at?: string
          destination?: string | null
          email?: string
          id?: string
          in_hands_date?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          quantity?: string | null
          raw?: Json | null
          role?: string | null
          send_spec?: boolean
          type?: string
        }
        Relationships: []
      }
      notes: {
        Row: {
          company_id: string | null
          contact_id: string | null
          content: string
          created_at: string
          id: string
        }
        Insert: {
          company_id?: string | null
          contact_id?: string | null
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          company_id?: string | null
          contact_id?: string | null
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      objections: {
        Row: {
          best_response: string
          category: string | null
          created_at: string
          id: string
          objection: string
          success_rate: number | null
          usage_count: number
        }
        Insert: {
          best_response: string
          category?: string | null
          created_at?: string
          id?: string
          objection: string
          success_rate?: number | null
          usage_count?: number
        }
        Update: {
          best_response?: string
          category?: string | null
          created_at?: string
          id?: string
          objection?: string
          success_rate?: number | null
          usage_count?: number
        }
        Relationships: []
      }
      opportunities: {
        Row: {
          company_id: string
          created_at: string
          expected_close_date: string | null
          id: string
          lost_reason: string | null
          probability: number | null
          stage: string
          title: string
          updated_at: string
          value: number | null
        }
        Insert: {
          company_id: string
          created_at?: string
          expected_close_date?: string | null
          id?: string
          lost_reason?: string | null
          probability?: number | null
          stage: string
          title: string
          updated_at?: string
          value?: number | null
        }
        Update: {
          company_id?: string
          created_at?: string
          expected_close_date?: string | null
          id?: string
          lost_reason?: string | null
          probability?: number | null
          stage?: string
          title?: string
          updated_at?: string
          value?: number | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          company_id: string
          created_at: string
          id: string
          order_number: string | null
          quote_id: string | null
          shipped_at: string | null
          status: string
          total: number
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          order_number?: string | null
          quote_id?: string | null
          shipped_at?: string | null
          status?: string
          total: number
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          order_number?: string | null
          quote_id?: string | null
          shipped_at?: string | null
          status?: string
          total?: number
        }
        Relationships: []
      }
      partnerships: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          name: string
          notes: string | null
          status: string
          type: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          name: string
          notes?: string | null
          status?: string
          type?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          name?: string
          notes?: string | null
          status?: string
          type?: string | null
        }
        Relationships: []
      }
      quotes: {
        Row: {
          company_id: string
          contact_id: string | null
          created_at: string
          id: string
          items: Json | null
          quote_number: string | null
          status: string
          total: number | null
          valid_until: string | null
        }
        Insert: {
          company_id: string
          contact_id?: string | null
          created_at?: string
          id?: string
          items?: Json | null
          quote_number?: string | null
          status?: string
          total?: number | null
          valid_until?: string | null
        }
        Update: {
          company_id?: string
          contact_id?: string | null
          created_at?: string
          id?: string
          items?: Json | null
          quote_number?: string | null
          status?: string
          total?: number | null
          valid_until?: string | null
        }
        Relationships: []
      }
      samples: {
        Row: {
          company_id: string
          contact_id: string | null
          converted: boolean
          created_at: string
          follow_up_due: string | null
          id: string
          notes: string | null
          shipped_at: string | null
          tracking_number: string | null
        }
        Insert: {
          company_id: string
          contact_id?: string | null
          converted?: boolean
          created_at?: string
          follow_up_due?: string | null
          id?: string
          notes?: string | null
          shipped_at?: string | null
          tracking_number?: string | null
        }
        Update: {
          company_id?: string
          contact_id?: string | null
          converted?: boolean
          created_at?: string
          follow_up_due?: string | null
          id?: string
          notes?: string | null
          shipped_at?: string | null
          tracking_number?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          ai_generated: boolean
          company_id: string | null
          completed_at: string | null
          contact_id: string | null
          created_at: string
          description: string | null
          due_at: string | null
          id: string
          priority: string
          status: string
          task_type: string | null
          title: string
        }
        Insert: {
          ai_generated?: boolean
          company_id?: string | null
          completed_at?: string | null
          contact_id?: string | null
          created_at?: string
          description?: string | null
          due_at?: string | null
          id?: string
          priority?: string
          status?: string
          task_type?: string | null
          title: string
        }
        Update: {
          ai_generated?: boolean
          company_id?: string | null
          completed_at?: string | null
          contact_id?: string | null
          created_at?: string
          description?: string | null
          due_at?: string | null
          id?: string
          priority?: string
          status?: string
          task_type?: string | null
          title?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
