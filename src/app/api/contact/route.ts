import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { createSupabaseAdmin } from "@/lib/supabase-admin";
import { sendContactAdminEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = createSupabaseAdmin();
    if (!supabase) {
      console.error("[api/contact] Supabase admin client missing");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    if (insertError) {
      console.error("[api/contact] Supabase insert:", insertError);
      return NextResponse.json(
        {
          success: false,
          error: "Could not save message",
          detail: insertError.message,
        },
        { status: 500 }
      );
    }

    try {
      await sendContactAdminEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
    } catch (emailErr) {
      console.error("[api/contact] Email notification failed (message still saved):", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[api/contact]", e);
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
