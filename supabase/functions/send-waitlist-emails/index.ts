import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
  city?: string;
  properties_count?: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, city, properties_count }: WaitlistRequest = await req.json();

    console.log("Processing waitlist signup:", { email, city, properties_count });

    // Send admin notification email
    const adminEmailResponse = await resend.emails.send({
      from: "PropCloud Waitlist <noreply@propcloud.io>",
      to: ["contact@propcloud.io"],
      subject: "🎉 New Waitlist Signup - PropCore",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #0d9488; margin-bottom: 20px;">New Waitlist Signup! 🎉</h1>
            
            <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; border-left: 4px solid #0d9488; margin-bottom: 20px;">
              <h3 style="color: #0d9488; margin-top: 0;">Contact Details</h3>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>City:</strong> ${city || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Properties:</strong> ${properties_count || 'Not provided'}</p>
            </div>
            
            <p style="color: #374151; margin-bottom: 20px;">
              A new user has signed up for the PropCore waitlist. Consider reaching out to understand their specific needs and timeline.
            </p>
            
            <div style="background-color: #fef3f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
              <p style="margin: 0; color: #dc2626; font-weight: 500;">Next Steps:</p>
              <ul style="color: #374151; margin: 10px 0;">
                <li>Add to CRM system</li>
                <li>Send personalized follow-up within 24 hours</li>
                <li>Assess fit for beta program</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px; text-align: center;">
              Sent from PropCore Waitlist System
            </p>
          </div>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send welcome email to user
    const userEmailResponse = await resend.emails.send({
      from: "PropCloud Team <welcome@propcloud.io>",
      to: [email],
      subject: "Welcome to PropCloud - You're on the list! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0d9488; margin-bottom: 10px;">Welcome to PropCloud! 🚀</h1>
              <p style="color: #6b7280; font-size: 18px; margin: 0;">You're officially on the waitlist</p>
            </div>
            
            <div style="background-color: #f0fdfa; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
              <h2 style="color: #0d9488; margin-top: 0; margin-bottom: 15px;">What happens next?</h2>
              <div style="display: inline-block; text-align: left;">
                <div style="margin: 12px 0; display: flex; align-items: center;">
                  <span style="color: #0d9488; font-weight: bold; margin-right: 10px;">✓</span>
                  <span style="color: #374151;">We'll review your profile and property details</span>
                </div>
                <div style="margin: 12px 0; display: flex; align-items: center;">
                  <span style="color: #0d9488; font-weight: bold; margin-right: 10px;">✓</span>
                  <span style="color: #374151;">Priority access to beta when we launch</span>
                </div>
                <div style="margin: 12px 0; display: flex; align-items: center;">
                  <span style="color: #0d9488; font-weight: bold; margin-right: 10px;">✓</span>
                  <span style="color: #374151;">Personal onboarding with our AI specialists</span>
                </div>
                <div style="margin: 12px 0; display: flex; align-items: center;">
                  <span style="color: #0d9488; font-weight: bold; margin-right: 10px;">✓</span>
                  <span style="color: #374151;">Exclusive updates on AI breakthroughs</span>
                </div>
              </div>
            </div>
            
            <div style="background-color: #fef7ff; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #7c3aed; margin-top: 0;">Early Beta Results Preview</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; text-align: center;">
                <div>
                  <div style="font-size: 24px; font-weight: bold; color: #0d9488;">+$2,200</div>
                  <div style="font-size: 12px; color: #6b7280;">Monthly revenue increase</div>
                </div>
                <div>
                  <div style="font-size: 24px; font-weight: bold; color: #0d9488;">95%</div>
                  <div style="font-size: 12px; color: #6b7280;">Time savings</div>
                </div>
                <div>
                  <div style="font-size: 24px; font-weight: bold; color: #0d9488;">4.9★</div>
                  <div style="font-size: 12px; color: #6b7280;">Guest satisfaction</div>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #374151; margin-bottom: 20px;">
                Questions? Reply to this email or reach out anytime.
              </p>
              <p style="color: #6b7280; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #0d9488;">The PropCloud Team</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                You're receiving this because you signed up for PropCloud updates.<br>
                PropCloud - AI-Powered Property Management
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("User welcome email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmailId: adminEmailResponse.data?.id,
        userEmailId: userEmailResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-emails function:", error);
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