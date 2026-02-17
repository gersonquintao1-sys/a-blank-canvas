import { supabase } from "@/integrations/supabase/client";

interface ConversionEventData {
  event_name: string;
  event_source_url?: string;
  user_data?: Record<string, unknown>;
  custom_data?: Record<string, unknown>;
  action_source?: string;
}

export const sendConversionEvent = async (data: ConversionEventData) => {
  try {
    const { data: result, error } = await supabase.functions.invoke('meta-conversions', {
      body: {
        event_name: data.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: data.event_source_url || window.location.href,
        user_data: data.user_data || {},
        custom_data: data.custom_data || {},
        action_source: data.action_source || 'website',
      },
    });

    if (error) throw error;
    return result;
  } catch (err) {
    console.error('Failed to send conversion event:', err);
  }
};
