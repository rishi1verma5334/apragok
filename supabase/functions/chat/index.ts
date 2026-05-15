// Lovable AI chat edge function for APRA assistant
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are APRA Assistant, a friendly chatbot for the APRA (Group of Knowledge) website.
APRA is a publisher of academic books and organizer of professional workshops focused on AI in education and related topics.

Help visitors navigate the website. Available pages:
- Home (/) — overview, about, services, leadership team, contact
- Publications (/publications) — book catalog with embedded PDFs
- Call for Book Chapters (/publications/call-for-chapters) — submission info
- Workshops (/workshops) — upcoming and past events; flagship event "FDP on AI in Education" with early bird discount before June 5, 2026
- FDP AI Education details (/workshops/fdp-ai-education)
- Gallery (/gallery) — past event photos

Be warm, concise (2-4 sentences usually), and direct users to the right page. Use markdown links like [Publications](/publications) when referring to pages so they can click through.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Lovable-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: text }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
