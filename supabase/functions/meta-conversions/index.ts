import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PIXEL_ID = '2709805712686579';
const API_VERSION = 'v21.0';
const BASE_URL = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('META_CONVERSIONS_API_TOKEN');
    if (!accessToken) {
      throw new Error('META_CONVERSIONS_API_TOKEN is not configured');
    }

    const { event_name, event_time, event_source_url, user_data, custom_data, action_source } = await req.json();

    const payload = {
      data: [
        {
          event_name: event_name || 'PageView',
          event_time: event_time || Math.floor(Date.now() / 1000),
          event_source_url: event_source_url || '',
          action_source: action_source || 'website',
          user_data: user_data || {},
          custom_data: custom_data || {},
        },
      ],
    };

    const response = await fetch(`${BASE_URL}?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Meta API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Meta Conversions API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
