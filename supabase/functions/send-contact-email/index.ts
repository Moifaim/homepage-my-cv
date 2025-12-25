import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", name, email);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["lionel.togbe@icloud.com"],
        subject: `[Portfolio] ${subject} - de ${name}`,
        html: `
          <div style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #00ff88; padding: 30px; border: 1px solid #00ff88;">
            <h1 style="color: #00ffff; border-bottom: 1px solid #00ff88; padding-bottom: 10px;">
              🔐 Nouveau Message depuis votre Portfolio
            </h1>
            
            <div style="margin: 20px 0; padding: 15px; background: #111; border-left: 3px solid #00ffff;">
              <p><strong style="color: #00ffff;">De:</strong> ${name}</p>
              <p><strong style="color: #00ffff;">Email:</strong> ${email}</p>
              <p><strong style="color: #00ffff;">Sujet:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #00ffff;">Message:</h3>
              <p style="background: #111; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              Ce message a été envoyé depuis votre portfolio cybersécurité.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
