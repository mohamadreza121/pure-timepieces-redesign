import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = leadSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please check the form and try again.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Replace this with Supabase insert, CRM integration, or email notification.
    console.log("Pure Timepieces lead:", parsed.data);

    return NextResponse.json({ ok: true, message: "Request received." });
  } catch {
    return NextResponse.json({ ok: false, message: "Something went wrong." }, { status: 500 });
  }
}
