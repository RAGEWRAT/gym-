import { NextResponse } from "next/server";
import { bookApiSchema } from "@/lib/validation";
import { createSupabaseAdmin } from "@/lib/supabase-admin";
import { sendBookingAdminEmail, sendBookingUserConfirmation } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = bookApiSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = createSupabaseAdmin();
    if (!supabase) {
      console.error("[api/book] Supabase admin client missing (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const row = {
      name: data.name,
      phone: data.phone,
      email: data.email ?? null,
      service: data.service,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      notes: data.notes?.trim() || null,
    };

    const { error: insertError } = await supabase.from("appointments").insert(row);

    if (insertError) {
      console.error("[api/book] Supabase insert:", insertError);
      return NextResponse.json({ success: false, error: "Could not save booking" }, { status: 500 });
    }

    await sendBookingAdminEmail({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      notes: data.notes ?? undefined,
    });

    const sendUser = process.env.SEND_BOOKING_USER_EMAIL === "true";
    if (sendUser && data.email) {
      await sendBookingUserConfirmation(data.email, data.name, data.service);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[api/book]", e);
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
