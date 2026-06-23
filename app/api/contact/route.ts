import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate parameters
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields. Please supply name, email, and message." },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format. Please provide a valid email." },
        { status: 400 }
      );
    }

    // Simulation / Log captured message (Would connect to Resend / SMTP in production)
    console.log(`[CONTACT FORM] Message received from ${name} (${email}):`);
    console.log(`Message Content: ${message}`);

    // Return success response
    return NextResponse.json(
      { message: "Your message has been received! I'll contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
